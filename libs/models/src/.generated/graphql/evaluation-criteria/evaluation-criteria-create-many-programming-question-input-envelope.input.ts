import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { EvaluationCriteriaCreateManyProgrammingQuestionInput } from './evaluation-criteria-create-many-programming-question.input';

@InputType()
export class EvaluationCriteriaCreateManyProgrammingQuestionInputEnvelope {

    @Field(() => [EvaluationCriteriaCreateManyProgrammingQuestionInput], {nullable:false})
    data!: Array<EvaluationCriteriaCreateManyProgrammingQuestionInput>;

    @Field(() => Boolean, {nullable:true})
    skipDuplicates?: boolean;
}
