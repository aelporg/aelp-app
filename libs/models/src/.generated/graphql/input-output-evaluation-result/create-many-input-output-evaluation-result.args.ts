import { Field } from '@nestjs/graphql';
import { ArgsType } from '@nestjs/graphql';
import { InputOutputEvaluationResultCreateManyInput } from './input-output-evaluation-result-create-many.input';

@ArgsType()
export class CreateManyInputOutputEvaluationResultArgs {

    @Field(() => [InputOutputEvaluationResultCreateManyInput], {nullable:false})
    data!: Array<InputOutputEvaluationResultCreateManyInput>;

    @Field(() => Boolean, {nullable:true})
    skipDuplicates?: boolean;
}
