import { Field } from '@nestjs/graphql';
import { ArgsType } from '@nestjs/graphql';
import { ClassroomMemberUpdateManyMutationInput } from './classroom-member-update-many-mutation.input';
import { ClassroomMemberWhereInput } from './classroom-member-where.input';

@ArgsType()
export class UpdateManyClassroomMemberArgs {

    @Field(() => ClassroomMemberUpdateManyMutationInput, {nullable:false})
    data!: ClassroomMemberUpdateManyMutationInput;

    @Field(() => ClassroomMemberWhereInput, {nullable:true})
    where?: ClassroomMemberWhereInput;
}
