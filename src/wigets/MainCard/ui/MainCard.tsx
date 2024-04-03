import { classNames } from "shared/lib/classNames/classNames";
import s from "./MainCard.module.scss";
import { FC } from "react";

export interface MainCardProps {
  className?: string;
}

export const MainCard: FC<MainCardProps> = ({ className }) => {
  return <div className={classNames(s.MainCard, {}, [className])}>card</div>;
};
