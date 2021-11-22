import { Field } from '@nestjs/graphql';
import { ArgsType } from '@nestjs/graphql';
import { ClassroomMemberWhereInput } from './classroom-member-where.input';

@ArgsType()
export class DeleteManyClassroomMemberArgs {

    @Field(() => ClassroomMemberWhereInput, {nullable:true})
    where?: ClassroomMemberWhereInput;
}
