import { Field } from '@nestjs/graphql';
import { ArgsType } from '@nestjs/graphql';
import { SingleFileProgrammingQuestionWhereInput } from './single-file-programming-question-where.input';
import { SingleFileProgrammingQuestionOrderByWithRelationInput } from './single-file-programming-question-order-by-with-relation.input';
import { SingleFileProgrammingQuestionWhereUniqueInput } from './single-file-programming-question-where-unique.input';
import { Int } from '@nestjs/graphql';
import { SingleFileProgrammingQuestionScalarFieldEnum } from './single-file-programming-question-scalar-field.enum';

@ArgsType()
export class FindFirstSingleFileProgrammingQuestionArgs {

    @Field(() => SingleFileProgrammingQuestionWhereInput, {nullable:true})
    where?: SingleFileProgrammingQuestionWhereInput;

    @Field(() => [SingleFileProgrammingQuestionOrderByWithRelationInput], {nullable:true})
    orderBy?: Array<SingleFileProgrammingQuestionOrderByWithRelationInput>;

    @Field(() => SingleFileProgrammingQuestionWhereUniqueInput, {nullable:true})
    cursor?: SingleFileProgrammingQuestionWhereUniqueInput;

    @Field(() => Int, {nullable:true})
    take?: number;

    @Field(() => Int, {nullable:true})
    skip?: number;

    @Field(() => [SingleFileProgrammingQuestionScalarFieldEnum], {nullable:true})
    distinct?: Array<keyof typeof SingleFileProgrammingQuestionScalarFieldEnum>;
}
