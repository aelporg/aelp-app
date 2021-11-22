import { Field } from '@nestjs/graphql';
import { ArgsType } from '@nestjs/graphql';
import { ClassroomWhereUniqueInput } from './classroom-where-unique.input';

@ArgsType()
export class DeleteOneClassroomArgs {

    @Field(() => ClassroomWhereUniqueInput, {nullable:false})
    where!: ClassroomWhereUniqueInput;
}
