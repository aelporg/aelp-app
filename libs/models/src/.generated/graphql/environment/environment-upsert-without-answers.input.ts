import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { EnvironmentUpdateWithoutAnswersInput } from './environment-update-without-answers.input';
import { EnvironmentCreateWithoutAnswersInput } from './environment-create-without-answers.input';

@InputType()
export class EnvironmentUpsertWithoutAnswersInput {

    @Field(() => EnvironmentUpdateWithoutAnswersInput, {nullable:false})
    update!: EnvironmentUpdateWithoutAnswersInput;

    @Field(() => EnvironmentCreateWithoutAnswersInput, {nullable:false})
    create!: EnvironmentCreateWithoutAnswersInput;
}
