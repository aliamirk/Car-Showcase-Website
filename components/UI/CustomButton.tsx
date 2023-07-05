"use client";

import Image from "next/image";
import { CustomButtonProps } from "../../types";

export default function CustomButton(props: CustomButtonProps) {

  return (

    <button
      disabled={false}
      type={props.type}
      className={`custom-btn ${props.containerStyles}`}
      onClick={props.handleClick}
    >

      <span className={`flex-1 ${props.textStyles} `}>{props.title}</span>
      {props.rightIcon && (
        <div className="relative w-6 h-6">
          <Image 
            src={props.rightIcon}
            alt="right icon"
            fill
            className="object-contain"
          />
        </div>
      )}
    </button>
  );
}
