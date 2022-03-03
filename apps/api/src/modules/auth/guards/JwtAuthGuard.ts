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
    const ctx = GqlExecutionContext.create(context)
    const { req, connection } = ctx.getContext()

    return connection && connection.context && connection.context.headers
      ? connection.context
      : req
  }

  async activate(context: ExecutionContext) {
    return super.canActivate(context) as Promise<boolean>
  }

  async canActivate(context: ExecutionContext): Promise<boolean> {
    const gctx = GqlExecutionContext.create(context).getContext()
    const req: Request = this.getRequest(context)

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
      return this.activate(context)
    }

    if (!refreshToken) {
      throw new AuthenticationError('Unathenticated')
    }

    const { token } = await this.authService.refreshAuth(refreshToken)

    const newToken = token

    if (!newToken) {
      throw new AuthenticationError('Unathenticated')
    }

    req.headers['x-access-token'] = newToken

    if (gctx.res) {
      gctx.res.setHeader('set-access-token', newToken)
    }

    return this.activate(context)
  }
}
