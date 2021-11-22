import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { AssessmentUncheckedCreateNestedOneWithoutCompetitionInput } from '../assessment/assessment-unchecked-create-nested-one-without-competition.input';

@InputType()
export class CompetitionUncheckedCreateWithoutParticipantsInput {

    @Field(() => String, {nullable:true})
    id?: string;

    @Field(() => Boolean, {nullable:true})
    isPrivate?: boolean;

    @Field(() => String, {nullable:false})
    creatorUserId!: string;

    @Field(() => Date, {nullable:true})
    createdAt?: Date | string;

    @Field(() => Date, {nullable:true})
    updatedAt?: Date | string;

    @Field(() => AssessmentUncheckedCreateNestedOneWithoutCompetitionInput, {nullable:true})
    assessment?: AssessmentUncheckedCreateNestedOneWithoutCompetitionInput;
}
