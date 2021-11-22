import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { MultipleFilesProgrammingQuestionCreateWithoutDefaultFilesInput } from './multiple-files-programming-question-create-without-default-files.input';
import { MultipleFilesProgrammingQuestionCreateOrConnectWithoutDefaultFilesInput } from './multiple-files-programming-question-create-or-connect-without-default-files.input';
import { MultipleFilesProgrammingQuestionUpsertWithWhereUniqueWithoutDefaultFilesInput } from './multiple-files-programming-question-upsert-with-where-unique-without-default-files.input';
import { MultipleFilesProgrammingQuestionWhereUniqueInput } from './multiple-files-programming-question-where-unique.input';
import { MultipleFilesProgrammingQuestionUpdateWithWhereUniqueWithoutDefaultFilesInput } from './multiple-files-programming-question-update-with-where-unique-without-default-files.input';
import { MultipleFilesProgrammingQuestionUpdateManyWithWhereWithoutDefaultFilesInput } from './multiple-files-programming-question-update-many-with-where-without-default-files.input';
import { MultipleFilesProgrammingQuestionScalarWhereInput } from './multiple-files-programming-question-scalar-where.input';

@InputType()
export class MultipleFilesProgrammingQuestionUpdateManyWithoutDefaultFilesInput {

    @Field(() => [MultipleFilesProgrammingQuestionCreateWithoutDefaultFilesInput], {nullable:true})
    create?: Array<MultipleFilesProgrammingQuestionCreateWithoutDefaultFilesInput>;

    @Field(() => [MultipleFilesProgrammingQuestionCreateOrConnectWithoutDefaultFilesInput], {nullable:true})
    connectOrCreate?: Array<MultipleFilesProgrammingQuestionCreateOrConnectWithoutDefaultFilesInput>;

    @Field(() => [MultipleFilesProgrammingQuestionUpsertWithWhereUniqueWithoutDefaultFilesInput], {nullable:true})
    upsert?: Array<MultipleFilesProgrammingQuestionUpsertWithWhereUniqueWithoutDefaultFilesInput>;

    @Field(() => [MultipleFilesProgrammingQuestionWhereUniqueInput], {nullable:true})
    set?: Array<MultipleFilesProgrammingQuestionWhereUniqueInput>;

    @Field(() => [MultipleFilesProgrammingQuestionWhereUniqueInput], {nullable:true})
    disconnect?: Array<MultipleFilesProgrammingQuestionWhereUniqueInput>;

    @Field(() => [MultipleFilesProgrammingQuestionWhereUniqueInput], {nullable:true})
    delete?: Array<MultipleFilesProgrammingQuestionWhereUniqueInput>;

    @Field(() => [MultipleFilesProgrammingQuestionWhereUniqueInput], {nullable:true})
    connect?: Array<MultipleFilesProgrammingQuestionWhereUniqueInput>;

    @Field(() => [MultipleFilesProgrammingQuestionUpdateWithWhereUniqueWithoutDefaultFilesInput], {nullable:true})
    update?: Array<MultipleFilesProgrammingQuestionUpdateWithWhereUniqueWithoutDefaultFilesInput>;

    @Field(() => [MultipleFilesProgrammingQuestionUpdateManyWithWhereWithoutDefaultFilesInput], {nullable:true})
    updateMany?: Array<MultipleFilesProgrammingQuestionUpdateManyWithWhereWithoutDefaultFilesInput>;

    @Field(() => [MultipleFilesProgrammingQuestionScalarWhereInput], {nullable:true})
    deleteMany?: Array<MultipleFilesProgrammingQuestionScalarWhereInput>;
}
