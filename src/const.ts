import { ButtonTextBlockType } from "./types";

export enum COLORS_ENUM {
  YELLOW = "yellow",
  RED = "red",
  BLUE = "blue",
}

export const BUTTON_TEXT_BLOCKS: ButtonTextBlockType[] = [
  {
    text: "blue point",
    isShown: false,
    coords: { x: "30", y: "77" },
    id: 1,
    color: COLORS_ENUM.BLUE,
  },
  {
    text: "red point",
    isShown: false,
    coords: { x: "320", y: "236" },
    id: 2,
    color: COLORS_ENUM.RED,
  },
  {
    text: "yellow point",
    isShown: false,
    coords: { x: "234", y: "27" },
    id: 3,
    color: COLORS_ENUM.YELLOW,
  },
];
