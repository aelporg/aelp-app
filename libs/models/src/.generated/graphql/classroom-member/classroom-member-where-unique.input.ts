import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { ClassroomMemberClassroomIdUserIdCompoundUniqueInput } from './classroom-member-classroom-id-user-id-compound-unique.input';

@InputType()
export class ClassroomMemberWhereUniqueInput {

    @Field(() => ClassroomMemberClassroomIdUserIdCompoundUniqueInput, {nullable:true})
    classroomId_userId?: ClassroomMemberClassroomIdUserIdCompoundUniqueInput;
}
