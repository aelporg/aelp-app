import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { ProgrammingQuestionWhereUniqueInput } from './programming-question-where-unique.input';
import { ProgrammingQuestionCreateWithoutEvaluationCriteriasInput } from './programming-question-create-without-evaluation-criterias.input';

@InputType()
export class ProgrammingQuestionCreateOrConnectWithoutEvaluationCriteriasInput {

    @Field(() => ProgrammingQuestionWhereUniqueInput, {nullable:false})
    where!: ProgrammingQuestionWhereUniqueInput;

    @Field(() => ProgrammingQuestionCreateWithoutEvaluationCriteriasInput, {nullable:false})
    create!: ProgrammingQuestionCreateWithoutEvaluationCriteriasInput;
}
