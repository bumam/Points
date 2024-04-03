import React from "react";
import s from "./MainPage.module.scss";
import { MainCard, MainCardData } from "wigets/MainCard";

const MainPage = () => {
  return (
    <div className={s.MainPage}>
      {MainCardData.map((item) => {
        return <MainCard className={s.MainPage__card} data={item} />;
      })}
    </div>
  );
};

export default MainPage;
