import { Field } from '@nestjs/graphql';
import { ArgsType } from '@nestjs/graphql';
import { ClassroomUpdateManyMutationInput } from './classroom-update-many-mutation.input';
import { ClassroomWhereInput } from './classroom-where.input';

@ArgsType()
export class UpdateManyClassroomArgs {

    @Field(() => ClassroomUpdateManyMutationInput, {nullable:false})
    data!: ClassroomUpdateManyMutationInput;

    @Field(() => ClassroomWhereInput, {nullable:true})
    where?: ClassroomWhereInput;
}
