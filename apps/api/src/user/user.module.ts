import { ModelsModule } from '@aelp-app/models';
import { Module } from '@nestjs/common';
import { IPAddressLookUpService } from '../helper-services/IPAdddressLookUp.service';
import UserResolver from './user.resolver';
import { UserService } from './user.service';

@Module({
  imports: [ModelsModule],
  providers: [IPAddressLookUpService, UserResolver, UserService],
  exports: [UserService],
})
export default class UserModule {}
