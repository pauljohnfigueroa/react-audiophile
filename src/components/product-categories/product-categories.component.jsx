/* Product category cards */
import { Link } from 'react-router-dom';
import prodCategories from '../../data/prod-categories.data';

const ProductCategories = () => {

    return (
        <>
            <section className="categories-section">
                <div className="categories-card-container">
                    {prodCategories.map(prodCategory => (
                        <div key={prodCategory.id} className="category-card">
                            <div className="image-container ">
                                <img src={prodCategory.imgUrl} alt={prodCategory.altText} />
                            </div>
                            <h2 className="category-heading">{prodCategory.heading}</h2>
                            <div className="category-link"><Link to={prodCategory.url}><span>Shop &gt; </span></Link></div>
                        </div>
                    ))}
                </div>
            </section>
        </>
    );
}

export default ProductCategories;