import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { QuestionWhereUniqueInput } from './question-where-unique.input';
import { QuestionCreateWithoutAssessmentInput } from './question-create-without-assessment.input';

@InputType()
export class QuestionCreateOrConnectWithoutAssessmentInput {

    @Field(() => QuestionWhereUniqueInput, {nullable:false})
    where!: QuestionWhereUniqueInput;

    @Field(() => QuestionCreateWithoutAssessmentInput, {nullable:false})
    create!: QuestionCreateWithoutAssessmentInput;
}
