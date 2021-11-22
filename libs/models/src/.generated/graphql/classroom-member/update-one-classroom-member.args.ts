import { Field } from '@nestjs/graphql';
import { ArgsType } from '@nestjs/graphql';
import { ClassroomMemberUpdateInput } from './classroom-member-update.input';
import { ClassroomMemberWhereUniqueInput } from './classroom-member-where-unique.input';

@ArgsType()
export class UpdateOneClassroomMemberArgs {

    @Field(() => ClassroomMemberUpdateInput, {nullable:false})
    data!: ClassroomMemberUpdateInput;

    @Field(() => ClassroomMemberWhereUniqueInput, {nullable:false})
    where!: ClassroomMemberWhereUniqueInput;
}
