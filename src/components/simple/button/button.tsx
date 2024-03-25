import React, { FC } from "react";
import s from "./button.module.scss";

type ButtonProps = {
  onClick: React.MouseEventHandler<HTMLButtonElement>;
};

export const Button: FC<ButtonProps> = ({ onClick }) => {
  return (
    <button className={s.btn} onClick={onClick}>
      Show / Hide
    </button>
  );
};
