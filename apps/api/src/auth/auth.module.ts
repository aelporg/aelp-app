import { ModelsModule } from '@aelp-app/models';
import { Module } from '@nestjs/common';
import AuthResolver from './auth.resolver';
import { JwtModule } from '@nestjs/jwt';
import { ConfigService } from '@nestjs/config';

@Module({
  imports: [
    JwtModule.registerAsync({
      inject: [ConfigService],
      useFactory: async (configService: ConfigService) => ({
        secret: configService.get<string>('JWT_SECRET'),
        signOptions: { expiresIn: '1m' },
      }),
    }),
    ModelsModule,
  ],
  providers: [AuthResolver],
})
export default class AuthModule {}
