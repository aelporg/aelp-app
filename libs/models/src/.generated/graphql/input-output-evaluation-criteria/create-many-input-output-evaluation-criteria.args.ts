import { Field } from '@nestjs/graphql';
import { ArgsType } from '@nestjs/graphql';
import { InputOutputEvaluationCriteriaCreateManyInput } from './input-output-evaluation-criteria-create-many.input';

@ArgsType()
export class CreateManyInputOutputEvaluationCriteriaArgs {

    @Field(() => [InputOutputEvaluationCriteriaCreateManyInput], {nullable:false})
    data!: Array<InputOutputEvaluationCriteriaCreateManyInput>;

    @Field(() => Boolean, {nullable:true})
    skipDuplicates?: boolean;
}
