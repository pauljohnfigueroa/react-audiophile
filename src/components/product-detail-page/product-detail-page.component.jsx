import { useState } from "react";
import { useParams } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";

//import { CartContext } from "../../contexts/cart.context";
import { addItemToCart } from "../../store/cart/cart.action";

import { selectCategoriesMap } from "../../store/category/category.selector";
import { selectCartItems } from "../../store/cart/cart.selector";
/* These was replaced by the redux store. */
// import PRODUCTS from "../../data/products.data";

import ProductFeatures from "./product-features/product-features.component";
import ProductInTheBox from "./product-in-the-box/product-in-the-box.component";
import ProductGalleryItem from "./product-gallery-item/product-gallery-item.component";
import ProductSuggestionCard from "./product-suggestion-card/product-suggestion-card.component";

import ProductCategories from "../product-categories/product-categories.component";
import Marketing from "../marketing/marketing.component";
import Footer from "../footer/footer.component";

const INITIAL_CART_QUANTITY = 1;

const ProductDetailPage = () => {

    let [itemQuantity, setItemQuantity] = useState(INITIAL_CART_QUANTITY);

    const dispatch = useDispatch();

    const { category, productId } = useParams();
    // const { addItemToCart } = useContext(CartContext);

    const categoriesMap = useSelector(selectCategoriesMap);
    const cartItems = useSelector(selectCartItems);

    const items = categoriesMap[category];
    console.log('items', items);
    const p = items.filter(item => Number(item.id) === Number(productId));

    /* These was replaced by the redux store. */
    //console.log('categoriesMap', categoriesMap);
    // const prods = PRODUCTS.map(product => product);
    // console.log('prods', prods);
    // const categs = prods.map(categs => categs);
    // console.log('categs', categs);
    // const categ = categs.filter(item => item.category === category);
    // console.log('categ', categ);
    // console.log('PRODUCTS', PRODUCTS);
    // const categ = PRODUCTS.filter(item => item.category === category);
    // const items = categ.map(categ => categ.items);
    // console.log('categ', categ);
    //console.log('p => ', p[0].id);
    /* End of code replaced by the redux store. */

    const product = p[0];
    console.log('product', product);
    console.log('cartItems', cartItems);

    let isNewProduct = <p className="sub-heading">NEW PRODUCT</p>;
    if (!product.isNewProduct) {
        isNewProduct = '';
    }


    const increaseItemToCart = () => {
        console.log('increase');
        itemQuantity = itemQuantity + 1;
        setItemQuantity(itemQuantity);
    }


    const dereaseItemToCart = () => {
        console.log('decrease');
        if (itemQuantity > 1) {
            itemQuantity = itemQuantity - 1;
            setItemQuantity(itemQuantity);
        } else {
            itemQuantity = 1;
            setItemQuantity(itemQuantity);
        }
    }


    const resetQuantity = () => {
        setItemQuantity(INITIAL_CART_QUANTITY);
    }


    const addToCartClickHandler = (e) => {
        e.preventDefault();
        console.log('addToCartClickHandler');
        dispatch(addItemToCart(cartItems, product, itemQuantity));
        resetQuantity();
    }

    return (
        <>
            <section className="go-back-link">
                <a href="http://">Go Back</a>
            </section>

            <section className="product-section">
                <div className="product-card">

                    <div className="product-card-header">
                        <img
                            srcSet={`   
                                ${product.imgUrlMobile} ${product.imgUrlMobileWidth},
                                ${product.imgUrlDesktop} ${product.imgUrlDesktopWidth}
                            `}
                            src={product.imgUrlDesktop} alt={product.name}
                        />
                    </div>

                    <div className="product-card-description-container">

                        <div className="product-card-description">
                            {isNewProduct}
                            <h2 className="heading">{product.name}</h2>
                            <p className="sub-text">{product.description}</p>
                        </div>

                        <div className="product-form">
                            <p className="price">$ {product.price}</p>

                            <form onSubmit={addToCartClickHandler}>
                                <div className="quantity-nav">
                                    <div className="quantity-button quantity-down" onClick={dereaseItemToCart}>-</div>
                                </div>
                                <input name="quantity" type="number" min="1" value={itemQuantity} onChange={() => { }} className="quantity" />
                                <div className="quantity-nav">
                                    <div className="quantity-button quantity-up" onClick={increaseItemToCart}>+</div>
                                </div>

                                <button type="submit" className="form-button">Add to Cart</button>
                            </form>
                        </div>

                    </div>
                </div>
            </section>

            <section className="product-features-container">
                <div className="product-features">
                    <h2>Features</h2>
                    <ProductFeatures features={product.features} />
                </div>

                <div className="in-the-box">
                    <h2>In the box</h2>
                    <ul>
                        {product.inTheBox.map(item => (
                            <ProductInTheBox
                                key={item.id}
                                quantity={item.quantity}
                                description={item.description}
                            />
                        )
                        )}
                    </ul>
                </div>
            </section >

            <section className="gallery">
                <div className="vertical-group">
                    <ProductGalleryItem
                        productName={product.name}
                        className="gallery-card-vert"
                        photoMobile={product.galleryPhotos.photo1Mobile}
                        photoTablet={product.galleryPhotos.photo1Tablet}
                        photoDesktop={product.galleryPhotos.photo1Desktop}
                        photoMobileWidth={product.galleryPhotos.photo1MobileWidth}
                        photoTabletWidth={product.galleryPhotos.photo1TabletWidth}
                        photoDesktopWidth={product.galleryPhotos.photo1DesktopWidth}
                    />
                    <ProductGalleryItem
                        productName={product.name}
                        className="gallery-card-vert"
                        photoMobile={product.galleryPhotos.photo2Mobile}
                        photoTablet={product.galleryPhotos.photo2Tablet}
                        photoDesktop={product.galleryPhotos.photo2Desktop}
                        photoMobileWidth={product.galleryPhotos.photo2MobileWidth}
                        photoTabletWidth={product.galleryPhotos.photo2TabletWidth}
                        photoDesktopWidth={product.galleryPhotos.photo2DesktopWidth}
                    />
                </div>
                <div className="horizontal-group">
                    <ProductGalleryItem
                        productName={product.name}
                        className="gallery-card-hor"
                        photoMobile={product.galleryPhotos.photo3Mobile}
                        photoTablet={product.galleryPhotos.photo3Tablet}
                        photoDesktop={product.galleryPhotos.photo3Desktop}
                        photoMobileWidth={product.galleryPhotos.photo3MobileWidth}
                        photoTabletWidth={product.galleryPhotos.photo3TabletWidth}
                        photoDesktopWidth={product.galleryPhotos.photo3DesktopWidth}
                    />
                </div>
            </section>

            <section className="product-suggestions">
                <h2 className="heading">You may also like</h2>
                <div className="product-suggestions-cards">
                    {product.relatedProducts.map(item => (
                        <ProductSuggestionCard
                            key={item.id}
                            photoMobile={item.photoMobile}
                            photoMobileWidth={item.photoMobileWidth}
                            relatedProductName={item.relatedProductName}
                        />
                    ))}
                </div>
            </section>

            <ProductCategories />
            <Marketing />
            <Footer />
        </>
    );
}
export default ProductDetailPage;