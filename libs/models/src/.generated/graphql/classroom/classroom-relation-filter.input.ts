import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { ClassroomWhereInput } from './classroom-where.input';

@InputType()
export class ClassroomRelationFilter {

    @Field(() => ClassroomWhereInput, {nullable:true})
    is?: ClassroomWhereInput;

    @Field(() => ClassroomWhereInput, {nullable:true})
    isNot?: ClassroomWhereInput;
}
