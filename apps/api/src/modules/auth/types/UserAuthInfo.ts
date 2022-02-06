import { Field, ObjectType } from '@nestjs/graphql';

@ObjectType()
export class UserAuthInfo {
  @Field()
  token: string;

  @Field()
  userId: string;

  @Field()
  refreshToken: string;
}
