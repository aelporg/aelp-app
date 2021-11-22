import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { ClassroomMemberCreateManyClassroomInput } from './classroom-member-create-many-classroom.input';

@InputType()
export class ClassroomMemberCreateManyClassroomInputEnvelope {

    @Field(() => [ClassroomMemberCreateManyClassroomInput], {nullable:false})
    data!: Array<ClassroomMemberCreateManyClassroomInput>;

    @Field(() => Boolean, {nullable:true})
    skipDuplicates?: boolean;
}
