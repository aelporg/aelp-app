import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { ProgrammingQuestionUncheckedCreateNestedOneWithoutSingleFileProgrammingQuestionInput } from '../programming-question/programming-question-unchecked-create-nested-one-without-single-file-programming-question.input';

@InputType()
export class SingleFileProgrammingQuestionUncheckedCreateInput {

    @Field(() => String, {nullable:true})
    id?: string;

    @Field(() => String, {nullable:false})
    defaultCode!: string;

    @Field(() => ProgrammingQuestionUncheckedCreateNestedOneWithoutSingleFileProgrammingQuestionInput, {nullable:true})
    baseProgrammingQuestion?: ProgrammingQuestionUncheckedCreateNestedOneWithoutSingleFileProgrammingQuestionInput;
}
