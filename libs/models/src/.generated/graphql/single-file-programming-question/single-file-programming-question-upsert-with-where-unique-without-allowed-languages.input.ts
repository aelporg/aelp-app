import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { SingleFileProgrammingQuestionWhereUniqueInput } from './single-file-programming-question-where-unique.input';
import { SingleFileProgrammingQuestionUpdateWithoutAllowedLanguagesInput } from './single-file-programming-question-update-without-allowed-languages.input';
import { SingleFileProgrammingQuestionCreateWithoutAllowedLanguagesInput } from './single-file-programming-question-create-without-allowed-languages.input';

@InputType()
export class SingleFileProgrammingQuestionUpsertWithWhereUniqueWithoutAllowedLanguagesInput {

    @Field(() => SingleFileProgrammingQuestionWhereUniqueInput, {nullable:false})
    where!: SingleFileProgrammingQuestionWhereUniqueInput;

    @Field(() => SingleFileProgrammingQuestionUpdateWithoutAllowedLanguagesInput, {nullable:false})
    update!: SingleFileProgrammingQuestionUpdateWithoutAllowedLanguagesInput;

    @Field(() => SingleFileProgrammingQuestionCreateWithoutAllowedLanguagesInput, {nullable:false})
    create!: SingleFileProgrammingQuestionCreateWithoutAllowedLanguagesInput;
}
