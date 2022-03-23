import classNames from "classnames"
import React from "react"
import { LegacyRef } from "react"
import { Path, useFormContext } from "react-hook-form"

export interface TextAreaProps extends React.InputHTMLAttributes<HTMLTextAreaElement> {
  name?: string
  prefixIcon?: React.ReactNode
  invalid?: boolean
  invalidText?: string
}

const TextArea = React.forwardRef(
  (
    { className, prefixIcon, invalid, invalidText, ...rest }: TextAreaProps,
    ref: LegacyRef<HTMLTextAreaElement>
  ) => {
    return (
      <div className="w-full self-start">
        <div className="relative">
          {prefixIcon && (
            <div className="w-5 h-5 left-2  absolute  -translate-y-1/2 top-1/2 transform">
              {prefixIcon}
            </div>
          )}
          <textarea
            className={classNames(
              'rounded-md leading-relaxed w-full pr-2 border-2 py-1.5 font-medium text-sm transition-shadow focus:ring-4 focus:outline-none  ring-accent ring-opacity-25',
              prefixIcon ? 'pl-9' : 'pl-2',
              'read-only:bg-gray-100  read-only:focus:ring-0 read-only:focus:border-gray-200 read-only:cursor-not-allowed',
              invalid
                ? 'border-error focus:border-error ring-error'
                : 'focus:border-accent-lightest',
              className
            )}
            {...rest}
            ref={ref}
          />
        </div>
        {invalid && invalidText && (
          <div className="text-xs text-error mt-2">{invalidText}</div>
        )}
      </div>
    )
  }
)

TextArea.displayName = 'Input'

export interface HFTextArea<T> extends Omit<TextAreaProps, 'name'> {
  name: Path<T>
}

export function HFTextArea<T = any>({ name, ...rest }: HFTextArea<T>) {
  const {
    register,
    formState: { errors },
  } = useFormContext<T>()

  return (
    <TextArea
      {...register(name)}
      invalidText={errors[name as string]?.message}
      invalid={errors[name as string]}
      {...rest}
    />
  )
}

export default TextArea
