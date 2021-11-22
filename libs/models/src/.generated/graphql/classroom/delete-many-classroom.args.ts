import { Field } from '@nestjs/graphql';
import { ArgsType } from '@nestjs/graphql';
import { ClassroomWhereInput } from './classroom-where.input';

@ArgsType()
export class DeleteManyClassroomArgs {

    @Field(() => ClassroomWhereInput, {nullable:true})
    where?: ClassroomWhereInput;
}
