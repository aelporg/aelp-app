import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { StringFieldUpdateOperationsInput } from '../prisma/string-field-update-operations.input';
import { EnumDifficultyFieldUpdateOperationsInput } from '../prisma/enum-difficulty-field-update-operations.input';
import { ProgrammingQuestionUpdateOneRequiredWithoutPracticeInput } from '../programming-question/programming-question-update-one-required-without-practice.input';

@InputType()
export class PracticeProgrammingQuestionUpdateWithoutClassroomInput {

    @Field(() => StringFieldUpdateOperationsInput, {nullable:true})
    id?: StringFieldUpdateOperationsInput;

    @Field(() => EnumDifficultyFieldUpdateOperationsInput, {nullable:true})
    diffculty?: EnumDifficultyFieldUpdateOperationsInput;

    @Field(() => ProgrammingQuestionUpdateOneRequiredWithoutPracticeInput, {nullable:true})
    question?: ProgrammingQuestionUpdateOneRequiredWithoutPracticeInput;
}
