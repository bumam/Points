import { COLORS_ENUM } from "./const";

export type ButtonTextBlockType = CoordsType & TextType;

export type CoordsType = {
  isShown: boolean;
  coords: IXY;
  color: COLORS_ENUM;
  id: number;
};

export type TextType = {
  text: string;
};

export type IXY = {
  x: string;
  y: string;
};
