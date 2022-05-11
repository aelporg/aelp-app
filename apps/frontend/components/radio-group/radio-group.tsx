import React from 'react'
import { RadioGroup as PrimRadioGroup } from '@headlessui/react'
import { Path, useController, useFormContext } from 'react-hook-form'
import classNames from 'classnames'

interface RadioGroupProps {
  children: React.ReactNode
  onChange: (value: string) => void
  onBlur: () => void
  value: string
  name?: string
}

interface HFRadioGroupProps<T> {
  children: React.ReactNode
  name: Path<T>
}

const RadioGroup = React.forwardRef((props: RadioGroupProps) => {
  return <PrimRadioGroup {...props} />
})

RadioGroup.displayName = 'RadioGroup'

function HFRadioGroup<T = any>(props: HFRadioGroupProps<T>) {
  const { control } = useFormContext()

  const {
    field: { name, onBlur, onChange, ref, value },
  } = useController({
    control,
    name: props.name,
  })

  return (
    <RadioGroup
      name={name as string}
      onChange={onChange}
      onBlur={onBlur}
      ref={ref}
      value={value}
    >
      {props.children}
    </RadioGroup>
  )
}

function RadioGroupOption({
  label = null,
  ...props
}: {
  value: any
  label?: React.ReactElement
}) {
  return (
    <PrimRadioGroup.Option {...props}>
      {({ checked }) => (
        <div
          className={classNames(
            'ring-accent ring-2 ring-offset-2 m-2 w-3 h-3 rounded-full',
            checked && 'bg-accent',
          )}
        >
          {label}
        </div>
      )}
    </PrimRadioGroup.Option>
  )
}

export default RadioGroup
export {
  HFRadioGroup,
  RadioGroupOption,
  RadioGroupOption as HFRadioGroupOption,
}
