/* Figure this one out */

const ProductGalleryItem = ({
    productName,
    className,
    photoMobile,
    photoTablet,
    photoDesktop,
    photoMobileWidth,
    photoTabletWidth,
    photoDesktopWidth,

}) => {
    return (
        <>
            <div className={className}>
                <img srcSet={`${photoMobile} ${photoMobileWidth},
                        ${photoTablet} ${photoTabletWidth},
                        ${photoDesktop} ${photoDesktopWidth}`}
                    src={photoDesktop} alt={productName} />
            </div>
        </>
    );
}
export default ProductGalleryItem;