import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { SingleFileProgrammingQuestionWhereUniqueInput } from './single-file-programming-question-where-unique.input';
import { SingleFileProgrammingQuestionCreateWithoutAllowedLanguagesInput } from './single-file-programming-question-create-without-allowed-languages.input';

@InputType()
export class SingleFileProgrammingQuestionCreateOrConnectWithoutAllowedLanguagesInput {

    @Field(() => SingleFileProgrammingQuestionWhereUniqueInput, {nullable:false})
    where!: SingleFileProgrammingQuestionWhereUniqueInput;

    @Field(() => SingleFileProgrammingQuestionCreateWithoutAllowedLanguagesInput, {nullable:false})
    create!: SingleFileProgrammingQuestionCreateWithoutAllowedLanguagesInput;
}
