import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { SingleFileProgrammingQuestionUpdateWithoutBaseProgrammingQuestionInput } from './single-file-programming-question-update-without-base-programming-question.input';
import { SingleFileProgrammingQuestionCreateWithoutBaseProgrammingQuestionInput } from './single-file-programming-question-create-without-base-programming-question.input';

@InputType()
export class SingleFileProgrammingQuestionUpsertWithoutBaseProgrammingQuestionInput {

    @Field(() => SingleFileProgrammingQuestionUpdateWithoutBaseProgrammingQuestionInput, {nullable:false})
    update!: SingleFileProgrammingQuestionUpdateWithoutBaseProgrammingQuestionInput;

    @Field(() => SingleFileProgrammingQuestionCreateWithoutBaseProgrammingQuestionInput, {nullable:false})
    create!: SingleFileProgrammingQuestionCreateWithoutBaseProgrammingQuestionInput;
}
