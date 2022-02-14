import { Field } from '@nestjs/graphql';
import { ObjectType } from '@nestjs/graphql';
import { ID } from '@nestjs/graphql';
import { ClassroomAnnouncements } from './classroom-announcements.model';

@ObjectType()
export class AnnoucmentAttachment {

    @Field(() => ID, {nullable:false})
    id!: string;

    @Field(() => String, {nullable:false})
    fileName!: string;

    @Field(() => String, {nullable:false})
    file!: Buffer;

    @Field(() => ClassroomAnnouncements, {nullable:false})
    classroomAnnouncement?: ClassroomAnnouncements;

    @Field(() => String, {nullable:false})
    classroomAnnouncementId!: string;
}
