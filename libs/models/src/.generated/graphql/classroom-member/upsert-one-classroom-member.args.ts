import { Field } from '@nestjs/graphql';
import { ArgsType } from '@nestjs/graphql';
import { ClassroomMemberWhereUniqueInput } from './classroom-member-where-unique.input';
import { ClassroomMemberCreateInput } from './classroom-member-create.input';
import { ClassroomMemberUpdateInput } from './classroom-member-update.input';

@ArgsType()
export class UpsertOneClassroomMemberArgs {

    @Field(() => ClassroomMemberWhereUniqueInput, {nullable:false})
    where!: ClassroomMemberWhereUniqueInput;

    @Field(() => ClassroomMemberCreateInput, {nullable:false})
    create!: ClassroomMemberCreateInput;

    @Field(() => ClassroomMemberUpdateInput, {nullable:false})
    update!: ClassroomMemberUpdateInput;
}
