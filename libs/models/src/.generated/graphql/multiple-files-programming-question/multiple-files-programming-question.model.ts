import { Field } from '@nestjs/graphql';
import { ObjectType } from '@nestjs/graphql';
import { ID } from '@nestjs/graphql';
import { Language } from '../language/language.model';
import { ProgrammingQuestion } from '../programming-question/programming-question.model';
import { File } from '../file/file.model';
import { MultipleFilesProgrammingQuestionCount } from './multiple-files-programming-question-count.output';

@ObjectType()
export class MultipleFilesProgrammingQuestion {

    @Field(() => ID, {nullable:false})
    id!: string;

    @Field(() => Language, {nullable:false})
    language?: Language;

    @Field(() => ProgrammingQuestion, {nullable:true})
    baseProgrammingQuestion?: ProgrammingQuestion | null;

    @Field(() => [File], {nullable:true})
    defaultFiles?: Array<File>;

    @Field(() => String, {nullable:false})
    languageId!: string;

    @Field(() => MultipleFilesProgrammingQuestionCount, {nullable:false})
    _count?: MultipleFilesProgrammingQuestionCount;
}
