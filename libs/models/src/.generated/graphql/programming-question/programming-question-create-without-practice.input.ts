import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { ProgrammingQuestionType } from '../prisma/programming-question-type.enum';
import { SingleFileProgrammingQuestionCreateNestedOneWithoutBaseProgrammingQuestionInput } from '../single-file-programming-question/single-file-programming-question-create-nested-one-without-base-programming-question.input';
import { MultipleFilesProgrammingQuestionCreateNestedOneWithoutBaseProgrammingQuestionInput } from '../multiple-files-programming-question/multiple-files-programming-question-create-nested-one-without-base-programming-question.input';
import { QuestionCreateNestedOneWithoutProgrammingQuestionInput } from '../question/question-create-nested-one-without-programming-question.input';
import { EvaluationCriteriaCreateNestedManyWithoutProgrammingQuestionInput } from '../evaluation-criteria/evaluation-criteria-create-nested-many-without-programming-question.input';

@InputType()
export class ProgrammingQuestionCreateWithoutPracticeInput {

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

    @Field(() => Date, {nullable:true})
    updatedAt?: Date | string;

    @Field(() => Date, {nullable:true})
    createdAt?: Date | string;

    @Field(() => SingleFileProgrammingQuestionCreateNestedOneWithoutBaseProgrammingQuestionInput, {nullable:true})
    singleFileProgrammingQuestion?: SingleFileProgrammingQuestionCreateNestedOneWithoutBaseProgrammingQuestionInput;

    @Field(() => MultipleFilesProgrammingQuestionCreateNestedOneWithoutBaseProgrammingQuestionInput, {nullable:true})
    multipleFilesProgrammingQuestion?: MultipleFilesProgrammingQuestionCreateNestedOneWithoutBaseProgrammingQuestionInput;

    @Field(() => QuestionCreateNestedOneWithoutProgrammingQuestionInput, {nullable:true})
    baseQuestion?: QuestionCreateNestedOneWithoutProgrammingQuestionInput;

    @Field(() => EvaluationCriteriaCreateNestedManyWithoutProgrammingQuestionInput, {nullable:true})
    evaluationCriterias?: EvaluationCriteriaCreateNestedManyWithoutProgrammingQuestionInput;
}
