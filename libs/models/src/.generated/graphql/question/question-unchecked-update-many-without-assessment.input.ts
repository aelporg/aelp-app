import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { QuestionCreateWithoutAssessmentInput } from './question-create-without-assessment.input';
import { QuestionCreateOrConnectWithoutAssessmentInput } from './question-create-or-connect-without-assessment.input';
import { QuestionUpsertWithWhereUniqueWithoutAssessmentInput } from './question-upsert-with-where-unique-without-assessment.input';
import { QuestionCreateManyAssessmentInputEnvelope } from './question-create-many-assessment-input-envelope.input';
import { QuestionWhereUniqueInput } from './question-where-unique.input';
import { QuestionUpdateWithWhereUniqueWithoutAssessmentInput } from './question-update-with-where-unique-without-assessment.input';
import { QuestionUpdateManyWithWhereWithoutAssessmentInput } from './question-update-many-with-where-without-assessment.input';
import { QuestionScalarWhereInput } from './question-scalar-where.input';

@InputType()
export class QuestionUncheckedUpdateManyWithoutAssessmentInput {

    @Field(() => [QuestionCreateWithoutAssessmentInput], {nullable:true})
    create?: Array<QuestionCreateWithoutAssessmentInput>;

    @Field(() => [QuestionCreateOrConnectWithoutAssessmentInput], {nullable:true})
    connectOrCreate?: Array<QuestionCreateOrConnectWithoutAssessmentInput>;

    @Field(() => [QuestionUpsertWithWhereUniqueWithoutAssessmentInput], {nullable:true})
    upsert?: Array<QuestionUpsertWithWhereUniqueWithoutAssessmentInput>;

    @Field(() => QuestionCreateManyAssessmentInputEnvelope, {nullable:true})
    createMany?: QuestionCreateManyAssessmentInputEnvelope;

    @Field(() => [QuestionWhereUniqueInput], {nullable:true})
    set?: Array<QuestionWhereUniqueInput>;

    @Field(() => [QuestionWhereUniqueInput], {nullable:true})
    disconnect?: Array<QuestionWhereUniqueInput>;

    @Field(() => [QuestionWhereUniqueInput], {nullable:true})
    delete?: Array<QuestionWhereUniqueInput>;

    @Field(() => [QuestionWhereUniqueInput], {nullable:true})
    connect?: Array<QuestionWhereUniqueInput>;

    @Field(() => [QuestionUpdateWithWhereUniqueWithoutAssessmentInput], {nullable:true})
    update?: Array<QuestionUpdateWithWhereUniqueWithoutAssessmentInput>;

    @Field(() => [QuestionUpdateManyWithWhereWithoutAssessmentInput], {nullable:true})
    updateMany?: Array<QuestionUpdateManyWithWhereWithoutAssessmentInput>;

    @Field(() => [QuestionScalarWhereInput], {nullable:true})
    deleteMany?: Array<QuestionScalarWhereInput>;
}
