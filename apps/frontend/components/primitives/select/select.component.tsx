import { Listbox, Transition } from '@headlessui/react'
import { CheckIcon, SelectorIcon } from '@heroicons/react/outline'
import classNames from 'classnames'
import React, { Fragment } from 'react'

interface SelectProps<T> {
  children?: React.ReactNode
  className?: string
  value: T
  options: Option[]
  onChange: (v: T) => void
}

interface Option<T = any> {
  value: T
  label: string
}

function Select<T = any>({ options, className, ...props }: SelectProps<T>) {
  return (
    <Listbox {...props}>
      <div className={classNames('relative', className)}>
        <SelectButton>
          {options.find(option => option.value === props.value)?.label ||
            'Select'}
        </SelectButton>
        <SelectOptions>
          {options.map(option => (
            <SelectOption key={option.value} value={option.value}>
              {option.label}
            </SelectOption>
          ))}
        </SelectOptions>
      </div>
    </Listbox>
  )
}

function SelectOptions({ children }: { children: React.ReactNode }) {
  return (
    <Transition
      as={Fragment}
      leave="transition ease-in duration-100"
      leaveFrom="opacity-100"
      leaveTo="opacity-0"
    >
      <Listbox.Options className="absolute w-full py-1 mt-1 overflow-auto text-base bg-white rounded-md shadow-md max-h-60 focus:ring-1 ring-accent ring-opacity-5  focus:outline-none z-50 sm:text-sm">
        {children}
      </Listbox.Options>
    </Transition>
  )
}

interface SelectOptionProps<T> {
  value: T
  children: React.ReactNode
}

function SelectOption<T = any>(props: SelectOptionProps<T>) {
  return (
    <Listbox.Option
      className={({ active }) =>
        `cursor-default select-none relative py-2 pl-10 pr-4 ${
          active ? 'text-accent bg-accent bg-opacity-10' : 'text-gray-900'
        }`
      }
      value={props.value}
    >
      {({ selected }) => (
        <>
          <span
            className={`block truncate ${
              selected ? 'font-bold' : 'font-medium'
            }`}
          >
            {props.children}
          </span>
          {selected ? (
            <span className="absolute inset-y-0 left-0 flex items-center pl-3 text-accent">
              <CheckIcon className="w-5 h-5" aria-hidden="true" />
            </span>
          ) : null}
        </>
      )}
    </Listbox.Option>
  )
}

function SelectButton({ children }: { children: React.ReactNode }) {
  return (
    <Listbox.Button className="relative w-full py-2 pl-3 pr-10 text-left bg-white rounded-lg border cursor-default focus:outline-none focus-visible:ring-2 focus-visible:ring-opacity-75 focus-visible:ring-white focus-visible:ring-offset-orange-300 focus-visible:ring-offset-2 focus-visible:border-indigo-500 sm:text-sm">
      <span className="block truncate font-medium text-slate-700">{children}</span>
      <span className="absolute inset-y-0 right-0 flex items-center pr-2 pointer-events-none">
        <SelectorIcon className="w-5 h-5 text-gray-400" aria-hidden="true" />
      </span>
    </Listbox.Button>
  )
}

export default Select
