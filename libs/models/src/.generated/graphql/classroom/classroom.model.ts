import { Field } from '@nestjs/graphql';
import { ObjectType } from '@nestjs/graphql';
import { ID } from '@nestjs/graphql';
import { ClassroomMember } from '../classroom-member/classroom-member.model';
import { Assessment } from '../assessment/assessment.model';
import { PracticeProgrammingQuestion } from '../practice-programming-question/practice-programming-question.model';
import { ClassroomCount } from './classroom-count.output';

@ObjectType()
export class Classroom {

    @Field(() => ID, {nullable:false})
    id!: string;

    @Field(() => String, {nullable:false})
    name!: string;

    @Field(() => String, {nullable:true})
    subject!: string | null;

    @Field(() => String, {nullable:true})
    section!: string | null;

    @Field(() => String, {nullable:false})
    inviteCode!: string;

    @Field(() => Date, {nullable:false})
    updatedAt!: Date;

    @Field(() => Date, {nullable:false})
    createdAt!: Date;

    @Field(() => [ClassroomMember], {nullable:true})
    members?: Array<ClassroomMember>;

    @Field(() => [Assessment], {nullable:true})
    assessments?: Array<Assessment>;

    @Field(() => [PracticeProgrammingQuestion], {nullable:true})
    practiceProgrammingQuestions?: Array<PracticeProgrammingQuestion>;

    @Field(() => ClassroomCount, {nullable:false})
    _count?: ClassroomCount;
}
