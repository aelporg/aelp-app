import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { EvaluationCriteriaCreateWithoutProgrammingQuestionInput } from './evaluation-criteria-create-without-programming-question.input';
import { EvaluationCriteriaCreateOrConnectWithoutProgrammingQuestionInput } from './evaluation-criteria-create-or-connect-without-programming-question.input';
import { EvaluationCriteriaCreateManyProgrammingQuestionInputEnvelope } from './evaluation-criteria-create-many-programming-question-input-envelope.input';
import { EvaluationCriteriaWhereUniqueInput } from './evaluation-criteria-where-unique.input';

@InputType()
export class EvaluationCriteriaCreateNestedManyWithoutProgrammingQuestionInput {

    @Field(() => [EvaluationCriteriaCreateWithoutProgrammingQuestionInput], {nullable:true})
    create?: Array<EvaluationCriteriaCreateWithoutProgrammingQuestionInput>;

    @Field(() => [EvaluationCriteriaCreateOrConnectWithoutProgrammingQuestionInput], {nullable:true})
    connectOrCreate?: Array<EvaluationCriteriaCreateOrConnectWithoutProgrammingQuestionInput>;

    @Field(() => EvaluationCriteriaCreateManyProgrammingQuestionInputEnvelope, {nullable:true})
    createMany?: EvaluationCriteriaCreateManyProgrammingQuestionInputEnvelope;

    @Field(() => [EvaluationCriteriaWhereUniqueInput], {nullable:true})
    connect?: Array<EvaluationCriteriaWhereUniqueInput>;
}
