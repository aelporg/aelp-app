import { QueryResult, useQuery } from '@apollo/client'
import { useMeStore } from '@modules/auth/store/me-store'
import React, { useMemo } from 'react'
import {
  ClassroomQuery,
  ClassroomQueryVariables,
  ClassroomQuery_classroom_members,
} from 'typings/graphql/ClassroomQuery'
import { CLASSROOM_QUERY } from '../graphql/classroom-query'

type ClassroomContextType =
  | (QueryResult<ClassroomQuery, ClassroomQueryVariables> & {
      userClassroomRole: ClassroomQuery_classroom_members
    })
  | undefined

export const ClassroomContext =
  React.createContext<ClassroomContextType>(undefined)

export function useClassroomContext() {
  const context = React.useContext(ClassroomContext)
  if (!context) {
    throw new Error(
      'useClassroomContext must be used within a ClassroomContextProvider'
    )
  }
  return context
}

export function ClassroomContextProvider(props: {
  children: React.ReactNode
  classroomId: string
}) {
  const queryResult = useQuery<ClassroomQuery, ClassroomQueryVariables>(
    CLASSROOM_QUERY,
    {
      variables: { id: props.classroomId },
    }
  )

  const { me } = useMeStore()
  const userClassroomRole = useMemo(
    () =>
      queryResult.data?.classroom?.members.find(
        member => member.user.id === me.id
      ),
    [me, queryResult]
  )

  return (
    <ClassroomContext.Provider value={{ ...queryResult, userClassroomRole }}>
      {props.children}
    </ClassroomContext.Provider>
  )
}


export const ClassroomContextConsumer = ClassroomContext.Consumer
