import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { QuestionWhereUniqueInput } from './question-where-unique.input';
import { QuestionUpdateWithoutAssessmentInput } from './question-update-without-assessment.input';
import { QuestionCreateWithoutAssessmentInput } from './question-create-without-assessment.input';

@InputType()
export class QuestionUpsertWithWhereUniqueWithoutAssessmentInput {

    @Field(() => QuestionWhereUniqueInput, {nullable:false})
    where!: QuestionWhereUniqueInput;

    @Field(() => QuestionUpdateWithoutAssessmentInput, {nullable:false})
    update!: QuestionUpdateWithoutAssessmentInput;

    @Field(() => QuestionCreateWithoutAssessmentInput, {nullable:false})
    create!: QuestionCreateWithoutAssessmentInput;
}
