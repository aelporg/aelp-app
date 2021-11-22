import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { ClassroomMemberWhereInput } from './classroom-member-where.input';

@InputType()
export class ClassroomMemberListRelationFilter {

    @Field(() => ClassroomMemberWhereInput, {nullable:true})
    every?: ClassroomMemberWhereInput;

    @Field(() => ClassroomMemberWhereInput, {nullable:true})
    some?: ClassroomMemberWhereInput;

    @Field(() => ClassroomMemberWhereInput, {nullable:true})
    none?: ClassroomMemberWhereInput;
}
