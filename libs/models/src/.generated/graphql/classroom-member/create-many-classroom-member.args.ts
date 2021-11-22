import { Field } from '@nestjs/graphql';
import { ArgsType } from '@nestjs/graphql';
import { ClassroomMemberCreateManyInput } from './classroom-member-create-many.input';

@ArgsType()
export class CreateManyClassroomMemberArgs {

    @Field(() => [ClassroomMemberCreateManyInput], {nullable:false})
    data!: Array<ClassroomMemberCreateManyInput>;

    @Field(() => Boolean, {nullable:true})
    skipDuplicates?: boolean;
}
