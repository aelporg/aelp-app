import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { FileCreateManyEnvironmentInput } from './file-create-many-environment.input';

@InputType()
export class FileCreateManyEnvironmentInputEnvelope {

    @Field(() => [FileCreateManyEnvironmentInput], {nullable:false})
    data!: Array<FileCreateManyEnvironmentInput>;

    @Field(() => Boolean, {nullable:true})
    skipDuplicates?: boolean;
}
