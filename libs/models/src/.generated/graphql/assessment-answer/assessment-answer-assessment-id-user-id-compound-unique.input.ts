import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';

@InputType()
export class AssessmentAnswerAssessmentIdUserIdCompoundUniqueInput {

    @Field(() => String, {nullable:false})
    assessmentId!: string;

    @Field(() => String, {nullable:false})
    userId!: string;
}
