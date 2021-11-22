import { Field } from '@nestjs/graphql';
import { ArgsType } from '@nestjs/graphql';
import { PracticeProgrammingQuestionCreateManyInput } from './practice-programming-question-create-many.input';

@ArgsType()
export class CreateManyPracticeProgrammingQuestionArgs {

    @Field(() => [PracticeProgrammingQuestionCreateManyInput], {nullable:false})
    data!: Array<PracticeProgrammingQuestionCreateManyInput>;

    @Field(() => Boolean, {nullable:true})
    skipDuplicates?: boolean;
}
