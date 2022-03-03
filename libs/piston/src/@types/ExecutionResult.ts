export default interface ExecutionResult {
  language: string
  version: string
  run: RunResult
}

interface RunResult {
  stdout: string
  stderr: string
  output: string
  code: number
  signal: string
}
