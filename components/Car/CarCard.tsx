import { CarProps } from "../../types";
import { useState } from "react";
import Image from "next/image";
import CustomButton from "../UI/CustomButton";
import { calculateCarRent } from "../../library";

interface CarCardProps {
  car: CarProps;
}

export default function CarCard({ car }: CarCardProps) {
  const { city_mpg, year, make, model, transmission, drive } = car;

  const carRent = calculateCarRent(city_mpg, year);

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
    </div>
  );
}
