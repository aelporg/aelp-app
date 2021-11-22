import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { AssessmentCreateWithoutQuestionsInput } from './assessment-create-without-questions.input';
import { AssessmentCreateOrConnectWithoutQuestionsInput } from './assessment-create-or-connect-without-questions.input';
import { AssessmentUpsertWithoutQuestionsInput } from './assessment-upsert-without-questions.input';
import { AssessmentWhereUniqueInput } from './assessment-where-unique.input';
import { AssessmentUpdateWithoutQuestionsInput } from './assessment-update-without-questions.input';

@InputType()
export class AssessmentUpdateOneWithoutQuestionsInput {

    @Field(() => AssessmentCreateWithoutQuestionsInput, {nullable:true})
    create?: AssessmentCreateWithoutQuestionsInput;

    @Field(() => AssessmentCreateOrConnectWithoutQuestionsInput, {nullable:true})
    connectOrCreate?: AssessmentCreateOrConnectWithoutQuestionsInput;

    @Field(() => AssessmentUpsertWithoutQuestionsInput, {nullable:true})
    upsert?: AssessmentUpsertWithoutQuestionsInput;

    @Field(() => Boolean, {nullable:true})
    disconnect?: boolean;

    @Field(() => Boolean, {nullable:true})
    delete?: boolean;

    @Field(() => AssessmentWhereUniqueInput, {nullable:true})
    connect?: AssessmentWhereUniqueInput;

    @Field(() => AssessmentUpdateWithoutQuestionsInput, {nullable:true})
    update?: AssessmentUpdateWithoutQuestionsInput;
}
