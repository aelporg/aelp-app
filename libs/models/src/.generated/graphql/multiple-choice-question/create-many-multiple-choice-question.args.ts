import { Field } from '@nestjs/graphql';
import { ArgsType } from '@nestjs/graphql';
import { MultipleChoiceQuestionCreateManyInput } from './multiple-choice-question-create-many.input';

@ArgsType()
export class CreateManyMultipleChoiceQuestionArgs {

    @Field(() => [MultipleChoiceQuestionCreateManyInput], {nullable:false})
    data!: Array<MultipleChoiceQuestionCreateManyInput>;

    @Field(() => Boolean, {nullable:true})
    skipDuplicates?: boolean;
}
