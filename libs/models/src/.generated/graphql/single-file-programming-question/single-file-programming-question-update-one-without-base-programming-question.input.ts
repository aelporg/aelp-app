import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { SingleFileProgrammingQuestionCreateWithoutBaseProgrammingQuestionInput } from './single-file-programming-question-create-without-base-programming-question.input';
import { SingleFileProgrammingQuestionCreateOrConnectWithoutBaseProgrammingQuestionInput } from './single-file-programming-question-create-or-connect-without-base-programming-question.input';
import { SingleFileProgrammingQuestionUpsertWithoutBaseProgrammingQuestionInput } from './single-file-programming-question-upsert-without-base-programming-question.input';
import { SingleFileProgrammingQuestionWhereUniqueInput } from './single-file-programming-question-where-unique.input';
import { SingleFileProgrammingQuestionUpdateWithoutBaseProgrammingQuestionInput } from './single-file-programming-question-update-without-base-programming-question.input';

@InputType()
export class SingleFileProgrammingQuestionUpdateOneWithoutBaseProgrammingQuestionInput {

    @Field(() => SingleFileProgrammingQuestionCreateWithoutBaseProgrammingQuestionInput, {nullable:true})
    create?: SingleFileProgrammingQuestionCreateWithoutBaseProgrammingQuestionInput;

    @Field(() => SingleFileProgrammingQuestionCreateOrConnectWithoutBaseProgrammingQuestionInput, {nullable:true})
    connectOrCreate?: SingleFileProgrammingQuestionCreateOrConnectWithoutBaseProgrammingQuestionInput;

    @Field(() => SingleFileProgrammingQuestionUpsertWithoutBaseProgrammingQuestionInput, {nullable:true})
    upsert?: SingleFileProgrammingQuestionUpsertWithoutBaseProgrammingQuestionInput;

    @Field(() => Boolean, {nullable:true})
    disconnect?: boolean;

    @Field(() => Boolean, {nullable:true})
    delete?: boolean;

    @Field(() => SingleFileProgrammingQuestionWhereUniqueInput, {nullable:true})
    connect?: SingleFileProgrammingQuestionWhereUniqueInput;

    @Field(() => SingleFileProgrammingQuestionUpdateWithoutBaseProgrammingQuestionInput, {nullable:true})
    update?: SingleFileProgrammingQuestionUpdateWithoutBaseProgrammingQuestionInput;
}
