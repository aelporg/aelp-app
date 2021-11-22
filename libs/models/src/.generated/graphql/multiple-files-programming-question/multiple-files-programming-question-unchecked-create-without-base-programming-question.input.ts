import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';

@InputType()
export class MultipleFilesProgrammingQuestionUncheckedCreateWithoutBaseProgrammingQuestionInput {

    @Field(() => String, {nullable:true})
    id?: string;

    @Field(() => String, {nullable:false})
    languageId!: string;
}
