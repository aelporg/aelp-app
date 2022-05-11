import { ApolloClient, useApolloClient } from '@apollo/client'
import {
  EnvironmentQuery,
  EnvironmentQueryVariables,
} from 'typings/graphql/EnvironmentQuery'
import create from 'zustand'
import createContext from 'zustand/context'
import { StoreApi } from 'zustand'

import { ENVIRNOMENT_QUERY } from './graphql/envirnoment-query'
import { UPDATE_FILE_MUTATION } from './graphql/envirnoment-update-code-mutation'
import {
  UpdateFileMutation,
  UpdateFileMutationVariables,
} from 'typings/graphql/UpdateFileMutation'
import { ENVIRONEMENT_CHANGE_LANG_MUTATION } from './graphql/environment-change-lang-mutation'
import {
  EnvironmentChangeLanguage,
  EnvironmentChangeLanguageVariables,
} from 'typings/graphql/EnvironmentChangeLanguage'
import { ENVIRONMENT_RUN_CODE_MUTATION } from './graphql/envirnoment-run-code-mutation'
import {
  EnvironmentRunCodeMutation,
  EnvironmentRunCodeMutationVariables,
} from 'typings/graphql/EnvironmentRunCodeMutation'
import {
  EnvironmentRunTestCasesMutation,
  EnvironmentRunTestCasesMutationVariables,
} from 'typings/graphql/EnvironmentRunTestCasesMutation'
import { ENVIRONMENT_RUN_TEST_CASES_MUTATION } from './graphql/envirnoment-run-testcases-mutation'
import { ENVIRONMENT_SUBMIT_MUTATION } from './graphql/envirnoment-submit-mutation'
import {
  EnvironmentSubmitMutation,
  EnvironmentSubmitMutationVariables,
} from 'typings/graphql/EnvironmentSubmitMutation'

const createEnvApi = (gql: ApolloClient<object>) => ({
  getEnv: (envId: string) => {
    return gql.query<EnvironmentQuery, EnvironmentQueryVariables>({
      query: ENVIRNOMENT_QUERY,
      variables: {
        id: envId,
      },
      fetchPolicy: 'network-only',
    })
  },
  runCode: (envId: string, input = '') => {
    return gql.mutate<
      EnvironmentRunCodeMutation,
      EnvironmentRunCodeMutationVariables
    >({
      mutation: ENVIRONMENT_RUN_CODE_MUTATION,
      variables: {
        id: envId,
        input,
      },
    })
  },
  runTestCases: (envId: string) => {
    return gql.mutate<
      EnvironmentRunTestCasesMutation,
      EnvironmentRunTestCasesMutationVariables
    >({
      mutation: ENVIRONMENT_RUN_TEST_CASES_MUTATION,
      variables: {
        id: envId,
      },
    })
  },
  changeLanguage: (envId: string, languageId: string) => {
    return gql.mutate<
      EnvironmentChangeLanguage,
      EnvironmentChangeLanguageVariables
    >({
      mutation: ENVIRONEMENT_CHANGE_LANG_MUTATION,
      variables: {
        id: envId,
        languageId,
      },
    })
  },
  submit: (envId: string) => {
    return gql.mutate<
      EnvironmentSubmitMutation,
      EnvironmentSubmitMutationVariables
    >({
      mutation: ENVIRONMENT_SUBMIT_MUTATION,
      variables: {
        submitEnvId: envId,
      },
    })
  },
})

interface EnvironmentStoreCreateArgs {
  gql: ApolloClient<object>
  envId: string
}

interface EnvironmentLoadingState {
  loadingEnv: boolean
  updatingCode: boolean
  runningCode: boolean
  runningTestCases: boolean
  changingLanguage: boolean
  submitting: boolean
}

interface UIState {
  consoleTab: 'console' | 'testcases'
  statementTab: 'statment' | 'whiteboard'
}

