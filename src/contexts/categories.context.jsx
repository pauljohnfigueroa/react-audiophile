/*
Replaced with Redux
*/

// import { createContext, useEffect, useState } from "react";
// import { getCollectionsAndDocuments } from "../utils/firebase/firebase.utils";

// // Use this to upload data to firebase firestore
// // import PRODUCTS from "../data/products.data";

// export const CategoriesContext = createContext({
//     categoriesMap: {} // works even if I remove this, why??
// });

// export const CategoriesProvider = ({ children }) => {

//     // Use this to upload data to firebase firestore
//     // useEffect(() => {
//     //     addCollectionAndDocuments('categories', PRODUCTS);
//     // }, []);

//     // using local "../data/products.data"
//     // const categoryMap = PRODUCTS.reduce((acc, categ) => {
//     //     const { category, items } = categ;
//     //     acc[category.toLowerCase()] = items;
//     //     return acc;
//     // }, {});

//     const [categoriesMap, setCategoriesMap] = useState({});

//     useEffect(() => {
//         const getCategoriesMap = async () => {
//             const categoryMap = await getCollectionsAndDocuments();
//             setCategoriesMap(categoryMap);
//             console.log('categoryMap', categoryMap);
//         };
//         getCategoriesMap();
//     }, []);

//     const value = { categoriesMap }

//     return <CategoriesContext.Provider value={value}>{children}</CategoriesContext.Provider>
// };