import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { ClassroomCreateWithoutAssessmentsInput } from './classroom-create-without-assessments.input';
import { ClassroomCreateOrConnectWithoutAssessmentsInput } from './classroom-create-or-connect-without-assessments.input';
import { ClassroomWhereUniqueInput } from './classroom-where-unique.input';

@InputType()
export class ClassroomCreateNestedOneWithoutAssessmentsInput {

    @Field(() => ClassroomCreateWithoutAssessmentsInput, {nullable:true})
    create?: ClassroomCreateWithoutAssessmentsInput;

    @Field(() => ClassroomCreateOrConnectWithoutAssessmentsInput, {nullable:true})
    connectOrCreate?: ClassroomCreateOrConnectWithoutAssessmentsInput;

    @Field(() => ClassroomWhereUniqueInput, {nullable:true})
    connect?: ClassroomWhereUniqueInput;
}
