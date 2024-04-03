import React from "react";
import s from "./MainPage.module.scss";
import { MainCard } from "wigets/MainCard";

const MainPage = () => {
  return (
    <div className={s.MainPage}>
      <MainCard className={s.MainPage__card} />
      <MainCard className={s.MainPage__card} />
    </div>
  );
};

export default MainPage;
