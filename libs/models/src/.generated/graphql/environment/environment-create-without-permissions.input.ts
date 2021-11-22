import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { FileCreateNestedManyWithoutEnvironmentInput } from '../file/file-create-nested-many-without-environment.input';
import { ProgrammingQuestionAnswerCreateNestedManyWithoutEnvirnmentInput } from '../programming-question-answer/programming-question-answer-create-nested-many-without-envirnment.input';

@InputType()
export class EnvironmentCreateWithoutPermissionsInput {

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

    @Field(() => FileCreateNestedManyWithoutEnvironmentInput, {nullable:true})
    files?: FileCreateNestedManyWithoutEnvironmentInput;

    @Field(() => ProgrammingQuestionAnswerCreateNestedManyWithoutEnvirnmentInput, {nullable:true})
    answers?: ProgrammingQuestionAnswerCreateNestedManyWithoutEnvirnmentInput;
}
