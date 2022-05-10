import {
  DocumentNode,
  useQuery,
  QueryResult,
  QueryHookOptions,
} from '@apollo/client'
import Center from '@components/primitives/center'
import Loader from '@components/primitives/loader'
import ContentLoader from '../primitives/content-loader'

interface QueryProps<QueryType, Variables> {
  query: DocumentNode
  variables?: Variables
  children: (
    data: QueryType,
    other?: Omit<QueryResult<QueryType, Variables>, 'data'>
  ) => React.ReactElement
  renderError?: (error: Error) => React.ReactElement
  disabled?: boolean
  queryOptions?: Omit<QueryHookOptions<QueryType, Variables>, 'variables'>
}

export default function Query<QueryType = any, Variables = any>({
  query,
  variables,
  renderError,
  disabled,
  children,
  queryOptions,
}: QueryProps<QueryType, Variables>): React.ReactElement {
  const { fetchPolicy, ...restOptions } = queryOptions || {}

  const { data, loading, error, ...restResult } = useQuery<
    QueryType,
    Variables
  >(query, {
    variables,
    fetchPolicy: disabled ? 'standby' : fetchPolicy,
    ...restOptions,
  })

  if (loading) {
    return (
      <Center>
        <Loader />
      </Center>
    )
  }

  if (error) {
    return renderError ? (
      renderError(error)
    ) : (
      <div className="text-error">{error.message}</div>
    )
  }

  return data ? <>{children(data, { ...restResult, error, loading })}</> : null
}
