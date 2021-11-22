import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { ClassroomMemberCreateWithoutClassroomInput } from './classroom-member-create-without-classroom.input';
import { ClassroomMemberCreateOrConnectWithoutClassroomInput } from './classroom-member-create-or-connect-without-classroom.input';
import { ClassroomMemberCreateManyClassroomInputEnvelope } from './classroom-member-create-many-classroom-input-envelope.input';
import { ClassroomMemberWhereUniqueInput } from './classroom-member-where-unique.input';

@InputType()
export class ClassroomMemberCreateNestedManyWithoutClassroomInput {

    @Field(() => [ClassroomMemberCreateWithoutClassroomInput], {nullable:true})
    create?: Array<ClassroomMemberCreateWithoutClassroomInput>;

    @Field(() => [ClassroomMemberCreateOrConnectWithoutClassroomInput], {nullable:true})
    connectOrCreate?: Array<ClassroomMemberCreateOrConnectWithoutClassroomInput>;

    @Field(() => ClassroomMemberCreateManyClassroomInputEnvelope, {nullable:true})
    createMany?: ClassroomMemberCreateManyClassroomInputEnvelope;

    @Field(() => [ClassroomMemberWhereUniqueInput], {nullable:true})
    connect?: Array<ClassroomMemberWhereUniqueInput>;
}
