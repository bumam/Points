import React, { FC } from "react";
import { Button } from "../../simple/button/button";

import s from "./button-text-block.module.scss";
import { ButtonTextBlockType } from "../../../types";

type ButtonTextBlockProps = {
  item: ButtonTextBlockType;
  onClick: (item: ButtonTextBlockType) => void;
};

export const ButtonTextBlock: FC<ButtonTextBlockProps> = ({
  item,
  onClick,
}) => {
  const handleClick = () => {
    console.log("1");
    onClick(item);
  };

  return (
    <div className={s.buttonTextBlock}>
      <div className={s.buttonTextBlock__button}>
        <Button onClick={handleClick} />
      </div>
      <p className={s.buttonTextBlock__text}>{item.text}</p>
    </div>
  );
};
