import { InputType } from '@nestjs/graphql/dist/decorators/input-type.decorator';
import { Field } from '@nestjs/graphql/dist/decorators/field.decorator';
import { IsOptional, MaxLength, MinLength } from 'class-validator';

@InputType()
export class CreateClassroom {
  @MinLength(3)
  @MaxLength(250)
  @Field()
  name!: string;

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
