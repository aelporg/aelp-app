import { Field, ObjectType } from '@nestjs/graphql';

@ObjectType()
export class UserAuthInfoDto {
  @Field()
  token: string;

  @Field()
  userId: string;

  @Field()
  refreshToken: string;
}
