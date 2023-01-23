import { createSelector } from "reselect";

const selectCategoryReducer = state => state.categories;

// Memoized
export const selectCategories = createSelector(
    [selectCategoryReducer],
    (categoriesSlice) => categoriesSlice.categories
);

// Memoized, this will run whenever categories change
export const selectCategoriesMap = createSelector(
    [selectCategories],
    (categories) => categories.reduce((acc, categ) => {
        const { category, items } = categ;
        acc[category.toLowerCase()] = items;
        return acc;
    }, {})
);

// export const setCategories = state => state.categories.categories
//     .reduce((acc, categ) => {
//         const { category, items } = categ;
//         acc[category.toLowerCase()] = items;
//         return acc;
//     }, {});
