import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { AssessmentCreateWithoutCompetitionInput } from './assessment-create-without-competition.input';
import { AssessmentCreateOrConnectWithoutCompetitionInput } from './assessment-create-or-connect-without-competition.input';
import { AssessmentUpsertWithoutCompetitionInput } from './assessment-upsert-without-competition.input';
import { AssessmentWhereUniqueInput } from './assessment-where-unique.input';
import { AssessmentUpdateWithoutCompetitionInput } from './assessment-update-without-competition.input';

@InputType()
export class AssessmentUpdateOneWithoutCompetitionInput {

    @Field(() => AssessmentCreateWithoutCompetitionInput, {nullable:true})
    create?: AssessmentCreateWithoutCompetitionInput;

    @Field(() => AssessmentCreateOrConnectWithoutCompetitionInput, {nullable:true})
    connectOrCreate?: AssessmentCreateOrConnectWithoutCompetitionInput;

    @Field(() => AssessmentUpsertWithoutCompetitionInput, {nullable:true})
    upsert?: AssessmentUpsertWithoutCompetitionInput;

    @Field(() => Boolean, {nullable:true})
    disconnect?: boolean;

    @Field(() => Boolean, {nullable:true})
    delete?: boolean;

    @Field(() => AssessmentWhereUniqueInput, {nullable:true})
    connect?: AssessmentWhereUniqueInput;

    @Field(() => AssessmentUpdateWithoutCompetitionInput, {nullable:true})
    update?: AssessmentUpdateWithoutCompetitionInput;
}
