import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { AssessmentType } from './assessment-type.enum';

@InputType()
export class EnumAssessmentTypeFieldUpdateOperationsInput {

    @Field(() => AssessmentType, {nullable:true})
    set?: keyof typeof AssessmentType;
}
