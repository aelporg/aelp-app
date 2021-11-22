import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { ProgrammingQuestionAnswerCreateManyEnvirnmentInput } from './programming-question-answer-create-many-envirnment.input';

@InputType()
export class ProgrammingQuestionAnswerCreateManyEnvirnmentInputEnvelope {

    @Field(() => [ProgrammingQuestionAnswerCreateManyEnvirnmentInput], {nullable:false})
    data!: Array<ProgrammingQuestionAnswerCreateManyEnvirnmentInput>;

    @Field(() => Boolean, {nullable:true})
    skipDuplicates?: boolean;
}
