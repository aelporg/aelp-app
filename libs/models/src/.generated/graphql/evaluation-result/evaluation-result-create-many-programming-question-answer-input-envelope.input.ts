import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { EvaluationResultCreateManyProgrammingQuestionAnswerInput } from './evaluation-result-create-many-programming-question-answer.input';

@InputType()
export class EvaluationResultCreateManyProgrammingQuestionAnswerInputEnvelope {

    @Field(() => [EvaluationResultCreateManyProgrammingQuestionAnswerInput], {nullable:false})
    data!: Array<EvaluationResultCreateManyProgrammingQuestionAnswerInput>;

    @Field(() => Boolean, {nullable:true})
    skipDuplicates?: boolean;
}
