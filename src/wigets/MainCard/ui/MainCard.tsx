import { classNames } from "shared/lib/classNames/classNames";
import s from "./MainCard.module.scss";
import React, { FC } from "react";
import { Text, Title } from "shared/ui";
import { IMainCard } from "wigets/MainCard/config/mock";
import { Link } from "react-router-dom";

export interface MainCardProps {
  className?: string;
  data: IMainCard;
}

export const MainCard: FC<MainCardProps> = ({ className, data }) => {
  const { background, title, text, link } = data;

  const handleOnClick = () => {};
  return (
    <section
      className={classNames(s.MainCard, {}, [className])}
      style={{ background }}
    >
      <div className={s.MainCard__img}>img</div>
      <div className={s.MainCard__bottomBlock}>
        <div className={s.MainCard__info}>
          <Title type={"main"} title={title} />
          <Text text={text} />
        </div>
        <Link className={s.MainCard__link} to={link}>
          button
        </Link>
      </div>
    </section>
  );
};
