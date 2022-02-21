import { Parent, ResolveField, Resolver } from "@nestjs/graphql";
import ClassroomAnnouncementsService from "./classroom-announcement.service";
import { ClassroomAnnouncement } from "./types/classroom-announcement.model";

@Resolver(() => ClassroomAnnouncement)
export default class ClassroomAnnouncementResolver {
  constructor (private classAnnoceService: ClassroomAnnouncementsService) {}

  @ResolveField()
  async attachments(@Parent() annoucement: ClassroomAnnouncement) {
    return this.classAnnoceService.getAnnoucementAttachments(annoucement.id)
  }
}
