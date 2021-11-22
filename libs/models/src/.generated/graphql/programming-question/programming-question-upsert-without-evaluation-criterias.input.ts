import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { ProgrammingQuestionUpdateWithoutEvaluationCriteriasInput } from './programming-question-update-without-evaluation-criterias.input';
import { ProgrammingQuestionCreateWithoutEvaluationCriteriasInput } from './programming-question-create-without-evaluation-criterias.input';

@InputType()
export class ProgrammingQuestionUpsertWithoutEvaluationCriteriasInput {

    @Field(() => ProgrammingQuestionUpdateWithoutEvaluationCriteriasInput, {nullable:false})
    update!: ProgrammingQuestionUpdateWithoutEvaluationCriteriasInput;

    @Field(() => ProgrammingQuestionCreateWithoutEvaluationCriteriasInput, {nullable:false})
    create!: ProgrammingQuestionCreateWithoutEvaluationCriteriasInput;
}
