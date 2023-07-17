import { Transition, Dialog } from "@headlessui/react";
import { Fragment } from "react";
import Image from "next/image";
import { CarProps } from "../../types";

interface CarInfoProps {
  closeModal: () => void;
  car: CarProps;
}

const CarInfo = (props: CarInfoProps) => {

  {/* Extracting keys and values of the car object */}
  const CarDescription = Object.entries(props.car).map(([key, value]) => (
    <div className="flex justify-between gap-5 w-full text-right" key={key.split("_").join(" ")}>
      <h4 className="text-grey capitalize">{key}</h4>
      <p className="text-black-100 font-semibold">{value}</p>
    </div>
  ));

  return (

    <div className="fixed inset-0 overflow-y-auto ">
      <div className="flex min-h-full items-center justify-center p-4 text-center">
        <Transition.Child
          as={Fragment}
          enter="ease-out duration-300"
          enterFrom="opacity-0 scale-95"
          enterTo="opacity-100 scale-100"
          leave="ease-in duration-200"
          leaveFrom="opacity-100 scale-100"
          leaveTo="opacity-0 scale-95"
        >
          <Dialog.Panel className=" relative w-full max-w-lg max-h-[90vh] overflow-y-auto transform rounded-2xl p-6 bg-white text-left shadow-xl transition-all flex flex-col gap-5 ">
            <button // Cross Icon
              type="button"
              onClick={props.closeModal}
              className="absolute top-2 p-2 right-2 z-10 w-fit bg-primary-blue-100 rounded-full "
            >
              <Image
                src="/close.svg"
                alt="close"
                width={20}
                height={20}
                className="object-contain"
              />
            </button>

           

            {/* Car Description */}
            <div className="flex-1 flex flex-col gap-2">
              {/* Heading */}
              <h2 className="font-semibold capitalize text-xl">
                {props.car.make} {props.car.model}
              </h2>
              {/* Description */}
              <div className=" mt-3 flex flex-wrap gap-4 ">
                {/* Rendering Car Description */}
                {CarDescription}
              </div>
            </div>
          </Dialog.Panel>
        </Transition.Child>
      </div>
    </div>
  );
};

export default CarInfo;
