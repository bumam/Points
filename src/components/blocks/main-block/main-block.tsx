import React, { Fragment, useEffect, useState } from "react";
import { ButtonTextBlockType, CoordsType } from "../../../types";
import { BUTTON_TEXT_BLOCKS } from "../../../const";
import { ImageBlock } from "../image-block/image-block";
import { ButtonTextBlock } from "../button-text-block/button-text-block";
import s from "./main-block.module.scss";

export const MainBlock = () => {
  const [coords, setCoords] = useState<CoordsType[]>([]);

  useEffect(() => {
    const initialCoords: CoordsType[] = BUTTON_TEXT_BLOCKS.map((item) => {
      const { id, isShown, coords, color } = item;
      return {
        id,
        isShown,
        coords,
        color,
      };
    });

    setCoords(initialCoords);
  }, []);

  const handlerOnCLick = (item: ButtonTextBlockType) => {
    const updatedCoords: CoordsType[] = coords.map((data) => {
      if (data.id === item.id) {
        data.isShown = !data.isShown;
      }
      return data;
    });
    setCoords(updatedCoords);
  };

  return (
    <div className={s.main}>
      <div className={s.main__imageBlock}>
        <ImageBlock coords={coords} />
      </div>

      <div className={s.main__buttonTextBlock}>
        {BUTTON_TEXT_BLOCKS.map((item) => {
          return (
            <Fragment key={item.id}>
              <ButtonTextBlock item={item} onClick={handlerOnCLick} />
            </Fragment>
          );
        })}
      </div>
    </div>
  );
};
