import { Field } from '@nestjs/graphql';
import { ObjectType } from '@nestjs/graphql';
import { ID } from '@nestjs/graphql';
import { Int } from '@nestjs/graphql';

@ObjectType()
export class QuestionAnswer {

  @Field(() => ID, { nullable: false })
  id!: string;

  @Field(() => String, { nullable: false })
  questionId!: string;


  @Field(() => String, { nullable: true })
  multipleChoiceQuestionAnswerId!: string | null;


  @Field(() => String, { nullable: true })
  programmingQuestionAnswerId!: string | null;

  @Field(() => Date, { nullable: false })
  updatedAt!: Date;

  @Field(() => Date, { nullable: false })
  createdAt!: Date;


  @Field(() => String, { nullable: true })
  assessmentSubmissionId!: string | null;

  @Field(() => Int, { nullable: true })
  points?: number | null;

  @Field(() => String, { nullable: true })
  userId!: string | null;
}
