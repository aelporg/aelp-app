import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { ClassroomMemberScalarWhereInput } from './classroom-member-scalar-where.input';
import { ClassroomMemberUpdateManyMutationInput } from './classroom-member-update-many-mutation.input';

@InputType()
export class ClassroomMemberUpdateManyWithWhereWithoutUserInput {

    @Field(() => ClassroomMemberScalarWhereInput, {nullable:false})
    where!: ClassroomMemberScalarWhereInput;

    @Field(() => ClassroomMemberUpdateManyMutationInput, {nullable:false})
    data!: ClassroomMemberUpdateManyMutationInput;
}
