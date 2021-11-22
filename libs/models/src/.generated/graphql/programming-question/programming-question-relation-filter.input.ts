import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { ProgrammingQuestionWhereInput } from './programming-question-where.input';

@InputType()
export class ProgrammingQuestionRelationFilter {

    @Field(() => ProgrammingQuestionWhereInput, {nullable:true})
    is?: ProgrammingQuestionWhereInput;

    @Field(() => ProgrammingQuestionWhereInput, {nullable:true})
    isNot?: ProgrammingQuestionWhereInput;
}
