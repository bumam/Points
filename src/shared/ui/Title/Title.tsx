import { FC } from "react";
import s from "./Title.module.scss";
import { classNames } from "shared/lib/classNames/classNames";

export interface TitleProps {
  className?: string;
  type: "secondary" | "main" | "third";
  title: string;
}

export const Title: FC<TitleProps> = ({ className, type = "main", title }) => {
  switch (type) {
    case "main":
      return (
        <h1 className={classNames(s.Title, {}, [s.Title__main])}>{title}</h1>
      );
    case "secondary":
      return (
        <h2 className={classNames(s.Title, {}, [s.Title__secondary])}>
          {title}
        </h2>
      );
    case "third":
      return (
        <h3 className={classNames(s.Title, {}, [s.Title__third])}>{title}</h3>
      );
  }
};
