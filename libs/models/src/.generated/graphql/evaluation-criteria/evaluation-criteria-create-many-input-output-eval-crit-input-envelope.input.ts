import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { EvaluationCriteriaCreateManyInputOutputEvalCritInput } from './evaluation-criteria-create-many-input-output-eval-crit.input';

@InputType()
export class EvaluationCriteriaCreateManyInputOutputEvalCritInputEnvelope {

    @Field(() => [EvaluationCriteriaCreateManyInputOutputEvalCritInput], {nullable:false})
    data!: Array<EvaluationCriteriaCreateManyInputOutputEvalCritInput>;

    @Field(() => Boolean, {nullable:true})
    skipDuplicates?: boolean;
}
