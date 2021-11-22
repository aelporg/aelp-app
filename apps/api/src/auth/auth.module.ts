import { ModelsModule } from '@aelp-app/models';
import { Module } from '@nestjs/common';
import AuthResolver from './auth.resolver';
import { JwtModule } from '@nestjs/jwt';
import { ConfigService } from '@nestjs/config';
import { JwtStrategy } from './stratergies/JwtStrategy';
import { PassportModule } from '@nestjs/passport';

@Module({
  imports: [
    PassportModule,
    JwtModule.registerAsync({
      inject: [ConfigService],
      useFactory: async (configService: ConfigService) => ({
        secret: configService.get<string>('JWT_SECRET'),
        signOptions: {
          expiresIn: configService.get<string>('JWT_SIGNING_TIME'),
        },
      }),
    }),
    ModelsModule,
  ],
  providers: [AuthResolver, JwtStrategy],
})
export default class AuthModule {}
