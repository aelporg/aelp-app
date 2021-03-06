import { ModelsModule } from '@aelp-app/models'
import { Global, Module } from '@nestjs/common'
import AuthResolver from './auth.resolver'
import { JwtModule } from '@nestjs/jwt'
import { ConfigService } from '@nestjs/config'
import { JwtStrategy } from './stratergies/JwtStrategy'
import { PassportModule } from '@nestjs/passport'
import { AuthService } from './auth.service'
import UserModule from '../user/user.module'
import { GoogleOAuthClientService } from './google-oauth-client.service'
import { IPAddressLookUpService } from '../../helper-services/IPAdddressLookUp.service'
import { JwtAuthGuard } from './guards/JwtAuthGuard'

@Global()
@Module({
  imports: [
    UserModule,
    ModelsModule,
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
  ],
  providers: [
    AuthService,
    IPAddressLookUpService,
    GoogleOAuthClientService,
    AuthResolver,
    JwtAuthGuard,
    JwtStrategy,
  ],
  exports: [AuthService, JwtAuthGuard],
})
export default class AuthModule {}
