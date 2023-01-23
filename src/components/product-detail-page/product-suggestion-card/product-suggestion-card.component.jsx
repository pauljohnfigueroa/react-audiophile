const ProductSuggestionCard = ({ photoMobile, photoMobileWidth, relatedProductName }) => {

    return (
        <>
            <div className="suggestion-card">
                <div className="suggestion-card-header">
                    <div className="image-container">
                        <img srcSet={`${photoMobile} ${photoMobileWidth}`}
                            src={photoMobile} alt={relatedProductName} />
                    </div>
                </div>
                <h2 className="title">{relatedProductName}</h2>
                <div className="suggestion-link">
                    <a href="http://">See Product</a>
                </div>
            </div>
        </>
    );
}

export default ProductSuggestionCard;