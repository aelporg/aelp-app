import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { SingleFileProgrammingQuestionCreateWithoutAllowedLanguagesInput } from './single-file-programming-question-create-without-allowed-languages.input';
import { SingleFileProgrammingQuestionCreateOrConnectWithoutAllowedLanguagesInput } from './single-file-programming-question-create-or-connect-without-allowed-languages.input';
import { SingleFileProgrammingQuestionWhereUniqueInput } from './single-file-programming-question-where-unique.input';

@InputType()
export class SingleFileProgrammingQuestionCreateNestedManyWithoutAllowedLanguagesInput {

    @Field(() => [SingleFileProgrammingQuestionCreateWithoutAllowedLanguagesInput], {nullable:true})
    create?: Array<SingleFileProgrammingQuestionCreateWithoutAllowedLanguagesInput>;

    @Field(() => [SingleFileProgrammingQuestionCreateOrConnectWithoutAllowedLanguagesInput], {nullable:true})
    connectOrCreate?: Array<SingleFileProgrammingQuestionCreateOrConnectWithoutAllowedLanguagesInput>;

    @Field(() => [SingleFileProgrammingQuestionWhereUniqueInput], {nullable:true})
    connect?: Array<SingleFileProgrammingQuestionWhereUniqueInput>;
}
