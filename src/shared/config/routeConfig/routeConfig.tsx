import { RouteProps } from "react-router-dom";
import {AwardsPage} from "pages/AwardsPage";
import {PersonsPage} from "pages/PersonsPage";
import {MainPage} from "pages/MainPage";

export enum AppRoutes {
  MAIN = "main",
  PERSONS = "persons",
  AWARDS = "awards",
}

export const RoutePath: Record<AppRoutes, string> = {
  [AppRoutes.MAIN]: "/",
  [AppRoutes.PERSONS]: "/persons",
  [AppRoutes.AWARDS]: "/awards",
};

export const routeConfig: Record<AppRoutes, RouteProps> = {
  [AppRoutes.MAIN]: {
    path: RoutePath.main,
    element: <MainPage />,
  },
  [AppRoutes.AWARDS]: {
    path: RoutePath.awards,
    element: <AwardsPage />,
  },
  [AppRoutes.PERSONS]: {
    path: RoutePath.persons,
    element: <PersonsPage />,
  },
};
