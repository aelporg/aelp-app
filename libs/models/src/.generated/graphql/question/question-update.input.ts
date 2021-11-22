import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { StringFieldUpdateOperationsInput } from '../prisma/string-field-update-operations.input';
import { EnumQuestionTypeFieldUpdateOperationsInput } from '../prisma/enum-question-type-field-update-operations.input';
import { IntFieldUpdateOperationsInput } from '../prisma/int-field-update-operations.input';
import { DateTimeFieldUpdateOperationsInput } from '../prisma/date-time-field-update-operations.input';
import { MultipleChoiceQuestionUpdateOneWithoutBaseQuestionInput } from '../multiple-choice-question/multiple-choice-question-update-one-without-base-question.input';
import { ProgrammingQuestionUpdateOneWithoutBaseQuestionInput } from '../programming-question/programming-question-update-one-without-base-question.input';
import { AssessmentUpdateOneWithoutQuestionsInput } from '../assessment/assessment-update-one-without-questions.input';
import { QuestionAnswerUpdateManyWithoutQuestionInput } from '../question-answer/question-answer-update-many-without-question.input';

@InputType()
export class QuestionUpdateInput {

    @Field(() => StringFieldUpdateOperationsInput, {nullable:true})
    id?: StringFieldUpdateOperationsInput;

    @Field(() => EnumQuestionTypeFieldUpdateOperationsInput, {nullable:true})
    questionType?: EnumQuestionTypeFieldUpdateOperationsInput;

    @Field(() => IntFieldUpdateOperationsInput, {nullable:true})
    points?: IntFieldUpdateOperationsInput;

    @Field(() => DateTimeFieldUpdateOperationsInput, {nullable:true})
    updatedAt?: DateTimeFieldUpdateOperationsInput;

    @Field(() => DateTimeFieldUpdateOperationsInput, {nullable:true})
    createdAt?: DateTimeFieldUpdateOperationsInput;

    @Field(() => MultipleChoiceQuestionUpdateOneWithoutBaseQuestionInput, {nullable:true})
    multipleChoiceQuestion?: MultipleChoiceQuestionUpdateOneWithoutBaseQuestionInput;

    @Field(() => ProgrammingQuestionUpdateOneWithoutBaseQuestionInput, {nullable:true})
    programmingQuestion?: ProgrammingQuestionUpdateOneWithoutBaseQuestionInput;

    @Field(() => AssessmentUpdateOneWithoutQuestionsInput, {nullable:true})
    assessment?: AssessmentUpdateOneWithoutQuestionsInput;

    @Field(() => QuestionAnswerUpdateManyWithoutQuestionInput, {nullable:true})
    answers?: QuestionAnswerUpdateManyWithoutQuestionInput;
}
