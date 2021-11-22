import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { ClassroomUpdateWithoutAssessmentsInput } from './classroom-update-without-assessments.input';
import { ClassroomCreateWithoutAssessmentsInput } from './classroom-create-without-assessments.input';

@InputType()
export class ClassroomUpsertWithoutAssessmentsInput {

    @Field(() => ClassroomUpdateWithoutAssessmentsInput, {nullable:false})
    update!: ClassroomUpdateWithoutAssessmentsInput;

    @Field(() => ClassroomCreateWithoutAssessmentsInput, {nullable:false})
    create!: ClassroomCreateWithoutAssessmentsInput;
}
