import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { InputOutputEvaluationResultCreateWithoutBaseEvaluationResultInput } from './input-output-evaluation-result-create-without-base-evaluation-result.input';
import { InputOutputEvaluationResultCreateOrConnectWithoutBaseEvaluationResultInput } from './input-output-evaluation-result-create-or-connect-without-base-evaluation-result.input';
import { InputOutputEvaluationResultUpsertWithoutBaseEvaluationResultInput } from './input-output-evaluation-result-upsert-without-base-evaluation-result.input';
import { InputOutputEvaluationResultWhereUniqueInput } from './input-output-evaluation-result-where-unique.input';
import { InputOutputEvaluationResultUpdateWithoutBaseEvaluationResultInput } from './input-output-evaluation-result-update-without-base-evaluation-result.input';

@InputType()
export class InputOutputEvaluationResultUpdateOneWithoutBaseEvaluationResultInput {

    @Field(() => InputOutputEvaluationResultCreateWithoutBaseEvaluationResultInput, {nullable:true})
    create?: InputOutputEvaluationResultCreateWithoutBaseEvaluationResultInput;

    @Field(() => InputOutputEvaluationResultCreateOrConnectWithoutBaseEvaluationResultInput, {nullable:true})
    connectOrCreate?: InputOutputEvaluationResultCreateOrConnectWithoutBaseEvaluationResultInput;

    @Field(() => InputOutputEvaluationResultUpsertWithoutBaseEvaluationResultInput, {nullable:true})
    upsert?: InputOutputEvaluationResultUpsertWithoutBaseEvaluationResultInput;

    @Field(() => Boolean, {nullable:true})
    disconnect?: boolean;

    @Field(() => Boolean, {nullable:true})
    delete?: boolean;

    @Field(() => InputOutputEvaluationResultWhereUniqueInput, {nullable:true})
    connect?: InputOutputEvaluationResultWhereUniqueInput;

    @Field(() => InputOutputEvaluationResultUpdateWithoutBaseEvaluationResultInput, {nullable:true})
    update?: InputOutputEvaluationResultUpdateWithoutBaseEvaluationResultInput;
}
