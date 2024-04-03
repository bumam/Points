import { classNames } from "shared/lib/classNames/classNames";
import s from "./Header.module.scss";
import { FC } from "react";

export interface HeaderProps {
  className?: string;
}

export const Header: FC<HeaderProps> = () => {
  return (
    <div className={classNames(s.Header)}>
      header
      <hr className={s.Header__hr} />
    </div>
  );
};
