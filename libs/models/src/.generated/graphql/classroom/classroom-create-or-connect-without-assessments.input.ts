import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { ClassroomWhereUniqueInput } from './classroom-where-unique.input';
import { ClassroomCreateWithoutAssessmentsInput } from './classroom-create-without-assessments.input';

@InputType()
export class ClassroomCreateOrConnectWithoutAssessmentsInput {

    @Field(() => ClassroomWhereUniqueInput, {nullable:false})
    where!: ClassroomWhereUniqueInput;

    @Field(() => ClassroomCreateWithoutAssessmentsInput, {nullable:false})
    create!: ClassroomCreateWithoutAssessmentsInput;
}
