import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { AssessmentUpdateWithoutAnswersInput } from './assessment-update-without-answers.input';
import { AssessmentCreateWithoutAnswersInput } from './assessment-create-without-answers.input';

@InputType()
export class AssessmentUpsertWithoutAnswersInput {

    @Field(() => AssessmentUpdateWithoutAnswersInput, {nullable:false})
    update!: AssessmentUpdateWithoutAnswersInput;

    @Field(() => AssessmentCreateWithoutAnswersInput, {nullable:false})
    create!: AssessmentCreateWithoutAnswersInput;
}
