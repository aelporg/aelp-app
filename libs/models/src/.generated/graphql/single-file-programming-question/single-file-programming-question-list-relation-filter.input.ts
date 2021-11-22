import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { SingleFileProgrammingQuestionWhereInput } from './single-file-programming-question-where.input';

@InputType()
export class SingleFileProgrammingQuestionListRelationFilter {

    @Field(() => SingleFileProgrammingQuestionWhereInput, {nullable:true})
    every?: SingleFileProgrammingQuestionWhereInput;

    @Field(() => SingleFileProgrammingQuestionWhereInput, {nullable:true})
    some?: SingleFileProgrammingQuestionWhereInput;

    @Field(() => SingleFileProgrammingQuestionWhereInput, {nullable:true})
    none?: SingleFileProgrammingQuestionWhereInput;
}
