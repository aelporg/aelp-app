import { Field } from '@nestjs/graphql';
import { ArgsType } from '@nestjs/graphql';
import { ClassroomCreateInput } from './classroom-create.input';

@ArgsType()
export class CreateOneClassroomArgs {

    @Field(() => ClassroomCreateInput, {nullable:false})
    data!: ClassroomCreateInput;
}
