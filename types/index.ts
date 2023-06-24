import { Dispatch, MouseEventHandler, SetStateAction } from "react";

export interface CustomButtonProps {
    type: 'button' | 'submit' | 'reset'
    title: string;
    containerStyles?: string;
    handleClick?: MouseEventHandler<HTMLButtonElement>;
}

export interface SearchManufacturerProps {
    manufacturer: string
    setManufacturer: Dispatch<SetStateAction<string>>
}

export interface CustomFilterProps {
    title: string
}