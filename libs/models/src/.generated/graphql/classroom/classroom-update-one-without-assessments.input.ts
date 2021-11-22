import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { ClassroomCreateWithoutAssessmentsInput } from './classroom-create-without-assessments.input';
import { ClassroomCreateOrConnectWithoutAssessmentsInput } from './classroom-create-or-connect-without-assessments.input';
import { ClassroomUpsertWithoutAssessmentsInput } from './classroom-upsert-without-assessments.input';
import { ClassroomWhereUniqueInput } from './classroom-where-unique.input';
import { ClassroomUpdateWithoutAssessmentsInput } from './classroom-update-without-assessments.input';

@InputType()
export class ClassroomUpdateOneWithoutAssessmentsInput {

    @Field(() => ClassroomCreateWithoutAssessmentsInput, {nullable:true})
    create?: ClassroomCreateWithoutAssessmentsInput;

    @Field(() => ClassroomCreateOrConnectWithoutAssessmentsInput, {nullable:true})
    connectOrCreate?: ClassroomCreateOrConnectWithoutAssessmentsInput;

    @Field(() => ClassroomUpsertWithoutAssessmentsInput, {nullable:true})
    upsert?: ClassroomUpsertWithoutAssessmentsInput;

    @Field(() => Boolean, {nullable:true})
    disconnect?: boolean;

    @Field(() => Boolean, {nullable:true})
    delete?: boolean;

    @Field(() => ClassroomWhereUniqueInput, {nullable:true})
    connect?: ClassroomWhereUniqueInput;

    @Field(() => ClassroomUpdateWithoutAssessmentsInput, {nullable:true})
    update?: ClassroomUpdateWithoutAssessmentsInput;
}
