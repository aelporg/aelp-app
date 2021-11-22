import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { AssessmentCreateNestedOneWithoutCompetitionInput } from '../assessment/assessment-create-nested-one-without-competition.input';
import { UserCreateNestedOneWithoutCreatedCompetitionsInput } from '../user/user-create-nested-one-without-created-competitions.input';

@InputType()
export class CompetitionCreateWithoutParticipantsInput {

    @Field(() => String, {nullable:true})
    id?: string;

    @Field(() => Boolean, {nullable:true})
    isPrivate?: boolean;

    @Field(() => Date, {nullable:true})
    createdAt?: Date | string;

    @Field(() => Date, {nullable:true})
    updatedAt?: Date | string;

    @Field(() => AssessmentCreateNestedOneWithoutCompetitionInput, {nullable:true})
    assessment?: AssessmentCreateNestedOneWithoutCompetitionInput;

    @Field(() => UserCreateNestedOneWithoutCreatedCompetitionsInput, {nullable:false})
    creatorUser!: UserCreateNestedOneWithoutCreatedCompetitionsInput;
}
