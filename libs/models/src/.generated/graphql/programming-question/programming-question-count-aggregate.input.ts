import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';

@InputType()
export class ProgrammingQuestionCountAggregateInput {

    @Field(() => Boolean, {nullable:true})
    id?: true;

    @Field(() => Boolean, {nullable:true})
    title?: true;

    @Field(() => Boolean, {nullable:true})
    statementMrkdwn?: true;

    @Field(() => Boolean, {nullable:true})
    statementCompiled?: true;

    @Field(() => Boolean, {nullable:true})
    programmingQuestionType?: true;

    @Field(() => Boolean, {nullable:true})
    singleFileProgrammingQuestionId?: true;

    @Field(() => Boolean, {nullable:true})
    multipleFilesProgrammingQuestionId?: true;

    @Field(() => Boolean, {nullable:true})
    updatedAt?: true;

    @Field(() => Boolean, {nullable:true})
    createdAt?: true;

    @Field(() => Boolean, {nullable:true})
    _all?: true;
}
