import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { QuestionWhereUniqueInput } from './question-where-unique.input';
import { QuestionCreateWithoutProgrammingQuestionInput } from './question-create-without-programming-question.input';

@InputType()
export class QuestionCreateOrConnectWithoutProgrammingQuestionInput {

    @Field(() => QuestionWhereUniqueInput, {nullable:false})
    where!: QuestionWhereUniqueInput;

    @Field(() => QuestionCreateWithoutProgrammingQuestionInput, {nullable:false})
    create!: QuestionCreateWithoutProgrammingQuestionInput;
}
