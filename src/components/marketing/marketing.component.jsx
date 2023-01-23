import mobileImage from '../../assets/images/shared/mobile/image-best-gear.jpg';
import tabletImage from '../../assets/images/shared/tablet/image-best-gear.jpg';
import desktopImage from '../../assets/images/shared/desktop/image-best-gear.jpg';

const Marketing = () => {
    return (
        <>
            <section className="marketing-section">
                <div className="header-image">
                    <img srcSet={`${mobileImage} 654w,
                    ${tabletImage} 1034w,
                    ${desktopImage} 1080w`}

                        src={desktopImage} alt="A man listening to music" />
                </div>
                <div className="marketing-section-texts">
                    <h2 className="marketing-section-heading">Bringing you the <span className="emphasized">best</span> audio gear</h2>
                    <p className="marketing-section-subtexts">Located at the heart of New York City, Audiophile is the premier store for
                        high end headphones, earphones,
                        speakers, and audio accessories. We have a large showroom and luxury demonstration rooms available for you to
                        browse and experience a wide range of our products. Stop by our store to meet some of the fantastic people who
                        make Audiophile the best place to buy your portable audio equipment.</p>
                </div>
            </section>
        </>
    );
}
export default Marketing;