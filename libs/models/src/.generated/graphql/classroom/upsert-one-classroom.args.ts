import { Field } from '@nestjs/graphql';
import { ArgsType } from '@nestjs/graphql';
import { ClassroomWhereUniqueInput } from './classroom-where-unique.input';
import { ClassroomCreateInput } from './classroom-create.input';
import { ClassroomUpdateInput } from './classroom-update.input';

@ArgsType()
export class UpsertOneClassroomArgs {

    @Field(() => ClassroomWhereUniqueInput, {nullable:false})
    where!: ClassroomWhereUniqueInput;

    @Field(() => ClassroomCreateInput, {nullable:false})
    create!: ClassroomCreateInput;

    @Field(() => ClassroomUpdateInput, {nullable:false})
    update!: ClassroomUpdateInput;
}
