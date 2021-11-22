import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { FileCreateWithoutMultipleFilesProgrammingQuestionInput } from './file-create-without-multiple-files-programming-question.input';
import { FileCreateOrConnectWithoutMultipleFilesProgrammingQuestionInput } from './file-create-or-connect-without-multiple-files-programming-question.input';
import { FileUpsertWithWhereUniqueWithoutMultipleFilesProgrammingQuestionInput } from './file-upsert-with-where-unique-without-multiple-files-programming-question.input';
import { FileWhereUniqueInput } from './file-where-unique.input';
import { FileUpdateWithWhereUniqueWithoutMultipleFilesProgrammingQuestionInput } from './file-update-with-where-unique-without-multiple-files-programming-question.input';
import { FileUpdateManyWithWhereWithoutMultipleFilesProgrammingQuestionInput } from './file-update-many-with-where-without-multiple-files-programming-question.input';
import { FileScalarWhereInput } from './file-scalar-where.input';

@InputType()
export class FileUpdateManyWithoutMultipleFilesProgrammingQuestionInput {

    @Field(() => [FileCreateWithoutMultipleFilesProgrammingQuestionInput], {nullable:true})
    create?: Array<FileCreateWithoutMultipleFilesProgrammingQuestionInput>;

    @Field(() => [FileCreateOrConnectWithoutMultipleFilesProgrammingQuestionInput], {nullable:true})
    connectOrCreate?: Array<FileCreateOrConnectWithoutMultipleFilesProgrammingQuestionInput>;

    @Field(() => [FileUpsertWithWhereUniqueWithoutMultipleFilesProgrammingQuestionInput], {nullable:true})
    upsert?: Array<FileUpsertWithWhereUniqueWithoutMultipleFilesProgrammingQuestionInput>;

    @Field(() => [FileWhereUniqueInput], {nullable:true})
    set?: Array<FileWhereUniqueInput>;

    @Field(() => [FileWhereUniqueInput], {nullable:true})
    disconnect?: Array<FileWhereUniqueInput>;

    @Field(() => [FileWhereUniqueInput], {nullable:true})
    delete?: Array<FileWhereUniqueInput>;

    @Field(() => [FileWhereUniqueInput], {nullable:true})
    connect?: Array<FileWhereUniqueInput>;

    @Field(() => [FileUpdateWithWhereUniqueWithoutMultipleFilesProgrammingQuestionInput], {nullable:true})
    update?: Array<FileUpdateWithWhereUniqueWithoutMultipleFilesProgrammingQuestionInput>;

    @Field(() => [FileUpdateManyWithWhereWithoutMultipleFilesProgrammingQuestionInput], {nullable:true})
    updateMany?: Array<FileUpdateManyWithWhereWithoutMultipleFilesProgrammingQuestionInput>;

    @Field(() => [FileScalarWhereInput], {nullable:true})
    deleteMany?: Array<FileScalarWhereInput>;
}
