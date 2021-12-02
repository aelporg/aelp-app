import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { FileUncheckedCreateNestedManyWithoutEnvironmentInput } from '../file/file-unchecked-create-nested-many-without-environment.input';
import { ProgrammingQuestionAnswerUncheckedCreateNestedManyWithoutEnvirnmentInput } from '../programming-question-answer/programming-question-answer-unchecked-create-nested-many-without-envirnment.input';
import { EnvironmentPermissionUncheckedCreateNestedManyWithoutEnvironmentInput } from '../environment-permission/environment-permission-unchecked-create-nested-many-without-environment.input';

@InputType()
export class EnvironmentUncheckedCreateInput {

    @Field(() => String, {nullable:true})
    id?: string;

    @Field(() => String, {nullable:false})
    scratchPadData!: string;

    @Field(() => Boolean, {nullable:true})
    submitted?: boolean;

    @Field(() => Date, {nullable:true})
    createdAt?: Date | string;

    @Field(() => Date, {nullable:true})
    updatedAt?: Date | string;

    @Field(() => FileUncheckedCreateNestedManyWithoutEnvironmentInput, {nullable:true})
    files?: FileUncheckedCreateNestedManyWithoutEnvironmentInput;

    @Field(() => ProgrammingQuestionAnswerUncheckedCreateNestedManyWithoutEnvirnmentInput, {nullable:true})
    answers?: ProgrammingQuestionAnswerUncheckedCreateNestedManyWithoutEnvirnmentInput;

    @Field(() => EnvironmentPermissionUncheckedCreateNestedManyWithoutEnvironmentInput, {nullable:true})
    permissions?: EnvironmentPermissionUncheckedCreateNestedManyWithoutEnvironmentInput;
}