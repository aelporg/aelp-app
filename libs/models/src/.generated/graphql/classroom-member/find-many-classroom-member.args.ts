import { Field } from '@nestjs/graphql';
import { ArgsType } from '@nestjs/graphql';
import { ClassroomMemberWhereInput } from './classroom-member-where.input';
import { ClassroomMemberOrderByWithRelationInput } from './classroom-member-order-by-with-relation.input';
import { ClassroomMemberWhereUniqueInput } from './classroom-member-where-unique.input';
import { Int } from '@nestjs/graphql';
import { ClassroomMemberScalarFieldEnum } from './classroom-member-scalar-field.enum';

@ArgsType()
export class FindManyClassroomMemberArgs {

    @Field(() => ClassroomMemberWhereInput, {nullable:true})
    where?: ClassroomMemberWhereInput;

    @Field(() => [ClassroomMemberOrderByWithRelationInput], {nullable:true})
    orderBy?: Array<ClassroomMemberOrderByWithRelationInput>;

    @Field(() => ClassroomMemberWhereUniqueInput, {nullable:true})
    cursor?: ClassroomMemberWhereUniqueInput;

    @Field(() => Int, {nullable:true})
    take?: number;

    @Field(() => Int, {nullable:true})
    skip?: number;

    @Field(() => [ClassroomMemberScalarFieldEnum], {nullable:true})
    distinct?: Array<keyof typeof ClassroomMemberScalarFieldEnum>;
}
