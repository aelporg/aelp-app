import { Field } from '@nestjs/graphql';
import { ArgsType } from '@nestjs/graphql';
import { ClassroomWhereInput } from './classroom-where.input';
import { ClassroomOrderByWithRelationInput } from './classroom-order-by-with-relation.input';
import { ClassroomWhereUniqueInput } from './classroom-where-unique.input';
import { Int } from '@nestjs/graphql';
import { ClassroomScalarFieldEnum } from './classroom-scalar-field.enum';

@ArgsType()
export class FindFirstClassroomArgs {

    @Field(() => ClassroomWhereInput, {nullable:true})
    where?: ClassroomWhereInput;

    @Field(() => [ClassroomOrderByWithRelationInput], {nullable:true})
    orderBy?: Array<ClassroomOrderByWithRelationInput>;

    @Field(() => ClassroomWhereUniqueInput, {nullable:true})
    cursor?: ClassroomWhereUniqueInput;

    @Field(() => Int, {nullable:true})
    take?: number;

    @Field(() => Int, {nullable:true})
    skip?: number;

    @Field(() => [ClassroomScalarFieldEnum], {nullable:true})
    distinct?: Array<keyof typeof ClassroomScalarFieldEnum>;
}
