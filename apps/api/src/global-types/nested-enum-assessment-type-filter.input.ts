import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { AssessmentType } from './assessment-type.enum';

@InputType()
export class NestedEnumAssessmentTypeFilter {

    @Field(() => AssessmentType, {nullable:true})
    equals?: keyof typeof AssessmentType;

    @Field(() => [AssessmentType], {nullable:true})
    in?: Array<keyof typeof AssessmentType>;

    @Field(() => [AssessmentType], {nullable:true})
    notIn?: Array<keyof typeof AssessmentType>;

    @Field(() => NestedEnumAssessmentTypeFilter, {nullable:true})
    not?: NestedEnumAssessmentTypeFilter;
}
