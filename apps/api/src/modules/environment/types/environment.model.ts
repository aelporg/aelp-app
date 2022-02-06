import { Field } from '@nestjs/graphql';
import { ObjectType } from '@nestjs/graphql';
import { ID } from '@nestjs/graphql';
import { File } from '../file/file.model';
import { ProgrammingQuestionAnswer } from '../programming-question-answer/programming-question-answer.model';
import { EnvironmentPermission } from '../environment-permission/environment-permission.model';
import { EnvironmentCount } from './environment-count.output';

@ObjectType()
export class Environment {

    @Field(() => ID, {nullable:false})
    id!: string;

    @Field(() => [File], {nullable:true})
    files?: Array<File>;

    @Field(() => String, {nullable:false})
    scratchPadData!: string;

    @Field(() => Boolean, {nullable:false,defaultValue:false})
    submitted!: boolean;

    @Field(() => Date, {nullable:false})
    createdAt!: Date;

    @Field(() => Date, {nullable:false})
    updatedAt!: Date;

    @Field(() => [ProgrammingQuestionAnswer], {nullable:true})
    answers?: Array<ProgrammingQuestionAnswer>;

    @Field(() => [EnvironmentPermission], {nullable:true})
    permissions?: Array<EnvironmentPermission>;

    @Field(() => EnvironmentCount, {nullable:false})
    _count?: EnvironmentCount;
}
