import React, { FC } from "react";
import s from "./Button.module.scss";

type ButtonProps = {
  onClick: React.MouseEventHandler<HTMLButtonElement>;
  text: string;
  type?: any;
};

export const Button: FC<ButtonProps> = ({ onClick, text, type }) => {
  return (
    <button className={s.Button} onClick={onClick}>
      {text}
    </button>
  );
};
