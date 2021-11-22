import { Field } from '@nestjs/graphql';
import { ArgsType } from '@nestjs/graphql';
import { ClassroomCreateManyInput } from './classroom-create-many.input';

@ArgsType()
export class CreateManyClassroomArgs {

    @Field(() => [ClassroomCreateManyInput], {nullable:false})
    data!: Array<ClassroomCreateManyInput>;

    @Field(() => Boolean, {nullable:true})
    skipDuplicates?: boolean;
}
