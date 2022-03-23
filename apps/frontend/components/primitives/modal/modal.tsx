import { Transition, Dialog } from '@headlessui/react';
import { XIcon } from '@heroicons/react/outline';
import classNames from 'classnames';
import { Fragment } from 'react';
import { Size } from 'typings/utils-types';
import Button from '../button';

export interface ModalProps {
  isOpen: boolean;
  onClose: () => void;
  size?: Size
  title?: string;
  children?: React.ReactNode;
}

const SIZE_MAP: Record<Size, string> = {
  xs: 'w-48',
  sm: 'w-96',
  md: 'w-[30rem]',
  lg: 'w-[48rem]',
  xl: 'w-[64rem]',
}

export function Modal(props: ModalProps) {
  const size = props.size || 'md';

  return (
    <Transition appear show={props.isOpen} as={Fragment}>
      <Dialog
        as="div"
        className="fixed inset-0 z-10 transition-all overflow-y-auto"
        onClose={props.onClose}
      >
        <div className="min-h-screen px-4 text-center">
          <Transition.Child
            as={Fragment}
            enter="ease-out duration-300"
            enterFrom="opacity-0"
            enterTo="opacity-100"
            leave="ease-in duration-200"
            leaveFrom="opacity-100"
            leaveTo="opacity-0"
          >
            <Dialog.Overlay className="fixed inset-0 bg-black-dark bg-opacity-20" />
          </Transition.Child>

          {/* This element is to trick the browser into centering the modal contents. */}
          <span
            className="inline-block h-screen align-middle"
            aria-hidden="true"
          >
            &#8203;
          </span>
          <Transition.Child
            as={Fragment}
            enter="ease-out duration-300"
            enterFrom="opacity-0 scale-95"
            enterTo="opacity-100 scale-100"
            leave="ease-in duration-200"
            leaveFrom="opacity-100 scale-100"
            leaveTo="opacity-0 scale-95"
          >
            <div className={classNames("inline-block max-w-5xl p-6 my-8 text-left align-middle transition-all transform bg-white shadow-xl rounded-lg", SIZE_MAP[size])}>
              <div className="flex justify-between sticky">
                <Dialog.Title as="h3" className="text-xl font-bold leading-6">
                  {props.title}
                </Dialog.Title>

                <Button className="rounded-full px-1.5" size="sm" variant="secondary" onClick={() => props.onClose()} icon={<XIcon />}></Button>
              </div>
              {props.children}
            </div>
          </Transition.Child>
        </div>
      </Dialog>
    </Transition>
  );
}

export default Modal;
