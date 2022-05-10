import { Field } from '@nestjs/graphql'
import { ObjectType } from '@nestjs/graphql'
import { Int } from '@nestjs/graphql'
import { ExecutionResult, RunResult } from '@aelp-app/piston'
import { EvaluationCriteria } from '../../evaluation-criteria/types/evaluation-criteria.model'

@ObjectType()
export class RunResultOutput implements RunResult {
  @Field(() => String)
  stdout: string
  @Field(() => String)
  stderr: string
  @Field(() => String)
  output: string
  @Field(() => Int)
  code: number
  @Field(() => String)
  signal: string

}

@ObjectType()
export class RunCodeOutput implements ExecutionResult {
  @Field(() => String)
  language: string
  @Field(() => String)
  version: string
  @Field(() => RunResultOutput)
  run: RunResultOutput
  @Field(() => RunResultOutput, { nullable: true })
  compile?: RunResultOutput
}


@ObjectType()
export class RunTestCasesOutput {
  @Field(() => String)
  status: string

  @Field(() => EvaluationCriteria)
  criteria: EvaluationCriteria

  @Field(() => RunCodeOutput, { nullable: true })
  output?: RunCodeOutput
}
