import { useNavigate } from "react-router-dom";

const ProductCategoryListing = ({ category, products }) => {

    const navigate = useNavigate();

    const seeProductClickHandler = (productId) => {
        navigate(`/shop/${category}/${productId}`);
    }

    // check for odd/even rows
    let orientation = 1;

    return (
        <>
            <section className="product-section">
                {products.map(product => {

                    let reversedCss = 'product-card-reversed';
                    let isNewProduct = <p className="sub-heading">NEW PRODUCT</p>; // remember, we are working in JSX here and not HTML

                    // Even numbered row, not displayed in reversed direction
                    // The product id might not be always a series of numbers.
                    // using a counter (orientation) will ensure that we have a continuous series of numbers
                    // for determining if we should display the product in normal or reversed.
                    if (orientation % 2) {
                        reversedCss = '';
                    }
                    orientation++;

                    // do not display the NEW PRODUCT label
                    if (!product.isNewProduct) {
                        isNewProduct = '';
                    }

                    return (<div key={product.id} className={`product-card ${reversedCss}`}>
                        <div className="product-card-header">
                            <img srcSet={`${product.imgUrlMobile} ${product.imgUrlMobileWidth},
                            ${product.imgUrlDesktop} ${product.imgUrlDesktopWidth}`}
                                src={product.imgUrlDesktop} alt={product.name} />
                        </div>
                        <div className="product-card-description-container">
                            <div className="product-card-description">
                                {isNewProduct}
                                <h2 className="heading">{product.name}</h2>
                                <p className="sub-text">{product.description}</p>
                                <button type="button" className="button" onClick={() => seeProductClickHandler(product.id)}>See Product</button>
                            </div>
                        </div>
                    </div >)

                })

                }
            </section >
        </>
    );

}

export default ProductCategoryListing;