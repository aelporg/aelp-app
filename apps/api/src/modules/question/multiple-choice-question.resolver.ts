import { PrismaService } from "@aelp-app/models";
import { ResolveField, Resolver, Root } from "@nestjs/graphql";
import { MultipleChoiceQuestionChoice } from "./types/multiple-choice-question-choice.model";
import { MultipleChoiceQuestion } from "./types/multiple-choice-question.model";

@Resolver(() => MultipleChoiceQuestion)
export default class MultipleChoiceQuestionResolver {
  constructor(private prismaService: PrismaService) { }

  @ResolveField(() => [MultipleChoiceQuestionChoice])
  async choices(@Root() mcq: MultipleChoiceQuestion) {
    return this.prismaService.multipleChoiceQuestion.findUnique({ where: { id: mcq.id } }).choices()
  }

}
