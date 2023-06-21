import { MouseEventHandler } from "react";

export interface CustomButtonProps {
    type: 'button'| 'submit' | 'reset' 
    title: string;
    containerStyles?: string;
    handleClick?: MouseEventHandler<HTMLButtonElement>;
}