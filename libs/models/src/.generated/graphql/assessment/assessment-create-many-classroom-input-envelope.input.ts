import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { AssessmentCreateManyClassroomInput } from './assessment-create-many-classroom.input';

@InputType()
export class AssessmentCreateManyClassroomInputEnvelope {

    @Field(() => [AssessmentCreateManyClassroomInput], {nullable:false})
    data!: Array<AssessmentCreateManyClassroomInput>;

    @Field(() => Boolean, {nullable:true})
    skipDuplicates?: boolean;
}
