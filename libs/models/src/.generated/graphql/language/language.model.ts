import { Field } from '@nestjs/graphql';
import { ObjectType } from '@nestjs/graphql';
import { ID } from '@nestjs/graphql';
import { SingleFileProgrammingQuestion } from '../single-file-programming-question/single-file-programming-question.model';
import { MultipleFilesProgrammingQuestion } from '../multiple-files-programming-question/multiple-files-programming-question.model';
import { LanguageCount } from './language-count.output';

@ObjectType()
export class Language {

    @Field(() => ID, {nullable:false})
    id!: string;

    @Field(() => String, {nullable:false})
    name!: string;

    @Field(() => String, {nullable:false})
    extension!: string;

    @Field(() => [SingleFileProgrammingQuestion], {nullable:true})
    singleFileQuestions?: Array<SingleFileProgrammingQuestion>;

    @Field(() => Date, {nullable:false})
    createdAt!: Date;

    @Field(() => Date, {nullable:false})
    updatedAt!: Date;

    @Field(() => [MultipleFilesProgrammingQuestion], {nullable:true})
    MultipleFilesProgrammingQuestion?: Array<MultipleFilesProgrammingQuestion>;

    @Field(() => LanguageCount, {nullable:false})
    _count?: LanguageCount;
}