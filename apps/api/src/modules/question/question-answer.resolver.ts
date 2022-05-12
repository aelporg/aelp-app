import { ResolveField, Resolver, Root } from "@nestjs/graphql";
import { QuestionAnswer } from "../assessment/types/question-answer.model";
import { ProgrammingQuestionAnswer } from "../environment/types/programming-question-answer.model";
import QuestionAnswerService from "./question-answer.service";
import { MultipleChoiceQuestionAnswer } from "./types/multiple-choice-question-answer.model";
import { Question } from "./types/question.model";

@Resolver(() => QuestionAnswer)
export default class QuestionAnswerResolver {
  constructor(private questionAnswerService: QuestionAnswerService) {}

  @ResolveField(() => Question)
  async question(@Root() answer: QuestionAnswer) {
    return this.questionAnswerService.getById(answer.id).question();
  }

  @ResolveField(() => ProgrammingQuestionAnswer)
  async programmingQuestionAnswer(@Root() answer: QuestionAnswer) {
    return this.questionAnswerService.getById(answer.id).programmingQuestionAnswer();
  }

  @ResolveField(() => MultipleChoiceQuestionAnswer)
  async multipleChoiceQuestionAnswer(@Root() answer: QuestionAnswer) {
    return this.questionAnswerService.getById(answer.id).multipleChoiceQuestionAnswer();
  }
}
