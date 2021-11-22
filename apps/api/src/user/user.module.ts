import { ModelsModule } from '@aelp-app/models';
import { Module } from '@nestjs/common';
import { IPAddressLookUpService } from '../helper-services/IPAdddressLookUp.service';
import UserResolver from './user.resolver';

@Module({
  imports: [ModelsModule],
  providers: [IPAddressLookUpService, UserResolver],
})
export default class UserModule {}
