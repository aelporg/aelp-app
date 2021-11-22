import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { AssessmentType } from './assessment-type.enum';
import { NestedIntFilter } from './nested-int-filter.input';
import { NestedEnumAssessmentTypeFilter } from './nested-enum-assessment-type-filter.input';

@InputType()
export class NestedEnumAssessmentTypeWithAggregatesFilter {

    @Field(() => AssessmentType, {nullable:true})
    equals?: keyof typeof AssessmentType;

    @Field(() => [AssessmentType], {nullable:true})
    in?: Array<keyof typeof AssessmentType>;

    @Field(() => [AssessmentType], {nullable:true})
    notIn?: Array<keyof typeof AssessmentType>;

    @Field(() => NestedEnumAssessmentTypeWithAggregatesFilter, {nullable:true})
    not?: NestedEnumAssessmentTypeWithAggregatesFilter;

    @Field(() => NestedIntFilter, {nullable:true})
    _count?: NestedIntFilter;

    @Field(() => NestedEnumAssessmentTypeFilter, {nullable:true})
    _min?: NestedEnumAssessmentTypeFilter;

    @Field(() => NestedEnumAssessmentTypeFilter, {nullable:true})
    _max?: NestedEnumAssessmentTypeFilter;
}
