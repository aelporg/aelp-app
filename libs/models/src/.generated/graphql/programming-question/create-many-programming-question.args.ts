import { Field } from '@nestjs/graphql';
import { ArgsType } from '@nestjs/graphql';
import { ProgrammingQuestionCreateManyInput } from './programming-question-create-many.input';

@ArgsType()
export class CreateManyProgrammingQuestionArgs {

    @Field(() => [ProgrammingQuestionCreateManyInput], {nullable:false})
    data!: Array<ProgrammingQuestionCreateManyInput>;

    @Field(() => Boolean, {nullable:true})
    skipDuplicates?: boolean;
}
