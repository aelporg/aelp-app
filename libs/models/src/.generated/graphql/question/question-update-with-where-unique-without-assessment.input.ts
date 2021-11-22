import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { QuestionWhereUniqueInput } from './question-where-unique.input';
import { QuestionUpdateWithoutAssessmentInput } from './question-update-without-assessment.input';

@InputType()
export class QuestionUpdateWithWhereUniqueWithoutAssessmentInput {

    @Field(() => QuestionWhereUniqueInput, {nullable:false})
    where!: QuestionWhereUniqueInput;

    @Field(() => QuestionUpdateWithoutAssessmentInput, {nullable:false})
    data!: QuestionUpdateWithoutAssessmentInput;
}
