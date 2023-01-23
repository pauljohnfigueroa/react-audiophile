import { Routes, Route } from "react-router-dom";

import CategoryPage from "../category-page/category-page.component";
import ProductDetailPage from "../../components/product-detail-page/product-detail-page.component";

const ShopCategory = () => {

    return (
        <Routes>
            {/* <Route index element={<ShopPage />} /> */}
            <Route path=":category" element={<CategoryPage />} />
            <Route path=":category/:productId" element={<ProductDetailPage />} />
        </Routes>
    );
}
export default ShopCategory;