import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { AssessmentUpdateWithoutQuestionsInput } from './assessment-update-without-questions.input';
import { AssessmentCreateWithoutQuestionsInput } from './assessment-create-without-questions.input';

@InputType()
export class AssessmentUpsertWithoutQuestionsInput {

    @Field(() => AssessmentUpdateWithoutQuestionsInput, {nullable:false})
    update!: AssessmentUpdateWithoutQuestionsInput;

    @Field(() => AssessmentCreateWithoutQuestionsInput, {nullable:false})
    create!: AssessmentCreateWithoutQuestionsInput;
}
