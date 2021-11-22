import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { ClassroomMemberCreateManyUserInput } from './classroom-member-create-many-user.input';

@InputType()
export class ClassroomMemberCreateManyUserInputEnvelope {

    @Field(() => [ClassroomMemberCreateManyUserInput], {nullable:false})
    data!: Array<ClassroomMemberCreateManyUserInput>;

    @Field(() => Boolean, {nullable:true})
    skipDuplicates?: boolean;
}
