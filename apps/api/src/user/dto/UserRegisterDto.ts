import { Field, InputType } from '@nestjs/graphql';
import { Equals, IsEmail, Matches, MinLength } from 'class-validator';
import { IsEqualTo } from '../../utils/decorators/IsEqualTo';

@InputType()
export class UserRegisterDto {
  @Field()
  @Matches(/^[a-zA-Z_][a-zA-Z0-9]{4,10}$/, {
    message: 'Username is invalid format',
  })
  userName: string;

  @Field()
  @IsEmail()
  email: string;

  @Field()
  @MinLength(8)
  password: string;

  @Field()
  @IsEqualTo('password')
  confirmPassword: string;

  @Field()
  @Equals(true, { message: 'You must accept the terms and conditions' })
  agreeTerms: boolean;
}
