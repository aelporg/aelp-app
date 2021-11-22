import { Field } from '@nestjs/graphql';
import { ArgsType } from '@nestjs/graphql';
import { ClassroomMemberCreateInput } from './classroom-member-create.input';

@ArgsType()
export class CreateOneClassroomMemberArgs {

    @Field(() => ClassroomMemberCreateInput, {nullable:false})
    data!: ClassroomMemberCreateInput;
}
