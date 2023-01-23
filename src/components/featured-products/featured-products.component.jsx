import mobileImageUrl1 from '../../assets/images/home/mobile/image-speaker-zx9.png';
import tabletImageUrl1 from '../../assets/images/home/tablet/image-speaker-zx9.png';
import desktopImageUrl1 from '../../assets/images/home/desktop/image-speaker-zx9.png';

import mobileImageUrl2 from '../../assets/images/home/mobile/image-speaker-zx7.jpg';
import tabletImageUrl2 from '../../assets/images/home/tablet/image-speaker-zx7.jpg';
import desktopImageUrl2 from '../../assets/images/home/desktop/image-speaker-zx7.jpg';

import mobileImageUrl3 from '../../assets/images/home/mobile/image-earphones-yx1.jpg';
import tabletImageUrl3 from '../../assets/images/home/tablet/image-earphones-yx1.jpg';
import desktopImageUrl3 from '../../assets/images/home/desktop/image-earphones-yx1.jpg';

const FeaturedProducts = () => {

    const featuredProducts = [
        {
            id: 1,
            containerCss: 'featured-product-1',
            mobileImageUrl: mobileImageUrl1,
            mobileImageUrlWidth: '320w',
            tabletImageUrl: tabletImageUrl1,
            tabletImageUrlWidth: '366w',
            desktopImageUrl: desktopImageUrl1,
            desktopImageUrlWidth: '756w',
            heading: 'ZX9 SPEAKER',
            subText: 'Upgrade to premium speakers that are phenomenally built to deliver truly remarkable sound.',
            altText: 'Audio speaker model ZX9',
        },
        {
            id: 2,
            containerCss: 'featured-product-2',
            mobileImageUrl: mobileImageUrl2,
            mobileImageUrlWidth: '654w',
            tabletImageUrl: tabletImageUrl2,
            tabletImageUrlWidth: '1034w',
            desktopImageUrl: desktopImageUrl2,
            desktopImageUrlWidth: '1110w',
            heading: 'ZX7 SPEAKER',
            subText: '',
            altText: 'Audio speaker model ZX9',
        },
        {
            id: 3,
            containerCss: 'featured-product-3',
            mobileImageUrl: mobileImageUrl3,
            mobileImageUrlWidth: '654w',
            tabletImageUrl: tabletImageUrl3,
            tabletImageUrlWidth: '1017w',
            desktopImageUrl: desktopImageUrl3,
            desktopImageUrlWidth: '1620w',
            heading: 'YX1 EARPHONES',
            subText: '',
            altText: 'Earphones YX1',
        },

    ];

    return (
        <>
            <section className="featured-products-section">
                <div className="featured-product-1">
                    <div className="bg-image" />
                    <div className="featured-product-image">
                        <img srcSet={`${featuredProducts[0].mobileImageUrl} ${featuredProducts[0].mobileImageUrlWidth},
                            ${featuredProducts[0].tabletImageUrl} ${featuredProducts[0].tabletImageUrlWidth}, 
                            ${featuredProducts[0].desktopImageUrl} ${featuredProducts[0].desktopImageUrlWidth}`}
                            src={featuredProducts[0].desktopImageUrl} alt={featuredProducts[0].altText} />
                    </div>
                    <div className="featured-product-texts">
                        <h2 className="featured-product-heading">{featuredProducts[0].heading}</h2>
                        <p className="featured-product-subtext">{featuredProducts[0].subText}</p>
                        <div className="featured-product-button"><a href="shop/speakers/11">See Product</a></div>
                    </div>
                </div>

                <div className="featured-product-2">
                    <div className="bg-image">
                        <img srcSet={`${featuredProducts[1].mobileImageUrl} ${featuredProducts[1].mobileImageUrlWidth},
                            ${featuredProducts[1].tabletImageUrl} ${featuredProducts[1].tabletImageUrlWidth}, 
                            ${featuredProducts[1].desktopImageUrl} ${featuredProducts[1].desktopImageUrlWidth}`}
                            src={featuredProducts[1].desktopImageUrl} alt={featuredProducts[1].altText} />
                    </div>
                    <div className="featured-product-texts">
                        <h2 className="featured-product-heading">{featuredProducts[1].heading}</h2>
                        <div className="featured-product-button"><a href="shop/speakers/12">See Product</a></div>
                    </div>
                </div>

                <div className="featured-product-3">
                    <div className="bg-image">
                        <img srcSet={`${featuredProducts[2].mobileImageUrl} ${featuredProducts[2].mobileImageUrlWidth},
                            ${featuredProducts[2].tabletImageUrl} ${featuredProducts[2].tabletImageUrlWidth}, 
                            ${featuredProducts[2].desktopImageUrl} ${featuredProducts[2].desktopImageUrlWidth}`}
                            src={featuredProducts[2].desktopImageUrl} alt={featuredProducts[2].altText} />
                    </div>
                    <div className="featured-product-texts-container">
                        <div className="featured-product-texts">
                            <h2 className="featured-product-heading">{featuredProducts[2].heading}</h2>
                            <div className="featured-product-button"><a href="shop/earphones/21">See Product</a></div>
                        </div>
                    </div>
                </div>
            </section>
        </>
    );
}

export default FeaturedProducts;