import { Transition, Dialog } from "@headlessui/react";
import { Fragment } from "react";
import Image from "next/image";
import { CarProps } from "../../types";

interface CarInfoProps {
  closeModal: () => void;
  car: CarProps
}

const CarInfo = (props: CarInfoProps) => {
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
          <Dialog.Panel className=" relative w-full max-w-lg max-h-[90vh] overflow-y-auto transform rounded-2xl bg-white text-left shadow-xsl transition-all flex flex-col gap-5 ">

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

            {/* Content */}
            <div className="flex flex-1 flex-col gap-3 ">

              <div className="relative w-full h-40 bg-pattern bg-cover bg-center rounded-lg ">
                <Image
                  src="/hero.png"
                  alt="Car Model"
                  fill
                  priority
                  className="object-contain"
                />
              </div>
              {/* Smaller Images */}
              <div className="flex gap-3">
                <div className="flex-1 relative w-full h-24 bg-primary-blue-100 rounded-lg ">
                  <Image
                    src="/hero.png"
                    alt="Car Model"
                    fill
                    priority
                    className="object-contain"
                  />
                </div>
                <div className="flex-1 relative w-full h-24 bg-primary-blue-100 rounded-lg ">
                  <Image
                    src="/hero.png"
                    alt="Car Model"
                    fill
                    priority
                    className="object-contain"
                  />
                </div>
                <div className="flex-1 relative w-full h-24 bg-primary-blue-100 rounded-lg ">
                  <Image
                    src="/hero.png"
                    alt="Car Model"
                    fill
                    priority
                    className="object-contain"
                  />
                </div>
              </div>
            </div>

            {/* Car Description */}
            <div className="flex-1 flex flex-col gap-2">
              {/* Heading */}
              <h2 className="font-semibold capitalize text-xl ">
                {props.car.make} {props.car.model}
              </h2>
              {/* Description */}
              <div className=" mt-3 flex flex-wrap gap-4 ">
                {/* Extracting keys and values of the car object */}
                { Object.entries(car).map(([key,value]) => (
                  <div className="flex justify-between gap-5 ">

                  </div>
                ))}
              </div>

            </div>

          </Dialog.Panel>
        </Transition.Child>
      </div>
    </div>
  );
};

export default CarInfo;
