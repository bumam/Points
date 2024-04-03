export const MainCardData: IMainCard[] = [
  {
    title: "Title 1",
    text: "Title 1",
    link: "/persons",
    img: "",
    background: "linear-gradient(141.58deg, #253D4B 0%, #0F1D26 101.56%)",
  },
  {
    title: "Title 2",
    text: "Title 2",
    link: "/awards",
    img: "",
    background: "linear-gradient(141.58deg, #3E515C 0%, #111921 101.56%)",
  },
];

export interface IMainCard {
  title: string;
  text: string;
  link: string;
  background: string;
  img: string;
}
