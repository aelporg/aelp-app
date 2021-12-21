import { InputType } from '@nestjs/graphql/dist/decorators/input-type.decorator';
import { Field } from '@nestjs/graphql/dist/decorators/field.decorator';
import { Equals, IsEmail, Matches, MinLength } from 'class-validator';
import { IsEqualTo } from '../lib/IsEqualTo';

@InputType()
export class UserRegisterDtoWithPassword {
  @Field()
  @MinLength(8, {
    message: `Password must be at least 8 characters long`,
  })
  password!: string;

  @Field()
  @IsEqualTo('password', { message: 'Passwords must match' })
  confirmPassword!: string;

  @Field()
  @IsEmail({}, { message: 'Invalid email' })
  email!: string;

  @Field()
  @Equals(true, { message: 'You must accept the terms and conditions' })
  agreeTerms!: boolean;
}

// Hack: For hookform/resolvers to work, we need to extend the original class with no new fields.
// Apparently, new fields dont appear in the form
export class HFUserRegister extends UserRegisterDtoWithPassword {}
