import { Field, InputType } from '@nestjs/graphql';
import { IsOptional, MaxLength, MinLength } from 'class-validator';

@InputType()
export default class CreateClassroomDto {
  @MinLength(3)
  @MaxLength(250)
  @Field()
  name: string;

  @MinLength(1)
  @IsOptional()
  @MaxLength(250)
  @Field({ nullable: true })
  subject?: string;

  @MinLength(1)
  @IsOptional()
  @MaxLength(250)
  @Field({ nullable: true })
  section?: string;
}
