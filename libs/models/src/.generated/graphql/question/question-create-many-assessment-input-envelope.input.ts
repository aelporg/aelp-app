import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { QuestionCreateManyAssessmentInput } from './question-create-many-assessment.input';

@InputType()
export class QuestionCreateManyAssessmentInputEnvelope {

    @Field(() => [QuestionCreateManyAssessmentInput], {nullable:false})
    data!: Array<QuestionCreateManyAssessmentInput>;

    @Field(() => Boolean, {nullable:true})
    skipDuplicates?: boolean;
}
