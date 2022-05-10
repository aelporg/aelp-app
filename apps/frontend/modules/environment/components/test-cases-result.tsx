import classNames from 'classnames'
import { useEnviromentStore } from '../useEnvirnoment'

export function TestCasesResult() {
  const result = useEnviromentStore(e => e.lastTestCasesResult)

  return (
    <div className="flex flex-col gap-3">
      {result && result.length === 0 && (
        <div className="text-center text-gray-500">No test cases found</div>
      )}
      {result?.map((each, index) => (
        <div
          key={index}
          className="bg-white items-center flex justify-between border-2 rounded-lg p-2"
        >
          <span className="ml-2">{each.criteria.name}</span>
          <div
            className={classNames(
              'px-4 rounded-lg py-2  bg-opacity-20 font-bold',
              each.status === 'PASSED'
                ? 'bg-accent text-accent '
                : 'bg-error text-error'
            )}
          >
            {each.status}
          </div>
        </div>
      ))}
    </div>
  )
}
