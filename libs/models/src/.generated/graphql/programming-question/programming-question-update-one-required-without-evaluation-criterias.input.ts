import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { ProgrammingQuestionCreateWithoutEvaluationCriteriasInput } from './programming-question-create-without-evaluation-criterias.input';
import { ProgrammingQuestionCreateOrConnectWithoutEvaluationCriteriasInput } from './programming-question-create-or-connect-without-evaluation-criterias.input';
import { ProgrammingQuestionUpsertWithoutEvaluationCriteriasInput } from './programming-question-upsert-without-evaluation-criterias.input';
import { ProgrammingQuestionWhereUniqueInput } from './programming-question-where-unique.input';
import { ProgrammingQuestionUpdateWithoutEvaluationCriteriasInput } from './programming-question-update-without-evaluation-criterias.input';

@InputType()
export class ProgrammingQuestionUpdateOneRequiredWithoutEvaluationCriteriasInput {

    @Field(() => ProgrammingQuestionCreateWithoutEvaluationCriteriasInput, {nullable:true})
    create?: ProgrammingQuestionCreateWithoutEvaluationCriteriasInput;

    @Field(() => ProgrammingQuestionCreateOrConnectWithoutEvaluationCriteriasInput, {nullable:true})
    connectOrCreate?: ProgrammingQuestionCreateOrConnectWithoutEvaluationCriteriasInput;

    @Field(() => ProgrammingQuestionUpsertWithoutEvaluationCriteriasInput, {nullable:true})
    upsert?: ProgrammingQuestionUpsertWithoutEvaluationCriteriasInput;

    @Field(() => ProgrammingQuestionWhereUniqueInput, {nullable:true})
    connect?: ProgrammingQuestionWhereUniqueInput;

    @Field(() => ProgrammingQuestionUpdateWithoutEvaluationCriteriasInput, {nullable:true})
    update?: ProgrammingQuestionUpdateWithoutEvaluationCriteriasInput;
}
