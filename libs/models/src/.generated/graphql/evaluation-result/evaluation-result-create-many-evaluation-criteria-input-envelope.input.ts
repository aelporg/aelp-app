import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { EvaluationResultCreateManyEvaluationCriteriaInput } from './evaluation-result-create-many-evaluation-criteria.input';

@InputType()
export class EvaluationResultCreateManyEvaluationCriteriaInputEnvelope {

    @Field(() => [EvaluationResultCreateManyEvaluationCriteriaInput], {nullable:false})
    data!: Array<EvaluationResultCreateManyEvaluationCriteriaInput>;

    @Field(() => Boolean, {nullable:true})
    skipDuplicates?: boolean;
}
