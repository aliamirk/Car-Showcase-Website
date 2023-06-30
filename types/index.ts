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

export interface CarProps {
    city_mpg: number;
    class: string;
    combination_mpg: number;
    cylinders: number;
    displacement: number;
    drive: string;
    fuel_type: string;
    highway_mpg: number;
    make: string;
    model: string;
    transmission: string;
    year: number;

}