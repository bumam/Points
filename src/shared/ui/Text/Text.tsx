import { classNames } from "shared/lib/classNames/classNames";
import s from "./Text.module.scss";
import { FC } from "react";

export interface TextProps {
  className?: string;
  text: string;
}

export const Text: FC<TextProps> = ({ className, text }) => {
  return <span className={classNames(s.Text)}>{text}</span>;
};
