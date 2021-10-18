import { Module } from '@nestjs/common';
import { UserCrudResolver } from '.generated/graphql';

@Module({ providers: [UserCrudResolver] })
export default class UserModule {}
