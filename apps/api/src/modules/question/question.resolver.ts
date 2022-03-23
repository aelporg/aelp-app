import { ResolveField, Resolver, Root } from '@nestjs/graphql'
import QuestionService from './question.service'
import { MultipleChoiceQuestion } from './types/multiple-choice-question.model'
import { ProgrammingQuestion } from './types/programming-question.model'
import { Question } from './types/question.model'

@Resolver(() => Question)
export default class QuestionResolver {
  constructor(private questionService: QuestionService) {}

  @ResolveField(() => ProgrammingQuestion)
  async programmingQuestion(@Root() question: Question) {
    return this.questionService.getById(question.id).programmingQuestion()
  }

  @ResolveField(() => MultipleChoiceQuestion)
  async multipleChoiceQuestion(@Root() question: Question) {
    return this.questionService.getById(question.id).multipleChoiceQuestion()
  }
}
