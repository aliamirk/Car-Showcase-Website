import { CarProps } from "../../types";
import Image from "next/image";
import { Fragment } from "react";
import { Dialog, Transition } from "@headlessui/react";
import CarInfo from "./CarInfo";
import Backdrop from "./Backdrop";

interface CarDetailsModalProps {
  isOpen: boolean;
  closeModal: () => void;
  car: CarProps;
}

const CarDetailsModal = (props: CarDetailsModalProps) => {
  return (
    <Fragment>
      <Transition appear show={props.isOpen} as={Fragment}>
        <Dialog as="div" className="relative z-10" onClose={props.closeModal}>
            
          {/* Backdrop */}
          <Backdrop />

          {/* Info Modal*/}
          <CarInfo closeModal={props.closeModal} car={props.car} />
          
        </Dialog>
      </Transition>
    </Fragment>
  );
};

export default CarDetailsModal;
