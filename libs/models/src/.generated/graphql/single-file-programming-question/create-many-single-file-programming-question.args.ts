import { Field } from '@nestjs/graphql';
import { ArgsType } from '@nestjs/graphql';
import { SingleFileProgrammingQuestionCreateManyInput } from './single-file-programming-question-create-many.input';

@ArgsType()
export class CreateManySingleFileProgrammingQuestionArgs {

    @Field(() => [SingleFileProgrammingQuestionCreateManyInput], {nullable:false})
    data!: Array<SingleFileProgrammingQuestionCreateManyInput>;

    @Field(() => Boolean, {nullable:true})
    skipDuplicates?: boolean;
}
