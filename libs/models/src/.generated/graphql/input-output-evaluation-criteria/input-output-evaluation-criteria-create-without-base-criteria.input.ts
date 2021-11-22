import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { InputOutputEvaluationCriteriaCreateinputsInput } from '../prisma/input-output-evaluation-criteria-createinputs.input';
import { InputOutputEvaluationCriteriaCreateoutputsInput } from '../prisma/input-output-evaluation-criteria-createoutputs.input';

@InputType()
export class InputOutputEvaluationCriteriaCreateWithoutBaseCriteriaInput {

    @Field(() => String, {nullable:true})
    id?: string;

    @Field(() => Date, {nullable:true})
    updatedAt?: Date | string;

    @Field(() => Date, {nullable:true})
    createdAt?: Date | string;

    @Field(() => InputOutputEvaluationCriteriaCreateinputsInput, {nullable:true})
    inputs?: InputOutputEvaluationCriteriaCreateinputsInput;

    @Field(() => InputOutputEvaluationCriteriaCreateoutputsInput, {nullable:true})
    outputs?: InputOutputEvaluationCriteriaCreateoutputsInput;
}
