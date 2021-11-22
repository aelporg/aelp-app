import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { SortOrder } from '../prisma/sort-order.enum';
import { ProgrammingQuestionOrderByWithRelationInput } from '../programming-question/programming-question-order-by-with-relation.input';
import { ClassroomOrderByWithRelationInput } from '../classroom/classroom-order-by-with-relation.input';

@InputType()
export class PracticeProgrammingQuestionOrderByWithRelationInput {

    @Field(() => SortOrder, {nullable:true})
    id?: keyof typeof SortOrder;

    @Field(() => SortOrder, {nullable:true})
    questionId?: keyof typeof SortOrder;

    @Field(() => SortOrder, {nullable:true})
    diffculty?: keyof typeof SortOrder;

    @Field(() => ProgrammingQuestionOrderByWithRelationInput, {nullable:true})
    question?: ProgrammingQuestionOrderByWithRelationInput;

    @Field(() => ClassroomOrderByWithRelationInput, {nullable:true})
    classroom?: ClassroomOrderByWithRelationInput;

    @Field(() => SortOrder, {nullable:true})
    classroomId?: keyof typeof SortOrder;
}
