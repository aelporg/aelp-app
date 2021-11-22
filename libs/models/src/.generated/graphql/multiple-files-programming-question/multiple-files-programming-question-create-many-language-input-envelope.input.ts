import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { MultipleFilesProgrammingQuestionCreateManyLanguageInput } from './multiple-files-programming-question-create-many-language.input';

@InputType()
export class MultipleFilesProgrammingQuestionCreateManyLanguageInputEnvelope {

    @Field(() => [MultipleFilesProgrammingQuestionCreateManyLanguageInput], {nullable:false})
    data!: Array<MultipleFilesProgrammingQuestionCreateManyLanguageInput>;

    @Field(() => Boolean, {nullable:true})
    skipDuplicates?: boolean;
}
