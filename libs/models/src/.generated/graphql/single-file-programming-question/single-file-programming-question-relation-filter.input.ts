import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { SingleFileProgrammingQuestionWhereInput } from './single-file-programming-question-where.input';

@InputType()
export class SingleFileProgrammingQuestionRelationFilter {

    @Field(() => SingleFileProgrammingQuestionWhereInput, {nullable:true})
    is?: SingleFileProgrammingQuestionWhereInput;

    @Field(() => SingleFileProgrammingQuestionWhereInput, {nullable:true})
    isNot?: SingleFileProgrammingQuestionWhereInput;
}
