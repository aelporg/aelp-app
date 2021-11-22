import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { ProgrammingQuestionCreateWithoutEvaluationCriteriasInput } from './programming-question-create-without-evaluation-criterias.input';
import { ProgrammingQuestionCreateOrConnectWithoutEvaluationCriteriasInput } from './programming-question-create-or-connect-without-evaluation-criterias.input';
import { ProgrammingQuestionWhereUniqueInput } from './programming-question-where-unique.input';

@InputType()
export class ProgrammingQuestionCreateNestedOneWithoutEvaluationCriteriasInput {

    @Field(() => ProgrammingQuestionCreateWithoutEvaluationCriteriasInput, {nullable:true})
    create?: ProgrammingQuestionCreateWithoutEvaluationCriteriasInput;

    @Field(() => ProgrammingQuestionCreateOrConnectWithoutEvaluationCriteriasInput, {nullable:true})
    connectOrCreate?: ProgrammingQuestionCreateOrConnectWithoutEvaluationCriteriasInput;

    @Field(() => ProgrammingQuestionWhereUniqueInput, {nullable:true})
    connect?: ProgrammingQuestionWhereUniqueInput;
}
