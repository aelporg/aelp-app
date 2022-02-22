import { Resolver } from '@nestjs/graphql'
import { Question } from './types/question.model'

@Resolver(() => Question)
export default class QuestionResolver {}
