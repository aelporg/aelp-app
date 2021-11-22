import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';

@InputType()
export class ClassroomMemberClassroomIdUserIdCompoundUniqueInput {

    @Field(() => String, {nullable:false})
    classroomId!: string;

    @Field(() => String, {nullable:false})
    userId!: string;
}
