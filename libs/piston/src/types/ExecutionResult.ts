export default interface ExecutionResult {
  language: string
  version: string
  run: RunResult
  compile?: RunResult
}

export interface RunResult {
  stdout: string
  stderr: string
  output: string
  code: number
  signal: string
}

