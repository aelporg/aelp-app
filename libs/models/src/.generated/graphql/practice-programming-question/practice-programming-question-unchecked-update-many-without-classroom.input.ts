import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { PracticeProgrammingQuestionCreateWithoutClassroomInput } from './practice-programming-question-create-without-classroom.input';
import { PracticeProgrammingQuestionCreateOrConnectWithoutClassroomInput } from './practice-programming-question-create-or-connect-without-classroom.input';
import { PracticeProgrammingQuestionUpsertWithWhereUniqueWithoutClassroomInput } from './practice-programming-question-upsert-with-where-unique-without-classroom.input';
import { PracticeProgrammingQuestionCreateManyClassroomInputEnvelope } from './practice-programming-question-create-many-classroom-input-envelope.input';
import { PracticeProgrammingQuestionWhereUniqueInput } from './practice-programming-question-where-unique.input';
import { PracticeProgrammingQuestionUpdateWithWhereUniqueWithoutClassroomInput } from './practice-programming-question-update-with-where-unique-without-classroom.input';
import { PracticeProgrammingQuestionUpdateManyWithWhereWithoutClassroomInput } from './practice-programming-question-update-many-with-where-without-classroom.input';
import { PracticeProgrammingQuestionScalarWhereInput } from './practice-programming-question-scalar-where.input';

@InputType()
export class PracticeProgrammingQuestionUncheckedUpdateManyWithoutClassroomInput {

    @Field(() => [PracticeProgrammingQuestionCreateWithoutClassroomInput], {nullable:true})
    create?: Array<PracticeProgrammingQuestionCreateWithoutClassroomInput>;

    @Field(() => [PracticeProgrammingQuestionCreateOrConnectWithoutClassroomInput], {nullable:true})
    connectOrCreate?: Array<PracticeProgrammingQuestionCreateOrConnectWithoutClassroomInput>;

    @Field(() => [PracticeProgrammingQuestionUpsertWithWhereUniqueWithoutClassroomInput], {nullable:true})
    upsert?: Array<PracticeProgrammingQuestionUpsertWithWhereUniqueWithoutClassroomInput>;

    @Field(() => PracticeProgrammingQuestionCreateManyClassroomInputEnvelope, {nullable:true})
    createMany?: PracticeProgrammingQuestionCreateManyClassroomInputEnvelope;

    @Field(() => [PracticeProgrammingQuestionWhereUniqueInput], {nullable:true})
    set?: Array<PracticeProgrammingQuestionWhereUniqueInput>;

    @Field(() => [PracticeProgrammingQuestionWhereUniqueInput], {nullable:true})
    disconnect?: Array<PracticeProgrammingQuestionWhereUniqueInput>;

    @Field(() => [PracticeProgrammingQuestionWhereUniqueInput], {nullable:true})
    delete?: Array<PracticeProgrammingQuestionWhereUniqueInput>;

    @Field(() => [PracticeProgrammingQuestionWhereUniqueInput], {nullable:true})
    connect?: Array<PracticeProgrammingQuestionWhereUniqueInput>;

    @Field(() => [PracticeProgrammingQuestionUpdateWithWhereUniqueWithoutClassroomInput], {nullable:true})
    update?: Array<PracticeProgrammingQuestionUpdateWithWhereUniqueWithoutClassroomInput>;

    @Field(() => [PracticeProgrammingQuestionUpdateManyWithWhereWithoutClassroomInput], {nullable:true})
    updateMany?: Array<PracticeProgrammingQuestionUpdateManyWithWhereWithoutClassroomInput>;

    @Field(() => [PracticeProgrammingQuestionScalarWhereInput], {nullable:true})
    deleteMany?: Array<PracticeProgrammingQuestionScalarWhereInput>;
}
