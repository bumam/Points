import React, { FC } from "react";
import s from "./button.module.scss";

type ButtonProps = {
  onClick: React.MouseEventHandler<HTMLButtonElement>;
  text: string;
  type: any
};

export const Button: FC<ButtonProps> = ({ onClick, text, type }) => {
  return (
    <button className={s.btn} onClick={onClick}>
        {text}
    </button>
  );
};
