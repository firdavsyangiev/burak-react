import { createSelector } from "reselect";
import { AppRootState } from "../../../lib/types/screen";

const selectProductsPage = (state: AppRootState) => state.productsPage;

export const retreiveRestaurant = createSelector(
  selectProductsPage,
  (productsPage) => productsPage.restaurant,
);

export const retreiveChosenProduct = createSelector(
  selectProductsPage,
  (productsPage) => productsPage.chosenProduct,
);

export const retreiveProducts = createSelector(
  selectProductsPage,
  (productsPage) => productsPage.products,
);