interface EnvironmentStore {
  environment: EnvironmentQuery['envirnoment']
  lastRunResult?: EnvironmentRunCodeMutation['runCode']
  lastTestCasesResult?: EnvironmentRunTestCasesMutation['runTestCases']
  loadingState: EnvironmentLoadingState
  api: ReturnType<typeof createEnvApi>
  uiState: UIState
  customInput?: string
  fetchEnvironment: () => Promise<void>
  submitEnv: () => Promise<void>
  setLoading: (key: keyof EnvironmentLoadingState, state: boolean) => void
  updateFile: (fileId: string, newCode: string) => Promise<void>
  changeLanguage: (languageId: string) => Promise<void>
  runCode: () => Promise<void>
  runTestCases: () => Promise<void>
  updateUiState: (state: Partial<UIState>) => void
  setCustomInput: (str: string) => void
}

const { Provider, useStore: useEnviromentStore } =
  createContext<StoreApi<EnvironmentStore>>()

const createEnvironmentStore = (context: EnvironmentStoreCreateArgs) => {
  return create<EnvironmentStore>((set, get) => ({
    api: createEnvApi(context.gql),
    uiState: {
      consoleTab: 'console',
      statementTab: 'statment',
    },
    customInput: '',
    setCustomInput: (str: string) => set({ customInput: str }),
    environment: undefined,
    loadingState: {
      loadingEnv: true,
      runningCode: false,
      runningTestCases: false,
      updatingCode: false,
      submitting: false,
      changingLanguage: false,
    },
    updateUiState: uiState =>
      set({ uiState: { ...get().uiState, ...uiState } }),
    setLoading: (key, newState) => {
      set(state => ({
        ...state,
        loadingState: { ...state.loadingState, [key]: newState },
      }))
    },
    fetchEnvironment: async () => {
      get().setLoading('loadingEnv', true)

      try {
        const env = await get().api.getEnv(context.envId)

        set({
          environment: env.data.envirnoment,
        })
      } catch (e) {
        console.error(e)
      } finally {
        get().setLoading('loadingEnv', false)
      }
    },
    busy: () => Object.values(get().loadingState).some(Boolean),
    updateFile: async (fileId, newCode) => {
      get().setLoading('updatingCode', true)

      try {
        const { data } = await context.gql.mutate<
          UpdateFileMutation,
          UpdateFileMutationVariables
        >({
          mutation: UPDATE_FILE_MUTATION,
          variables: {
            data: newCode,
            id: fileId,
          },
        })

        set({
          environment: {
            ...get().environment,
            files: [
              ...get().environment.files.map(file => {
                if (file.id === data.updateFile.id) {
                  return { ...file, ...data.updateFile }
                }
                return file
              }),
            ],
          },
        })
      } catch (e) {
        console.error(e)
      }

      get().setLoading('updatingCode', false)
    },
    changeLanguage: async languageId => {
      await get().api.changeLanguage(context.envId, languageId)

      set({
        environment: (await get().api.getEnv(context.envId)).data.envirnoment,
      })
    },

    runCode: async () => {
      get().setLoading('runningCode', true)
      const result = await get()
        .api.runCode(context.envId, get().customInput)
        .catch()
      if (result.data.runCode)
        set({
          lastRunResult: result.data.runCode,
          uiState: { ...get().uiState, consoleTab: 'console' },
        })
      get().setLoading('runningCode', false)
    },
    runTestCases: async () => {
      get().setLoading('runningTestCases', true)
      const result = await get().api.runTestCases(context.envId).catch()
      if (result.data.runTestCases) {
        set({
          lastTestCasesResult: result.data.runTestCases,
          uiState: { ...get().uiState, consoleTab: 'testcases' },
        })
      }
      get().setLoading('runningTestCases', false)
    },
    submitEnv: async () => {
      get().setLoading('submitting', true)
      try {
        await get().api.submit(context.envId)
      } catch (e) {
        get().setLoading('submitting', false)
        throw e
      }
    },
  }))
}

const EnvironmentProvider = (props: {
  children: React.ReactNode
  environmentId: string
}) => {
  const gql = useApolloClient()

  return (
    <Provider
      createStore={() =>
        createEnvironmentStore({ gql, envId: props.environmentId })
      }
    >
      {props.children}
    </Provider>
  )
}

export { useEnviromentStore, EnvironmentProvider }
