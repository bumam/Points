import React, { FC } from "react";
import { CoordsType } from "../../../types";
import s from "./image-block.module.scss";

type ImageBlockProps = {
  coords: CoordsType[];
};

export const ImageBlock: FC<ImageBlockProps> = ({ coords }) => {
  return (
    <div className={s.imageBlock}>
      <img
        src="https://images.unsplash.com/photo-1707343843598-39755549ac9a?q=80&w=1632&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDF8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
        alt="random image"
        className={s.imageBlock__img}
      />
      {coords.map((coord) => (
        <div
          className={s.imageBlock__dot}
          key={coord.coords.x + "," + coord.coords.y}
          style={{
            left: coord.coords.x + "px",
            top: coord.coords.y + "px",
            backgroundColor: coord.color,
            display: coord.isShown ? "block" : "none",
          }}
        ></div>
      ))}
    </div>
  );
};
