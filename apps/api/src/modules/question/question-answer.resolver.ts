import { ResolveField, Resolver, Root } from "@nestjs/graphql";
import QuestionAnswerService from "./question-answer.service";
import { QuestionAnswer } from "./types/question-answer.model";
import { Question } from "./types/question.model";

@Resolver(() => QuestionAnswer)
export default class QuestionAnswerResolver {
  constructor(private questionAnswerService: QuestionAnswerService) {}

  @ResolveField(() => Question)
  async question(@Root() answer: QuestionAnswer) {
    return this.questionAnswerService.getById(answer.id).question();
  }


}
