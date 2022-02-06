import { ModelsModule } from '@aelp-app/models'
import { Global, Module } from '@nestjs/common'
import { IPAddressLookUpService } from '../../helper-services/IPAdddressLookUp.service'
import AuthModule from '../auth/auth.module'
import UserResolver from './user.resolver'
import { UserService } from './user.service'
@Global()
@Module({
  imports: [ModelsModule],
  providers: [IPAddressLookUpService, UserResolver, UserService],
  exports: [UserService],
})
export default class UserModule {}
