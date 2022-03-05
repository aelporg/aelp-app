import axios, { AxiosInstance } from 'axios'
import ExecutionResult from '../@types/ExecutionResult'
import { Runtime } from '../@types/Runtime'

const versionMap = {
  python: '3.10.0',
  node: '12.16.3',
  'c++': '5.3.0',
}

export default class Piston {
  private axios: AxiosInstance
  private _runtimes: Runtime[]

  constructor({ baseUrl }) {
    this.axios = axios.create({
      baseURL: baseUrl,
      headers: {
        'Content-Type': 'application/json',
      },
    })
  }

  public async runtimes() {
    return this.axios
      .get<Runtime[]>('/api/v2/runtimes')
      .then(({ data }) => data)
  }

  public async install(language: string, version?: string) {
    const { data } = await this.axios.post<ExecutionResult>(
      '/api/v2/packages',
      {
        language,
        version: version || versionMap[language],
      }
    )

    this._runtimes = await this.runtimes()

    return data
  }

  public async execute(language: string, code: string) {
    if (!this._runtimes) {
      this._runtimes = await this.runtimes()
    }
    const runtime = this._runtimes.find(r => r.language === language)

    if (!runtime) {
      throw new PistonRuntimeNotFoundError()
    }

    const { data } = await this.axios.post<ExecutionResult>('/api/v2/execute', {
      language: runtime.language,
      version: runtime.version,
      files: [
        {
          name: 'test',
          content: code,
        },
      ],
      stdin: '',
      args: [],
      compile_timeout: 10000,
      run_timeout: 3000,
      compile_memory_limit: -1,
      run_memory_limit: -1,
    })

    return data
  }
}

// ERRORS

export class PistonRuntimeNotFoundError extends Error {
  constructor() {
    super('Piston runtime not found')
  }
}
