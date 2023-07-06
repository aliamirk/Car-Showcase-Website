import { Fragment } from "react";
import { Transition } from "@headlessui/react";

const Backdrop = () => {
  return (
    <Transition.Child
      as={Fragment}
      enter="ease-out duration-300"
      enterFrom="opacity-0"
      enterTo="opacity-100"
      leave="ease-in duration-200"
      leaveFrom="opacity-100"
      leaveTo="opacity-0"
    >
      <div className="fixed inset-0 bg-black bg-opacity-50" />
    </Transition.Child>
  );
};

export default Backdrop;