import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { SingleFileProgrammingQuestionCreateWithoutBaseProgrammingQuestionInput } from './single-file-programming-question-create-without-base-programming-question.input';
import { SingleFileProgrammingQuestionCreateOrConnectWithoutBaseProgrammingQuestionInput } from './single-file-programming-question-create-or-connect-without-base-programming-question.input';
import { SingleFileProgrammingQuestionWhereUniqueInput } from './single-file-programming-question-where-unique.input';

@InputType()
export class SingleFileProgrammingQuestionCreateNestedOneWithoutBaseProgrammingQuestionInput {

    @Field(() => SingleFileProgrammingQuestionCreateWithoutBaseProgrammingQuestionInput, {nullable:true})
    create?: SingleFileProgrammingQuestionCreateWithoutBaseProgrammingQuestionInput;

    @Field(() => SingleFileProgrammingQuestionCreateOrConnectWithoutBaseProgrammingQuestionInput, {nullable:true})
    connectOrCreate?: SingleFileProgrammingQuestionCreateOrConnectWithoutBaseProgrammingQuestionInput;

    @Field(() => SingleFileProgrammingQuestionWhereUniqueInput, {nullable:true})
    connect?: SingleFileProgrammingQuestionWhereUniqueInput;
}
