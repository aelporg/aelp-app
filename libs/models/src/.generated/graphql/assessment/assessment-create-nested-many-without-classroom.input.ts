import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { AssessmentCreateWithoutClassroomInput } from './assessment-create-without-classroom.input';
import { AssessmentCreateOrConnectWithoutClassroomInput } from './assessment-create-or-connect-without-classroom.input';
import { AssessmentCreateManyClassroomInputEnvelope } from './assessment-create-many-classroom-input-envelope.input';
import { AssessmentWhereUniqueInput } from './assessment-where-unique.input';

@InputType()
export class AssessmentCreateNestedManyWithoutClassroomInput {

    @Field(() => [AssessmentCreateWithoutClassroomInput], {nullable:true})
    create?: Array<AssessmentCreateWithoutClassroomInput>;

    @Field(() => [AssessmentCreateOrConnectWithoutClassroomInput], {nullable:true})
    connectOrCreate?: Array<AssessmentCreateOrConnectWithoutClassroomInput>;

    @Field(() => AssessmentCreateManyClassroomInputEnvelope, {nullable:true})
    createMany?: AssessmentCreateManyClassroomInputEnvelope;

    @Field(() => [AssessmentWhereUniqueInput], {nullable:true})
    connect?: Array<AssessmentWhereUniqueInput>;
}
