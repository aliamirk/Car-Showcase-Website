"use client";

import { CarProps } from "../../types";
import { useState } from "react";
import Image from "next/image";
import CustomButton from "../UI/CustomButton";
import { calculateCarRent } from "../../library";
import CarDetailsModal from "../Modal/CarDetailsModal";

interface CarCardProps {
  car: CarProps;
}

export default function CarCard(props: CarCardProps) {

  const [isOpen, setIsOpen] = useState(false)

  const { city_mpg, year, make, model, transmission, drive } = props.car;

  const carRent = calculateCarRent(city_mpg, year);

  // Open and closes modal
  const OpenModalHandler = () => {
    setIsOpen(true)
  };

  const CloseModalHandler = () => {
    setIsOpen(false)
  };



  return (
    <div className="car-card group">
      <div className="car-card__content">
        {/* Displaying Name of car */}
        <h2 className="car-card__content-title">
          {make} {model}
        </h2>
      </div>

      {/* Displaying Price */}

      <p className="flex mt-16 text-[32px] font-extrabold">
        <span className="self-start text-[14px] font-semibold ">$</span>
        {carRent}
        <span className="self-end text-[14px] font-medium ">/day</span>
      </p>

      {/* Image */}

      <div className="relative w-full h-40 my-3 object-contain ">
        <Image
          src="/hero.png"
          alt="Car Model"
          fill
          priority
          className="object-contain"
        />
      </div>

      {/* Car Info */}

      <div className="relative felx w-full mt-2">
        <div className="flex group-hover:invisible w-full justify-between text-gray ">
          {/* Logos  */}

          <div className="flex flex-col justify-center items-center gap-2 ">
            <Image
              src="/steering-wheel.svg"
              width={20}
              height={20}
              alt="Steering Wheel"
            />
            <p className="text-[14px] ">
              {transmission === "a" ? "Automatic" : "Manual"}
            </p>
          </div>

          <div className="flex flex-col justify-center items-center gap-2 ">
            <Image src="/tire.svg" width={20} height={20} alt=" Wheel" />
            <p className="text-[14px] ">{drive.toUpperCase()}</p>
          </div>

          <div className="flex flex-col justify-center items-center gap-2 ">
            <Image src="/gas.svg" width={20} height={20} alt="gas" />
            <p className="text-[14px] ">{city_mpg} MPG</p>
          </div>
        </div>

        {/* Button */}

        <div className="car-card__btn-container">
          <CustomButton
            title="View More"
            containerStyles="w-full py-[16px] rounded-full bg-primary-blue"
            type="button"
            textStyles="text-white text-[14px] leading-[17px] font-bold "
            rightIcon="/right-arrow.svg"
            handleClick={OpenModalHandler}

          />
        </div>
      </div>

      {/* Modal */}
            
      <CarDetailsModal
        isOpen={isOpen} //  State
        closeModal={CloseModalHandler}
        car={props.car} // Forwarding car info to modal
      />

    </div>
  );
}
