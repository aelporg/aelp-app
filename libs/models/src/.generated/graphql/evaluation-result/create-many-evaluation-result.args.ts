import { Field } from '@nestjs/graphql';
import { ArgsType } from '@nestjs/graphql';
import { EvaluationResultCreateManyInput } from './evaluation-result-create-many.input';

@ArgsType()
export class CreateManyEvaluationResultArgs {

    @Field(() => [EvaluationResultCreateManyInput], {nullable:false})
    data!: Array<EvaluationResultCreateManyInput>;

    @Field(() => Boolean, {nullable:true})
    skipDuplicates?: boolean;
}
