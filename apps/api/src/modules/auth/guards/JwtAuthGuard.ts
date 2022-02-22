import { PrismaService } from '@aelp-app/models'
import { ExecutionContext, Injectable, Logger } from '@nestjs/common'
import { GqlExecutionContext } from '@nestjs/graphql'
import { AuthGuard } from '@nestjs/passport'
import { ExtractJwt } from 'passport-jwt'
import { AuthService } from '../auth.service'
import { Request, Response } from 'express'
import { AuthenticationError } from 'apollo-server-express'
import { Reflector } from '@nestjs/core'

@Injectable()
export class JwtAuthGuard extends AuthGuard(['jwt']) {
  private readonly logger = new Logger(JwtAuthGuard.name)

  constructor(
    private readonly authService: AuthService,
    private readonly reflector: Reflector
  ) {
    super()
  }

  getRequest(context: ExecutionContext) {
    return GqlExecutionContext.create(context).getContext().req
  }

  async activate(context: ExecutionContext) {
    return super.canActivate(context)
  }

  async canActivate(context: ExecutionContext): Promise<boolean> {
    const gctx = GqlExecutionContext.create(context).getContext()
    const req: Request = gctx.req

    const skipAuth = this.reflector.get<boolean>(
      'skipAuth',
      context.getHandler()
    )

    if (skipAuth) {
      this.logger.log('Skipping auth guard')
      return true
    }

    const accessToken = ExtractJwt.fromHeader('x-access-token')(req)
    const refreshToken = req.headers['x-refresh-token'] as string
    const isAccessTokenValid = this.authService.verifyAuthToken(accessToken)

    if (isAccessTokenValid) {
      return true
    }

    if (!refreshToken) {
      throw new AuthenticationError('Unathenticated')
    }

    let newToken: string | null

    const { token } = await this.authService.refreshAuth(refreshToken)

    newToken = token

    if (!newToken) {
      throw new AuthenticationError('Unathenticated')
    }

    req.headers['x-access-token'] = newToken
    gctx.res.setHeader('set-access-token', newToken)

    return true
  }
}
