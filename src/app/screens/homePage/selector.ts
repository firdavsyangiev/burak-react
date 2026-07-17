import { createSelector } from "reselect";
import { AppRootState } from "../../../lib/types/screen";

const selectHomePage = (state: AppRootState) => state.homePage;

export const retreivePopularDishes = createSelector(
  selectHomePage,
  (HomePage) => HomePage.popularDishes,
);

export const retreiveNewDishes = createSelector(
  selectHomePage,
  (HomePage) => HomePage.newDishes,
);

export const retreiveTopUsers = createSelector(
  selectHomePage,
  (HomePage) => HomePage.topUsers,
);
