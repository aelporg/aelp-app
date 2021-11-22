import { Field } from '@nestjs/graphql';
import { ArgsType } from '@nestjs/graphql';
import { AssessmentAnswerCreateManyInput } from './assessment-answer-create-many.input';

@ArgsType()
export class CreateManyAssessmentAnswerArgs {

    @Field(() => [AssessmentAnswerCreateManyInput], {nullable:false})
    data!: Array<AssessmentAnswerCreateManyInput>;

    @Field(() => Boolean, {nullable:true})
    skipDuplicates?: boolean;
}
