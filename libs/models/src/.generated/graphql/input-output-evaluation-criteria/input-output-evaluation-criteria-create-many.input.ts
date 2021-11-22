import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { InputOutputEvaluationCriteriaCreateManyinputsInput } from './input-output-evaluation-criteria-create-manyinputs.input';
import { InputOutputEvaluationCriteriaCreateManyoutputsInput } from './input-output-evaluation-criteria-create-manyoutputs.input';

@InputType()
export class InputOutputEvaluationCriteriaCreateManyInput {

    @Field(() => String, {nullable:true})
    id?: string;

    @Field(() => Date, {nullable:true})
    updatedAt?: Date | string;

    @Field(() => Date, {nullable:true})
    createdAt?: Date | string;

    @Field(() => InputOutputEvaluationCriteriaCreateManyinputsInput, {nullable:true})
    inputs?: InputOutputEvaluationCriteriaCreateManyinputsInput;

    @Field(() => InputOutputEvaluationCriteriaCreateManyoutputsInput, {nullable:true})
    outputs?: InputOutputEvaluationCriteriaCreateManyoutputsInput;
}
