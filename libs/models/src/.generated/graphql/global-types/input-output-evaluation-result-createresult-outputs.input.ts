import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';

@InputType()
export class InputOutputEvaluationResultCreateresultOutputsInput {

    @Field(() => [String], {nullable:false})
    set!: Array<string>;
}
