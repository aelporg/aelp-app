import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { PracticeProgrammingQuestionCreateManyClassroomInput } from './practice-programming-question-create-many-classroom.input';

@InputType()
export class PracticeProgrammingQuestionCreateManyClassroomInputEnvelope {

    @Field(() => [PracticeProgrammingQuestionCreateManyClassroomInput], {nullable:false})
    data!: Array<PracticeProgrammingQuestionCreateManyClassroomInput>;

    @Field(() => Boolean, {nullable:true})
    skipDuplicates?: boolean;
}
