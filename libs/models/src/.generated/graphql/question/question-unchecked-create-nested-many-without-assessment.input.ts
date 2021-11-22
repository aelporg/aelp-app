import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { QuestionCreateWithoutAssessmentInput } from './question-create-without-assessment.input';
import { QuestionCreateOrConnectWithoutAssessmentInput } from './question-create-or-connect-without-assessment.input';
import { QuestionCreateManyAssessmentInputEnvelope } from './question-create-many-assessment-input-envelope.input';
import { QuestionWhereUniqueInput } from './question-where-unique.input';

@InputType()
export class QuestionUncheckedCreateNestedManyWithoutAssessmentInput {

    @Field(() => [QuestionCreateWithoutAssessmentInput], {nullable:true})
    create?: Array<QuestionCreateWithoutAssessmentInput>;

    @Field(() => [QuestionCreateOrConnectWithoutAssessmentInput], {nullable:true})
    connectOrCreate?: Array<QuestionCreateOrConnectWithoutAssessmentInput>;

    @Field(() => QuestionCreateManyAssessmentInputEnvelope, {nullable:true})
    createMany?: QuestionCreateManyAssessmentInputEnvelope;

    @Field(() => [QuestionWhereUniqueInput], {nullable:true})
    connect?: Array<QuestionWhereUniqueInput>;
}
