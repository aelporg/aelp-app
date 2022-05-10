// import { useMutation, useQuery, useSubscription } from '@apollo/client'
// import React from 'react'
// import {
//   EnvironmentChangeLanguage,
//   EnvironmentChangeLanguageVariables,
// } from 'typings/graphql/EnvironmentChangeLanguage'
// import {
//   EnvironmentQuery,
//   EnvironmentQueryVariables,
// } from 'typings/graphql/EnvironmentQuery'
// import { EnvironmentRunTestCasesMutation } from 'typings/graphql/EnvironmentRunTestCasesMutation'
// import {
//   UpdateFileMutation,
//   UpdateFileMutationVariables,
// } from 'typings/graphql/UpdateFileMutation'
// import { ENVIRNOMENT_QUERY } from './graphql/envirnoment-query'
// import { ENVIRONMENT_RUN_CODE_MUTATION } from './graphql/envirnoment-run-code-mutation'
// import { ENVIRONMENT_RUN_TEST_CASES_MUTATION } from './graphql/envirnoment-run-testcases-mutation'
// import { UPDATE_FILE_MUTATION } from './graphql/envirnoment-update-code-mutation'
// import { ENVIRONEMENT_CHANGE_LANG_MUTATION } from './graphql/environment-change-lang-mutation'

// interface Operation<T = any> {
//   func: (...args: any[]) => any
//   loading: boolean
//   result: T
//   error: any
// }

// type operations = 'updateFile' | 'runCode' | 'changeLanguage' | 'runTestCases'
// interface IEnvironmentContext {
//   environment?: EnvironmentQuery['envirnoment']
//   environmentLoading: boolean
//   operations: Record<operations, Operation>

// }

// export const EnvironmentContext = React.createContext<
//   IEnvironmentContext | undefined
// >(undefined)

// export function useEnvironmentContext() {
//   const context = React.useContext(EnvironmentContext)
//   if (context === undefined) {
//     throw new Error(
//       'useEnvironmentContext must be used within a EnvironmentContext'
//     )
//   }
//   return context
// }

// export function test(props: {
//   children: React.ReactNode
//   environmentId: string
// }) {
//   const { data, loading } = useQuery<
//     EnvironmentQuery,
//     EnvironmentQueryVariables
//   >(ENVIRNOMENT_QUERY, {
//     variables: {
//       id: props.environmentId,
//     },
//     fetchPolicy: props.environmentId ? 'cache-and-network' : 'standby',
//   })

//   const environment = data?.envirnoment

//   const [
//     changeLanguage,
//     {
//       data: changeLanguageResult,
//       loading: changeLanguageLoading,
//       error: changeLanguageError,
//     },
//   ] = useMutation<
//     EnvironmentChangeLanguage,
//     EnvironmentChangeLanguageVariables
//   >(ENVIRONEMENT_CHANGE_LANG_MUTATION, { refetchQueries: [ENVIRNOMENT_QUERY] })

//   const [
//     updateFile,
//     {
//       data: updateFileResult,
//       loading: updateFileLoading,
//       error: updateFileError,
//     },
//   ] = useMutation<UpdateFileMutation, UpdateFileMutationVariables>(
//     UPDATE_FILE_MUTATION,

//   const [
//     runCode,
//     { data: runCodeResult, loading: runCodeLoading, error: runCodeError },
//   ] = useMutation(ENVIRONMENT_RUN_CODE_MUTATION, {
//     fetchPolicy: 'no-cache',
//     variables: {
//       id: environment?.id,
//     },
//   })

//   const [
//     runTestCases,
//     { data: runTestCasesResult, loading: runTestCasesLoading, error: runTestCasesError },
//   ] = useMutation<EnvironmentRunTestCasesMutation>(ENVIRONMENT_RUN_TEST_CASES_MUTATION, {
//     fetchPolicy: 'no-cache',
//     variables: {
//       id: environment?.id,
//     },
//   })

//   return (
//     <EnvironmentContext.Provider
//       value={{
//         environment,
//         environmentLoading: loading,
//         operations: {
//           updateFile: {
//             result: updateFileResult,
//             func: updateFile,
//             loading: updateFileLoading,
//             error: updateFileError,
//           },
//           runCode: {
//             func: runCode,
//             loading: runCodeLoading,
//             error: runCodeError,
//             result: runCodeResult,
//           },
//           changeLanguage: {
//             func: changeLanguage,
//             loading: changeLanguageLoading,
//             error: changeLanguageError,
//             result: changeLanguageResult,
//           },
//           runTestCases: {
//             func: runTestCases,
//             loading: runTestCasesLoading,
//             error: runTestCasesError,
//             result: runTestCasesResult,
//           },
//         },
//       }}
//     >
//       {props.children}
//     </EnvironmentContext.Provider>
//   )
// }
