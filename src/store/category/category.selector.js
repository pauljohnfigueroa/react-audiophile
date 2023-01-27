import { createSelector } from "reselect";

const selectCategoryReducer = (state) => state['categories'];
console.log('typeof selectCategoryReducer', typeof selectCategoryReducer)

// Memoized
export const selectCategories = createSelector(
    [selectCategoryReducer],
    (categoriesSlice) => {
        console.log('typeof categoriesSlice', typeof categoriesSlice)
        console.log('categoriesSlice', categoriesSlice)

        return categoriesSlice.categories
    }
);

// Memoized, this will run whenever categories change
export const selectCategoriesMap = createSelector(
    [selectCategories],
    (categories) => {
        console.log('categories', categories)

        if (Array.isArray(categories)) {
            return categories.reduce((acc, categ) => {
                const { category, items } = categ;
                acc[category.toLowerCase()] = items;
                return acc;
            }, {})
        } else {
            throw new Error('Ooops. categories is not an array.');
        }
    }
);
