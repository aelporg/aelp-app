import { ExtractJwt, Strategy } from 'passport-jwt'
import { PassportStrategy } from '@nestjs/passport'
import { Injectable } from '@nestjs/common'
import { ConfigService } from '@nestjs/config'
import { UserAuthInfo } from '../types/UserAuthInfo'
import { RedisCacheService } from '@aelp-app/redis'
import { UserService } from '../../user/user.service'

interface JwtPayload {
  ext: number
  iat: number
  userId: UserAuthInfo['userId']
}

@Injectable()
export class JwtStrategy extends PassportStrategy(Strategy) {
  constructor(
    readonly configService: ConfigService,
    private readonly userService: UserService,
    private readonly redisCacheService: RedisCacheService
  ) {
    super({
      jwtFromRequest: ExtractJwt.fromHeader('x-access-token'),
      ignoreExpiration: false,
      secretOrKey: configService.get<string>('JWT_SECRET'),
    })
  }

  async validate(payload: JwtPayload) {
    return this.redisCacheService.cache(`user_${payload.userId}`, () =>
      this.userService.getUserById(payload.userId)
    )
  }
}
