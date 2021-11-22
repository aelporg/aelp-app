import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { StringFieldUpdateOperationsInput } from '../prisma/string-field-update-operations.input';
import { DateTimeFieldUpdateOperationsInput } from '../prisma/date-time-field-update-operations.input';
import { MultipleFilesProgrammingQuestionUpdateManyWithoutDefaultFilesInput } from '../multiple-files-programming-question/multiple-files-programming-question-update-many-without-default-files.input';
import { EnvironmentUpdateOneWithoutFilesInput } from '../environment/environment-update-one-without-files.input';

@InputType()
export class FileUpdateInput {

    @Field(() => StringFieldUpdateOperationsInput, {nullable:true})
    id?: StringFieldUpdateOperationsInput;

    @Field(() => StringFieldUpdateOperationsInput, {nullable:true})
    name?: StringFieldUpdateOperationsInput;

    @Field(() => StringFieldUpdateOperationsInput, {nullable:true})
    extension?: StringFieldUpdateOperationsInput;

    @Field(() => StringFieldUpdateOperationsInput, {nullable:true})
    data?: StringFieldUpdateOperationsInput;

    @Field(() => DateTimeFieldUpdateOperationsInput, {nullable:true})
    updatedAt?: DateTimeFieldUpdateOperationsInput;

    @Field(() => DateTimeFieldUpdateOperationsInput, {nullable:true})
    createdAt?: DateTimeFieldUpdateOperationsInput;

    @Field(() => MultipleFilesProgrammingQuestionUpdateManyWithoutDefaultFilesInput, {nullable:true})
    multipleFilesProgrammingQuestion?: MultipleFilesProgrammingQuestionUpdateManyWithoutDefaultFilesInput;

    @Field(() => EnvironmentUpdateOneWithoutFilesInput, {nullable:true})
    environment?: EnvironmentUpdateOneWithoutFilesInput;
}
