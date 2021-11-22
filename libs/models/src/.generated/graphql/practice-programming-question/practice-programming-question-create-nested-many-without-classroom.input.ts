import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { PracticeProgrammingQuestionCreateWithoutClassroomInput } from './practice-programming-question-create-without-classroom.input';
import { PracticeProgrammingQuestionCreateOrConnectWithoutClassroomInput } from './practice-programming-question-create-or-connect-without-classroom.input';
import { PracticeProgrammingQuestionCreateManyClassroomInputEnvelope } from './practice-programming-question-create-many-classroom-input-envelope.input';
import { PracticeProgrammingQuestionWhereUniqueInput } from './practice-programming-question-where-unique.input';

@InputType()
export class PracticeProgrammingQuestionCreateNestedManyWithoutClassroomInput {

    @Field(() => [PracticeProgrammingQuestionCreateWithoutClassroomInput], {nullable:true})
    create?: Array<PracticeProgrammingQuestionCreateWithoutClassroomInput>;

    @Field(() => [PracticeProgrammingQuestionCreateOrConnectWithoutClassroomInput], {nullable:true})
    connectOrCreate?: Array<PracticeProgrammingQuestionCreateOrConnectWithoutClassroomInput>;

    @Field(() => PracticeProgrammingQuestionCreateManyClassroomInputEnvelope, {nullable:true})
    createMany?: PracticeProgrammingQuestionCreateManyClassroomInputEnvelope;

    @Field(() => [PracticeProgrammingQuestionWhereUniqueInput], {nullable:true})
    connect?: Array<PracticeProgrammingQuestionWhereUniqueInput>;
}
