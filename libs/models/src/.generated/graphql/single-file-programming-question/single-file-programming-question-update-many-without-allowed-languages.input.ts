import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { SingleFileProgrammingQuestionCreateWithoutAllowedLanguagesInput } from './single-file-programming-question-create-without-allowed-languages.input';
import { SingleFileProgrammingQuestionCreateOrConnectWithoutAllowedLanguagesInput } from './single-file-programming-question-create-or-connect-without-allowed-languages.input';
import { SingleFileProgrammingQuestionUpsertWithWhereUniqueWithoutAllowedLanguagesInput } from './single-file-programming-question-upsert-with-where-unique-without-allowed-languages.input';
import { SingleFileProgrammingQuestionWhereUniqueInput } from './single-file-programming-question-where-unique.input';
import { SingleFileProgrammingQuestionUpdateWithWhereUniqueWithoutAllowedLanguagesInput } from './single-file-programming-question-update-with-where-unique-without-allowed-languages.input';
import { SingleFileProgrammingQuestionUpdateManyWithWhereWithoutAllowedLanguagesInput } from './single-file-programming-question-update-many-with-where-without-allowed-languages.input';
import { SingleFileProgrammingQuestionScalarWhereInput } from './single-file-programming-question-scalar-where.input';

@InputType()
export class SingleFileProgrammingQuestionUpdateManyWithoutAllowedLanguagesInput {

    @Field(() => [SingleFileProgrammingQuestionCreateWithoutAllowedLanguagesInput], {nullable:true})
    create?: Array<SingleFileProgrammingQuestionCreateWithoutAllowedLanguagesInput>;

    @Field(() => [SingleFileProgrammingQuestionCreateOrConnectWithoutAllowedLanguagesInput], {nullable:true})
    connectOrCreate?: Array<SingleFileProgrammingQuestionCreateOrConnectWithoutAllowedLanguagesInput>;

    @Field(() => [SingleFileProgrammingQuestionUpsertWithWhereUniqueWithoutAllowedLanguagesInput], {nullable:true})
    upsert?: Array<SingleFileProgrammingQuestionUpsertWithWhereUniqueWithoutAllowedLanguagesInput>;

    @Field(() => [SingleFileProgrammingQuestionWhereUniqueInput], {nullable:true})
    set?: Array<SingleFileProgrammingQuestionWhereUniqueInput>;

    @Field(() => [SingleFileProgrammingQuestionWhereUniqueInput], {nullable:true})
    disconnect?: Array<SingleFileProgrammingQuestionWhereUniqueInput>;

    @Field(() => [SingleFileProgrammingQuestionWhereUniqueInput], {nullable:true})
    delete?: Array<SingleFileProgrammingQuestionWhereUniqueInput>;

    @Field(() => [SingleFileProgrammingQuestionWhereUniqueInput], {nullable:true})
    connect?: Array<SingleFileProgrammingQuestionWhereUniqueInput>;

    @Field(() => [SingleFileProgrammingQuestionUpdateWithWhereUniqueWithoutAllowedLanguagesInput], {nullable:true})
    update?: Array<SingleFileProgrammingQuestionUpdateWithWhereUniqueWithoutAllowedLanguagesInput>;

    @Field(() => [SingleFileProgrammingQuestionUpdateManyWithWhereWithoutAllowedLanguagesInput], {nullable:true})
    updateMany?: Array<SingleFileProgrammingQuestionUpdateManyWithWhereWithoutAllowedLanguagesInput>;

    @Field(() => [SingleFileProgrammingQuestionScalarWhereInput], {nullable:true})
    deleteMany?: Array<SingleFileProgrammingQuestionScalarWhereInput>;
}
