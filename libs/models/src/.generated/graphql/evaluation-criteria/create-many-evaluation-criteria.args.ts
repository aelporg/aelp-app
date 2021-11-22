import { Field } from '@nestjs/graphql';
import { ArgsType } from '@nestjs/graphql';
import { EvaluationCriteriaCreateManyInput } from './evaluation-criteria-create-many.input';

@ArgsType()
export class CreateManyEvaluationCriteriaArgs {

    @Field(() => [EvaluationCriteriaCreateManyInput], {nullable:false})
    data!: Array<EvaluationCriteriaCreateManyInput>;

    @Field(() => Boolean, {nullable:true})
    skipDuplicates?: boolean;
}
