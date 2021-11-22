import { Field } from '@nestjs/graphql';
import { ObjectType } from '@nestjs/graphql';
import { ClassroomRole } from '../prisma/classroom-role.enum';

@ObjectType()
export class ClassroomMemberMinAggregate {

    @Field(() => String, {nullable:true})
    classroomId?: string;

    @Field(() => String, {nullable:true})
    userId?: string;

    @Field(() => ClassroomRole, {nullable:true})
    classroomRole?: keyof typeof ClassroomRole;

    @Field(() => Date, {nullable:true})
    updatedAt?: Date | string;

    @Field(() => Date, {nullable:true})
    createdAt?: Date | string;
}
