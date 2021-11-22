import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { MultipleChoiceQuestionChoiceCreateManyQuestionInput } from './multiple-choice-question-choice-create-many-question.input';

@InputType()
export class MultipleChoiceQuestionChoiceCreateManyQuestionInputEnvelope {

    @Field(() => [MultipleChoiceQuestionChoiceCreateManyQuestionInput], {nullable:false})
    data!: Array<MultipleChoiceQuestionChoiceCreateManyQuestionInput>;

    @Field(() => Boolean, {nullable:true})
    skipDuplicates?: boolean;
}
