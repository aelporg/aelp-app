import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { AssessmentCreateWithoutAnswersInput } from './assessment-create-without-answers.input';
import { AssessmentCreateOrConnectWithoutAnswersInput } from './assessment-create-or-connect-without-answers.input';
import { AssessmentUpsertWithoutAnswersInput } from './assessment-upsert-without-answers.input';
import { AssessmentWhereUniqueInput } from './assessment-where-unique.input';
import { AssessmentUpdateWithoutAnswersInput } from './assessment-update-without-answers.input';

@InputType()
export class AssessmentUpdateOneRequiredWithoutAnswersInput {

    @Field(() => AssessmentCreateWithoutAnswersInput, {nullable:true})
    create?: AssessmentCreateWithoutAnswersInput;

    @Field(() => AssessmentCreateOrConnectWithoutAnswersInput, {nullable:true})
    connectOrCreate?: AssessmentCreateOrConnectWithoutAnswersInput;

    @Field(() => AssessmentUpsertWithoutAnswersInput, {nullable:true})
    upsert?: AssessmentUpsertWithoutAnswersInput;

    @Field(() => AssessmentWhereUniqueInput, {nullable:true})
    connect?: AssessmentWhereUniqueInput;

    @Field(() => AssessmentUpdateWithoutAnswersInput, {nullable:true})
    update?: AssessmentUpdateWithoutAnswersInput;
}
