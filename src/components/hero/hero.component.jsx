// import heroImageMobile from '../../assets/images/home/mobile/image-hero.jpg';
// import heroImageTablet from '../../assets/images/home/tablet/image-hero.jpg';
// import heroImageDesktop from '../../assets/images/home/desktop/image-hero.jpg';

const Hero = () => {
    return (
        <section className="hero">

            <img srcSet={`https://firebasestorage.googleapis.com/v0/b/audiophile-db.appspot.com/o/assets%2Fimages%2Fhome%2Fmobile%2Fimage-hero.jpg?alt=media&token=e1369173-333d-4294-ab45-c8868a63cb59 563w,

            https://firebasestorage.googleapis.com/v0/b/audiophile-db.appspot.com/o/assets%2Fimages%2Fhome%2Ftablet%2Fimage-hero.jpg?alt=media&token=f7672d09-06b3-435e-88d7-07644bcb9f28 1152w,

            https://firebasestorage.googleapis.com/v0/b/audiophile-db.appspot.com/o/assets%2Fimages%2Fhome%2Fdesktop%2Fimage-hero.jpg?alt=media&token=539c08c7-ba1d-4320-90f7-dfe25d7628a5 1440w`
            }
                src='https://firebasestorage.googleapis.com/v0/b/audiophile-db.appspot.com/o/assets%2Fimages%2Fhome%2Fdesktop%2Fimage-hero.jpg?alt=media&token=539c08c7-ba1d-4320-90f7-dfe25d7628a5'
                alt="Headphone"
            />

            <div className="hero-message">
                <div className="hero-message-container">
                    <p className="hero-sub-heading">New Product</p>
                    <h1 className="hero-heading">XX99 Mark II Headphones</h1>
                    <p className="hero-subtext">Experience natural, life-like audio and exceptional build quality made for the
                        passionate music enthusiast.</p>
                    <div className="hero-button">
                        <a href="shop/headphones/1">See Product</a>
                    </div>
                </div>
            </div>
        </section>
    );
}

export default Hero;