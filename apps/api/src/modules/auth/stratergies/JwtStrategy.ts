import { ExtractJwt, Strategy } from 'passport-jwt';
import { PassportStrategy } from '@nestjs/passport';
import { Injectable } from '@nestjs/common';
import { ConfigService } from '@nestjs/config';
import { UserAuthInfoDto } from '../dto/UserAuthInfoDto';
import { PrismaService } from '@aelp-app/models';
import { RedisCacheService } from '@aelp-app/redis';
import { UserService } from '../../user/user.service';

@Injectable()
export class JwtStrategy extends PassportStrategy(Strategy) {
  constructor(
    private readonly configService: ConfigService,
    private readonly userService: UserService,
    private readonly redisCacheService: RedisCacheService
  ) {
    super({
      jwtFromRequest: ExtractJwt.fromAuthHeaderAsBearerToken(),
      ignoreExpiration: false,
      secretOrKey: configService.get<string>('JWT_SECRET'),
    });
  }

  async validate(payload: Pick<UserAuthInfoDto, 'userId'>) {
    return this.redisCacheService.cache(`user_${payload.userId}`, () =>
      this.userService.getUserById(payload.userId)
    );
  }
}
