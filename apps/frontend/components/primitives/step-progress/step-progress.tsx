import classNames from 'classnames'
import { CheckIcon } from '@heroicons/react/outline'

interface Step {
  label: string
  icon?: React.ReactElement
}

interface StepProgressProps {
  steps: Step[]
  currentStep: number
}

export default function StepProgress({
  steps,
  currentStep,
}: StepProgressProps) {
  return (
    <>
      <div className={'flex'}>
        {steps.map(({ icon, label }, i) => (
          <div key={i} className="flex items-top">
            <div className="flex flex-col gap-1  items-center">
              <div
                className={classNames(
                  'rounded-full text-lg flex place-items-center place-content-center text-white font-bold  mx-4  w-16 h-16 border-8 border-gray-200',
                  currentStep >= i ? 'bg-accent'  : 'bg-gray-400'
                )}
              >
                {currentStep > i ? <CheckIcon className='h-7' /> : i + 1}
              </div>
              <div className="font-medium">{label}</div>
            </div>
            {i < steps.length - 1 && (
              <div
                className={classNames(
                  'h-2 w-36 my-7 rounded-3xl',
                  currentStep > i ? 'bg-accent' : 'bg-gray-200'
                )}
              />
            )}
          </div>
        ))}
      </div>
    </>
  )
}
