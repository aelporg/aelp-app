import { Transition, Dialog } from '@headlessui/react';
import { Fragment } from 'react';
import Button from '../button';

export interface ModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export function Modal(props: ModalProps) {
  return (
    <Transition
      appear
      show={props.isOpen}
      as={Fragment}
      // enter="transition duration-300 bg-black"
      // enterFrom="bg-opacity-0"
      // enterTo="bg-opacity-75"
      // leave="transition duration-300 bg-black"
      // leaveFrom="bg-opacity-75"
      // leaveTo="bg-opacity-0"
    >
      <Dialog
        as="div"
        className="fixed inset-0 z-10 bg-black-dark bg-opacity-80 transition-all overflow-y-auto"
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
            <Dialog.Overlay className="fixed inset-0" />
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
            <div className="inline-block w-full max-w-md p-6 my-8 overflow-hidden text-left align-middle transition-all transform bg-white shadow-xl rounded-lg">
              <Dialog.Title as="h3" className="text-lg font-bold leading-6">
                Payment successful
              </Dialog.Title>
              <div className="mt-2">
                <p className="text-md text-gray-600">
                  Your payment has been successfully submitted. We’ve sent you
                  an email with all of the details of your order.
                </p>
              </div>

              <div className="mt-4">
                <Button size="sm">Hi</Button>
              </div>
            </div>
          </Transition.Child>
        </div>
      </Dialog>
    </Transition>
  );
}

export default Modal;
