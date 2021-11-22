import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { SingleFileProgrammingQuestionWhereUniqueInput } from './single-file-programming-question-where-unique.input';
import { SingleFileProgrammingQuestionCreateWithoutBaseProgrammingQuestionInput } from './single-file-programming-question-create-without-base-programming-question.input';

@InputType()
export class SingleFileProgrammingQuestionCreateOrConnectWithoutBaseProgrammingQuestionInput {

    @Field(() => SingleFileProgrammingQuestionWhereUniqueInput, {nullable:false})
    where!: SingleFileProgrammingQuestionWhereUniqueInput;

    @Field(() => SingleFileProgrammingQuestionCreateWithoutBaseProgrammingQuestionInput, {nullable:false})
    create!: SingleFileProgrammingQuestionCreateWithoutBaseProgrammingQuestionInput;
}
