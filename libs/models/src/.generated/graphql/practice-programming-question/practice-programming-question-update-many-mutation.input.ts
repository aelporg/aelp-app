import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { StringFieldUpdateOperationsInput } from '../prisma/string-field-update-operations.input';
import { EnumDifficultyFieldUpdateOperationsInput } from '../prisma/enum-difficulty-field-update-operations.input';

@InputType()
export class PracticeProgrammingQuestionUpdateManyMutationInput {

    @Field(() => StringFieldUpdateOperationsInput, {nullable:true})
    id?: StringFieldUpdateOperationsInput;

    @Field(() => EnumDifficultyFieldUpdateOperationsInput, {nullable:true})
    diffculty?: EnumDifficultyFieldUpdateOperationsInput;
}
