import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { StringFieldUpdateOperationsInput } from '../prisma/string-field-update-operations.input';
import { EnumDifficultyFieldUpdateOperationsInput } from '../prisma/enum-difficulty-field-update-operations.input';
import { ClassroomUpdateOneWithoutPracticeProgrammingQuestionsInput } from '../classroom/classroom-update-one-without-practice-programming-questions.input';

@InputType()
export class PracticeProgrammingQuestionUpdateWithoutQuestionInput {

    @Field(() => StringFieldUpdateOperationsInput, {nullable:true})
    id?: StringFieldUpdateOperationsInput;

    @Field(() => EnumDifficultyFieldUpdateOperationsInput, {nullable:true})
    diffculty?: EnumDifficultyFieldUpdateOperationsInput;

    @Field(() => ClassroomUpdateOneWithoutPracticeProgrammingQuestionsInput, {nullable:true})
    classroom?: ClassroomUpdateOneWithoutPracticeProgrammingQuestionsInput;
}
