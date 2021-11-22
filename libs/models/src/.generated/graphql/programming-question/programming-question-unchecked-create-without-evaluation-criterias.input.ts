import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { ProgrammingQuestionType } from '../prisma/programming-question-type.enum';
import { QuestionUncheckedCreateNestedOneWithoutProgrammingQuestionInput } from '../question/question-unchecked-create-nested-one-without-programming-question.input';
import { PracticeProgrammingQuestionUncheckedCreateNestedOneWithoutQuestionInput } from '../practice-programming-question/practice-programming-question-unchecked-create-nested-one-without-question.input';

@InputType()
export class ProgrammingQuestionUncheckedCreateWithoutEvaluationCriteriasInput {

    @Field(() => String, {nullable:true})
    id?: string;

    @Field(() => String, {nullable:false})
    title!: string;

    @Field(() => String, {nullable:false})
    statementMrkdwn!: string;

    @Field(() => String, {nullable:false})
    statementCompiled!: string;

    @Field(() => ProgrammingQuestionType, {nullable:false})
    programmingQuestionType!: keyof typeof ProgrammingQuestionType;

    @Field(() => String, {nullable:true})
    singleFileProgrammingQuestionId?: string;

    @Field(() => String, {nullable:true})
    multipleFilesProgrammingQuestionId?: string;

    @Field(() => Date, {nullable:true})
    updatedAt?: Date | string;

    @Field(() => Date, {nullable:true})
    createdAt?: Date | string;

    @Field(() => QuestionUncheckedCreateNestedOneWithoutProgrammingQuestionInput, {nullable:true})
    baseQuestion?: QuestionUncheckedCreateNestedOneWithoutProgrammingQuestionInput;

    @Field(() => PracticeProgrammingQuestionUncheckedCreateNestedOneWithoutQuestionInput, {nullable:true})
    practice?: PracticeProgrammingQuestionUncheckedCreateNestedOneWithoutQuestionInput;
}
