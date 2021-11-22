import { Field } from '@nestjs/graphql';
import { ArgsType } from '@nestjs/graphql';
import { MultipleChoiceQuestionChoiceCreateManyInput } from './multiple-choice-question-choice-create-many.input';

@ArgsType()
export class CreateManyMultipleChoiceQuestionChoiceArgs {

    @Field(() => [MultipleChoiceQuestionChoiceCreateManyInput], {nullable:false})
    data!: Array<MultipleChoiceQuestionChoiceCreateManyInput>;

    @Field(() => Boolean, {nullable:true})
    skipDuplicates?: boolean;
}
