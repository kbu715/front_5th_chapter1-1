import { ErrorPage } from "../pages/ErrorPage";
import { LoginPage } from "../pages/LoginPage";
import { MainPage } from "../pages/MainPage";
import { ProfilePage } from "../pages/ProfilePage";

export const ROUTES_MAP = {
  HOME: "/",
  LOGIN: "/login",
  PROFILE: "/profile",
  NOT_FOUND: "*",
};

export const ROUTES = [
  {
    path: ROUTES_MAP.HOME,
    component: MainPage,
    authRequired: false,
  },
  {
    path: ROUTES_MAP.PROFILE,
    component: ProfilePage,
    authRequired: true,
  },
  {
    path: ROUTES_MAP.LOGIN,
    component: LoginPage,
    authRequired: false,
  },
  {
    path: ROUTES_MAP.NOT_FOUND,
    component: ErrorPage,
    authRequired: false,
  },
];
