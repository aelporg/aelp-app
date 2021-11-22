import { Field } from '@nestjs/graphql';
import { ArgsType } from '@nestjs/graphql';
import { ClassroomUpdateInput } from './classroom-update.input';
import { ClassroomWhereUniqueInput } from './classroom-where-unique.input';

@ArgsType()
export class UpdateOneClassroomArgs {

    @Field(() => ClassroomUpdateInput, {nullable:false})
    data!: ClassroomUpdateInput;

    @Field(() => ClassroomWhereUniqueInput, {nullable:false})
    where!: ClassroomWhereUniqueInput;
}
