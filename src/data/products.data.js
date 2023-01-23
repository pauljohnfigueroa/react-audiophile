const PRODUCTS = [
    {
        category: 'headphones',
        items: [
            {
                id: 1,
                isNewProduct: true,
                name: 'XX99 Mark II Headphones',
                description: 'The new XX99 Mark II headphones is the pinnacle of pristine audio. It redefines your premium headphone experience by reproducing the balanced depth and precision of studio-quality sound.',
                price: 1000,
                thumbnail: 'https://firebasestorage.googleapis.com/v0/b/audiophile-db.appspot.com/o/assets%2Fimages%2Fcart%2Fimage-xx99-mark-two-headphones.jpg?alt=media&token=d611b17b-f9e2-475d-97f9-1548714a9057',
                imgUrlMobile: 'https://firebasestorage.googleapis.com/v0/b/audiophile-db.appspot.com/o/assets%2Fimages%2Fproduct-xx99-mark-two-headphones%2Fmobile%2Fimage-category-page-preview-2.png?alt=media&token=01f160c3-3e40-479e-930d-a601a4d78a72',
                imgUrlMobileWidth: '491w',
                imgUrlTablet: '',
                imgUrlTabletWidth: '',
                imgUrlDesktop: 'https://firebasestorage.googleapis.com/v0/b/audiophile-db.appspot.com/o/assets%2Fimages%2Fproduct-xx99-mark-two-headphones%2Fdesktop%2Fimage-category-page-preview.jpg?alt=media&token=ee593a8e-ceed-413d-ab3c-b0e46bc83d47',
                imgUrlDesktopWidth: '1080w',
                productPageSlug: 'xx99-mark-ii-headphones',
                features: "Featuring a genuine leather head strap and premium earcups, these headphones deliver superior comfort for those who like to enjoy endless listening. It includes intuitive controls designed for any situation. Whether you’re taking a business call or just in your own personal space, the auto on/off and pause features ensure that you'll never miss a beat. The advanced Active Noise Cancellation with built-in equalizer allow you to experience your audio world on your terms. It lets you enjoy your audio in peace, but quickly interact with your surroundings when you need to. Combined with Bluetooth 5. 0 compliant connectivity and 17 hour battery life, the XX99 Mark II headphones gives you superior sound, cutting-edge technology, and a modern design aesthetic.",
                inTheBox: [
                    {
                        id: 1,
                        description: 'Headphone Unit',
                        quantity: 1
                    },
                    {
                        id: 2,
                        description: 'Replacement Earcups',
                        quantity: 2
                    },
                    {
                        id: 3,
                        description: 'User Manual',
                        quantity: 1
                    },
                    {
                        id: 4,
                        description: '3.5mm 5m Audio Cable',
                        quantity: 1
                    },
                    {
                        id: 5,
                        description: 'Travel Bag',
                        quantity: 1
                    },
                ],
                galleryPhotos: {
                    photo1Mobile: 'https://firebasestorage.googleapis.com/v0/b/audiophile-db.appspot.com/o/assets%2Fimages%2Fproduct-xx99-mark-two-headphones%2Fmobile%2Fimage-gallery-1.jpg?alt=media&token=374df631-f524-424d-8f3e-2ed2705f4cde',
                    photo1MobileWidth: '654w',
                    photo1Tablet: 'https://firebasestorage.googleapis.com/v0/b/audiophile-db.appspot.com/o/assets%2Fimages%2Fproduct-xx99-mark-two-headphones%2Ftablet%2Fimage-gallery-1.jpg?alt=media&token=d2c39632-7181-44d8-bc18-1935de74b759',
                    photo1TabletWidth: '831w',
                    photo1Desktop: 'https://firebasestorage.googleapis.com/v0/b/audiophile-db.appspot.com/o/assets%2Fimages%2Fproduct-xx99-mark-two-headphones%2Fdesktop%2Fimage-gallery-1.jpg?alt=media&token=e6117ba8-14fb-48da-9235-094c349ab384',
                    photo1DesktopWidth: '445w',

                    photo2Mobile: 'https://firebasestorage.googleapis.com/v0/b/audiophile-db.appspot.com/o/assets%2Fimages%2Fproduct-xx99-mark-two-headphones%2Fmobile%2Fimage-gallery-2.jpg?alt=media&token=e8567a46-95ea-4129-a96c-eb9c48ef6ad6',
                    photo2MobileWidth: '654w',
                    photo2Tablet: 'https://firebasestorage.googleapis.com/v0/b/audiophile-db.appspot.com/o/assets%2Fimages%2Fproduct-xx99-mark-two-headphones%2Ftablet%2Fimage-gallery-2.jpg?alt=media&token=d0dc0c92-6637-4f6e-991f-bc012b77d880',
                    photo2TabletWidth: '831w',
                    photo2Desktop: 'https://firebasestorage.googleapis.com/v0/b/audiophile-db.appspot.com/o/assets%2Fimages%2Fproduct-xx99-mark-two-headphones%2Fdesktop%2Fimage-gallery-2.jpg?alt=media&token=80f6bf84-e516-445b-aba5-bf7f38a10458',
                    photo2DesktopWidth: '445w',

                    photo3Mobile: 'https://firebasestorage.googleapis.com/v0/b/audiophile-db.appspot.com/o/assets%2Fimages%2Fproduct-xx99-mark-two-headphones%2Fmobile%2Fimage-gallery-3.jpg?alt=media&token=cd5837fa-48bc-4925-b8cb-a95e33561a73',
                    photo3MobileWidth: '491w',
                    photo3Tablet: 'https://firebasestorage.googleapis.com/v0/b/audiophile-db.appspot.com/o/assets%2Fimages%2Fproduct-xx99-mark-two-headphones%2Ftablet%2Fimage-gallery-3.jpg?alt=media&token=370e0798-f988-4c98-b1be-577780b36fc2',
                    photo3TabletWidth: '1185w',
                    photo3Desktop: 'https://firebasestorage.googleapis.com/v0/b/audiophile-db.appspot.com/o/assets%2Fimages%2Fproduct-xx99-mark-two-headphones%2Fdesktop%2Fimage-gallery-3.jpg?alt=media&token=442e3549-2c06-4d69-8acf-73ade2efdffe',
                    photo3DesktopWidth: '1270w',

                },
                relatedProducts: [
                    {
                        id: 1,
                        name: 'XX99 MARK I',
                        photoMobile: 'https://firebasestorage.googleapis.com/v0/b/audiophile-db.appspot.com/o/assets%2Fimages%2Fproduct-xx99-mark-one-headphones%2Fmobile%2Fimage-removebg-preview.png?alt=media&token=b216f6ed-a1a3-435e-a1ca-4baa2392d6ec',
                        photoMobileWidth: '293w',
                        photoTablet: 'https://firebasestorage.googleapis.com/v0/b/audiophile-db.appspot.com/o/assets%2Fimages%2Fproduct-xx99-mark-one-headphones%2Ftablet%2Fimage-removebg-preview.png?alt=media&token=8b072dea-b1ba-449e-9a09-fea24f6a94b6',
                        photoTabletWidth: '594w',
                        photoDesktop: '',
                        photoDesktopWidth: '',

                    },
                    {
                        id: 2,
                        name: 'XX59',
                        photoMobile: 'https://firebasestorage.googleapis.com/v0/b/audiophile-db.appspot.com/o/assets%2Fimages%2Fproduct-xx59-headphones%2Fmobile%2Fimage-removebg-preview.png?alt=media&token=41af9468-856f-405f-9c8d-dd158854205a',
                        photoMobileWidth: '293w',
                        photoTablet: 'https://firebasestorage.googleapis.com/v0/b/audiophile-db.appspot.com/o/assets%2Fimages%2Fproduct-xx59-headphones%2Ftablet%2Fimage-removebg-preview.png?alt=media&token=811c383c-9341-40af-9809-661e31d40eae',
                        photoTabletWidth: '594w',
                        photoDesktop: '',
                        photoDesktopWidth: '',

                    },
                    {
                        id: 3,
                        name: 'ZX9 SPEAKER',
                        photoMobile: 'https://firebasestorage.googleapis.com/v0/b/audiophile-db.appspot.com/o/assets%2Fimages%2Fproduct-zx9-speaker%2Fmobile%2Fimage-removebg-preview.png?alt=media&token=3d66115a-f405-4b63-8722-f84e3fb08b1e',
                        photoMobileWidth: '144w',
                        photoTablet: 'https://firebasestorage.googleapis.com/v0/b/audiophile-db.appspot.com/o/assets%2Fimages%2Fproduct-zx9-speaker%2Ftablet%2Fimage-removebg-preview.png?alt=media&token=63a88a1c-b8fa-45cd-a8a2-25a420669ac1',
                        photoTabletWidth: '573w',
                        photoDesktop: '',
                        photoDesktopWidth: '',

                    },
                ],

            },
            {
                id: 2,
                isNewProduct: false,
                name: 'XX99 Mark I Headphones',
                description: 'As the gold standard for headphones, the classic XX99 Mark I offers detailed and accurate audio reproduction for audiophiles, mixing engineers, and music aficionados alike in studios and on the go.',
                price: 1001,
                thumbnail: 'https://firebasestorage.googleapis.com/v0/b/audiophile-db.appspot.com/o/assets%2Fimages%2Fcart%2Fimage-xx99-mark-one-headphones.jpg?alt=media&token=f83c7b66-db63-403e-b87f-38088c58103f',
                imgUrlMobile: 'https://firebasestorage.googleapis.com/v0/b/audiophile-db.appspot.com/o/assets%2Fimages%2Fproduct-xx99-mark-one-headphones%2Fmobile%2Fimage-category-page-preview-2.png?alt=media&token=e0a3da4e-99ed-4444-a8c1-8278a3b8c6ef',
                imgUrlMobileWidth: '520w',
                imgUrlTablet: '',
                imgUrlTabletWidth: '',
                imgUrlDesktop: 'https://firebasestorage.googleapis.com/v0/b/audiophile-db.appspot.com/o/assets%2Fimages%2Fproduct-xx99-mark-one-headphones%2Fdesktop%2Fimage-category-page-preview.jpg?alt=media&token=bf6cb366-88f9-4165-8b38-7de4feb095cc',
                imgUrlDesktopWidth: '1080w',
                productPageSlug: 'xx99-mark-i-headphones',
                features: "As the headphones all others are measured against, the XX99 Mark I demonstrates over five decades of audio expertise, redefining the critical listening experience. This pair of closed-back headphones are made of industrial, aerospace-grade materials to emphasize durability at a relatively light weight of 11 oz. From the handcrafted microfiber ear cushions to the robust metal headband with inner damping element, the components work together to deliver comfort and uncompromising sound. Its closed-back design delivers up to 27 dB of passive noise cancellation, reducing resonance by reflecting sound to a dedicated absorber. For connectivity, a specially tuned cable is included with a balanced gold connector.",
                inTheBox: [
                    {
                        id: 1,
                        description: 'Headphone Unit',
                        quantity: 1
                    },
                    {
                        id: 2,
                        description: 'Replacement Earcups',
                        quantity: 2
                    },
                    {
                        id: 3,
                        description: 'User Manual',
                        quantity: 1
                    },
                    {
                        id: 4,
                        description: '3.5mm 5m Audio Cable',
                        quantity: 1
                    },
                    {
                        id: 5,
                        description: 'Travel Bag',
                        quantity: 0
                    },
                ],
                galleryPhotos: {
                    photo1Mobile: 'https://firebasestorage.googleapis.com/v0/b/audiophile-db.appspot.com/o/assets%2Fimages%2Fproduct-xx99-mark-one-headphones%2Fmobile%2Fimage-gallery-1.jpg?alt=media&token=f78bf157-5132-460d-bf8e-bde8baf338f0',
                    photo1MobileWidth: '654w',
                    photo1Tablet: 'https://firebasestorage.googleapis.com/v0/b/audiophile-db.appspot.com/o/assets%2Fimages%2Fproduct-xx99-mark-one-headphones%2Ftablet%2Fimage-gallery-1.jpg?alt=media&token=67c42845-97e1-4f33-8bf9-d9287c4fdd35',
                    photo1TabletWidth: '831w',
                    photo1Desktop: 'https://firebasestorage.googleapis.com/v0/b/audiophile-db.appspot.com/o/assets%2Fimages%2Fproduct-xx99-mark-one-headphones%2Fdesktop%2Fimage-gallery-1.jpg?alt=media&token=b2c8008a-49fb-4eeb-b8a1-5979511c4ac7',
                    photo1DesktopWidth: '445w',

                    photo2Mobile: 'https://firebasestorage.googleapis.com/v0/b/audiophile-db.appspot.com/o/assets%2Fimages%2Fproduct-xx99-mark-one-headphones%2Fmobile%2Fimage-gallery-2.jpg?alt=media&token=fd3063e4-5b19-4360-999e-dca250315806',
                    photo2MobileWidth: '654w',
                    photo2Tablet: 'https://firebasestorage.googleapis.com/v0/b/audiophile-db.appspot.com/o/assets%2Fimages%2Fproduct-xx99-mark-one-headphones%2Ftablet%2Fimage-gallery-2.jpg?alt=media&token=735eb9c9-30ca-45fc-b45c-bd86bcaca162',
                    photo2TabletWidth: '831w',
                    photo2Desktop: 'https://firebasestorage.googleapis.com/v0/b/audiophile-db.appspot.com/o/assets%2Fimages%2Fproduct-xx99-mark-one-headphones%2Fdesktop%2Fimage-gallery-2.jpg?alt=media&token=e6413be1-984e-42b3-90ed-3770ba06586f',
                    photo2DesktopWidth: '445w',

                    photo3Mobile: 'https://firebasestorage.googleapis.com/v0/b/audiophile-db.appspot.com/o/assets%2Fimages%2Fproduct-xx99-mark-one-headphones%2Fmobile%2Fimage-gallery-3.jpg?alt=media&token=29fec97a-9a87-4414-846d-ddcb0a8068b1',
                    photo3MobileWidth: '491w',
                    photo3Tablet: 'https://firebasestorage.googleapis.com/v0/b/audiophile-db.appspot.com/o/assets%2Fimages%2Fproduct-xx99-mark-one-headphones%2Ftablet%2Fimage-gallery-3.jpg?alt=media&token=ee734a42-9003-402b-b79c-0ff9a9d25a16',
                    photo3TabletWidth: '1185w',
                    photo3Desktop: 'https://firebasestorage.googleapis.com/v0/b/audiophile-db.appspot.com/o/assets%2Fimages%2Fproduct-xx99-mark-one-headphones%2Fdesktop%2Fimage-gallery-3.jpg?alt=media&token=de3b0b7c-8ef6-4e76-a498-4f44066d407b',
                    photo3DesktopWidth: '1270w',

                },
                relatedProducts: [
                    {
                        id: 1,
                        name: 'XX99 MARK I',
                        photoMobile: 'https://firebasestorage.googleapis.com/v0/b/audiophile-db.appspot.com/o/assets%2Fimages%2Fproduct-xx99-mark-one-headphones%2Fmobile%2Fimage-removebg-preview.png?alt=media&token=b216f6ed-a1a3-435e-a1ca-4baa2392d6ec',
                        photoMobileWidth: '293w',
                        photoTablet: 'https://firebasestorage.googleapis.com/v0/b/audiophile-db.appspot.com/o/assets%2Fimages%2Fproduct-xx99-mark-one-headphones%2Ftablet%2Fimage-removebg-preview.png?alt=media&token=8b072dea-b1ba-449e-9a09-fea24f6a94b6',
                        photoTabletWidth: '594w',
                        photoDesktop: '',
                        photoDesktopWidth: '',

                    },
                    {
                        id: 2,
                        name: 'XX59',
                        photoMobile: 'https://firebasestorage.googleapis.com/v0/b/audiophile-db.appspot.com/o/assets%2Fimages%2Fproduct-xx59-headphones%2Fmobile%2Fimage-removebg-preview.png?alt=media&token=41af9468-856f-405f-9c8d-dd158854205a',
                        photoMobileWidth: '293w',
                        photoTablet: 'https://firebasestorage.googleapis.com/v0/b/audiophile-db.appspot.com/o/assets%2Fimages%2Fproduct-xx59-headphones%2Ftablet%2Fimage-removebg-preview.png?alt=media&token=811c383c-9341-40af-9809-661e31d40eae',
                        photoTabletWidth: '594w',
                        photoDesktop: '',
                        photoDesktopWidth: '',

                    },
                    {
                        id: 3,
                        name: 'ZX9 SPEAKER',
                        photoMobile: 'https://firebasestorage.googleapis.com/v0/b/audiophile-db.appspot.com/o/assets%2Fimages%2Fproduct-zx9-speaker%2Fmobile%2Fimage-removebg-preview.png?alt=media&token=3d66115a-f405-4b63-8722-f84e3fb08b1e',
                        photoMobileWidth: '144w',
                        photoTablet: 'https://firebasestorage.googleapis.com/v0/b/audiophile-db.appspot.com/o/assets%2Fimages%2Fproduct-zx9-speaker%2Ftablet%2Fimage-removebg-preview.png?alt=media&token=63a88a1c-b8fa-45cd-a8a2-25a420669ac1',
                        photoTabletWidth: '573w',
                        photoDesktop: '',
                        photoDesktopWidth: '',

                    },
                ],
            },
            {
                id: 3,
                isNewProduct: false,
                name: 'XX59 Headphones',
                description: 'Enjoy your audio almost anywhere and customize it to your specific tastes with the XX59 headphones. The stylish yet durable versatile wireless headset is a brilliant companion at home or on the move.',
                price: 1987,
                thumbnail: 'https://firebasestorage.googleapis.com/v0/b/audiophile-db.appspot.com/o/assets%2Fimages%2Fcart%2Fimage-xx59-headphones.jpg?alt=media&token=d6028275-adfa-41c8-9df7-70c2c2be8154',
                imgUrlMobile: 'https://firebasestorage.googleapis.com/v0/b/audiophile-db.appspot.com/o/assets%2Fimages%2Fproduct-xx59-headphones%2Fmobile%2Fimage-category-page-preview-2.png?alt=media&token=840a507a-c7fe-4dbe-8fa2-b0d6101202d2',
                imgUrlMobileWidth: '649w',
                imgUrlTablet: '',
                imgUrlTabletWidth: '',
                imgUrlDesktop: 'https://firebasestorage.googleapis.com/v0/b/audiophile-db.appspot.com/o/assets%2Fimages%2Fproduct-xx59-headphones%2Fdesktop%2Fimage-category-page-preview.jpg?alt=media&token=b44c909d-d6f1-4d38-ba01-b4c5bf58b0c8',
                imgUrlDesktopWidth: '1080w',
                productPageSlug: 'XX59-headphones',
                features: "These headphones have been created from durable, high-quality materials tough enough to take anywhere. Its compact folding design fuses comfort and minimalist style making it perfect for travel. Flawless transmission is assured by the latest wireless technology engineered for audio synchronization with videos. More than a simple pair of headphones, this headset features a pair of built-in microphones for clear, hands-free calling when paired with a compatible smartphone. Controlling music and calls is also intuitive thanks to easy-access touch buttons on the earcups. Regardless of how you use the XX59 headphones, you can do so all day thanks to an impressive 30-hour battery life that can be rapidly recharged via USB-C.",
                inTheBox: [
                    {
                        id: 1,
                        description: 'Headphone Unit',
                        quantity: 1
                    },
                    {
                        id: 2,
                        description: 'Replacement Earcups',
                        quantity: 2
                    },
                    {
                        id: 3,
                        description: 'User Manual',
                        quantity: 1
                    },
                    {
                        id: 4,
                        description: '3.5mm 5m Audio Cable',
                        quantity: 1
                    },
                    {
                        id: 5,
                        description: 'Travel Bag',
                        quantity: 0
                    },
                ],
                galleryPhotos: {
                    photo1Mobile: 'https://firebasestorage.googleapis.com/v0/b/audiophile-db.appspot.com/o/assets%2Fimages%2Fproduct-xx59-headphones%2Fmobile%2Fimage-gallery-1.jpg?alt=media&token=6f952455-8838-43b5-8e53-6942f0ecd458',
                    photo1MobileWidth: '654w',
                    photo1Tablet: 'https://firebasestorage.googleapis.com/v0/b/audiophile-db.appspot.com/o/assets%2Fimages%2Fproduct-xx59-headphones%2Ftablet%2Fimage-gallery-1.jpg?alt=media&token=4ee7f1b9-4aea-4228-bb2a-86bbf283e8b9',
                    photo1TabletWidth: '831w',
                    photo1Desktop: 'https://firebasestorage.googleapis.com/v0/b/audiophile-db.appspot.com/o/assets%2Fimages%2Fproduct-xx59-headphones%2Fdesktop%2Fimage-gallery-1.jpg?alt=media&token=3c09f3c8-9884-4795-8a66-ac360225684f',
                    photo1DesktopWidth: '445w',

                    photo2Mobile: 'https://firebasestorage.googleapis.com/v0/b/audiophile-db.appspot.com/o/assets%2Fimages%2Fproduct-xx59-headphones%2Fmobile%2Fimage-gallery-2.jpg?alt=media&token=1985ddf4-e2b8-4b6a-bdaf-6b80c392bd8e',
                    photo2MobileWidth: '654w',
                    photo2Tablet: 'https://firebasestorage.googleapis.com/v0/b/audiophile-db.appspot.com/o/assets%2Fimages%2Fproduct-xx59-headphones%2Ftablet%2Fimage-gallery-2.jpg?alt=media&token=48c784e6-c9d2-424c-9c01-63e53f4263d5',
                    photo2TabletWidth: '831w',
                    photo2Desktop: 'https://firebasestorage.googleapis.com/v0/b/audiophile-db.appspot.com/o/assets%2Fimages%2Fproduct-xx59-headphones%2Fdesktop%2Fimage-gallery-2.jpg?alt=media&token=75e35095-9765-4f29-bdcf-a8e7a995c449',
                    photo2DesktopWidth: '445w',

                    photo3Mobile: 'https://firebasestorage.googleapis.com/v0/b/audiophile-db.appspot.com/o/assets%2Fimages%2Fproduct-xx59-headphones%2Fmobile%2Fimage-gallery-3.jpg?alt=media&token=2a14abb2-bc6f-4a6f-a282-8c5ac67dad7b',
                    photo3MobileWidth: '491w',
                    photo3Tablet: 'https://firebasestorage.googleapis.com/v0/b/audiophile-db.appspot.com/o/assets%2Fimages%2Fproduct-xx59-headphones%2Ftablet%2Fimage-gallery-3.jpg?alt=media&token=65c75718-bb85-4253-a1be-f3f86a807a70',
                    photo3TabletWidth: '1185w',
                    photo3Desktop: 'https://firebasestorage.googleapis.com/v0/b/audiophile-db.appspot.com/o/assets%2Fimages%2Fproduct-xx59-headphones%2Fdesktop%2Fimage-gallery-3.jpg?alt=media&token=60537a97-a221-42b6-9d75-67f552dd5ea7',
                    photo3DesktopWidth: '1270w',

                },
                relatedProducts: [
                    {
                        id: 1,
                        name: 'XX99 MARK I',
                        photoMobile: 'https://firebasestorage.googleapis.com/v0/b/audiophile-db.appspot.com/o/assets%2Fimages%2Fproduct-xx99-mark-one-headphones%2Fmobile%2Fimage-removebg-preview.png?alt=media&token=b216f6ed-a1a3-435e-a1ca-4baa2392d6ec',
                        photoMobileWidth: '293w',
                        photoTablet: 'https://firebasestorage.googleapis.com/v0/b/audiophile-db.appspot.com/o/assets%2Fimages%2Fproduct-xx99-mark-one-headphones%2Ftablet%2Fimage-removebg-preview.png?alt=media&token=8b072dea-b1ba-449e-9a09-fea24f6a94b6',
                        photoTabletWidth: '594w',
                        photoDesktop: '',
                        photoDesktopWidth: '',

                    },
                    {
                        id: 2,
                        name: 'XX59',
                        photoMobile: 'https://firebasestorage.googleapis.com/v0/b/audiophile-db.appspot.com/o/assets%2Fimages%2Fproduct-xx59-headphones%2Fmobile%2Fimage-removebg-preview.png?alt=media&token=41af9468-856f-405f-9c8d-dd158854205a',
                        photoMobileWidth: '293w',
                        photoTablet: 'https://firebasestorage.googleapis.com/v0/b/audiophile-db.appspot.com/o/assets%2Fimages%2Fproduct-xx59-headphones%2Ftablet%2Fimage-removebg-preview.png?alt=media&token=811c383c-9341-40af-9809-661e31d40eae',
                        photoTabletWidth: '594w',
                        photoDesktop: '',
                        photoDesktopWidth: '',

                    },
                    {
                        id: 3,
                        name: 'ZX9 SPEAKER',
                        photoMobile: 'https://firebasestorage.googleapis.com/v0/b/audiophile-db.appspot.com/o/assets%2Fimages%2Fproduct-zx9-speaker%2Fmobile%2Fimage-removebg-preview.png?alt=media&token=3d66115a-f405-4b63-8722-f84e3fb08b1e',
                        photoMobileWidth: '144w',
                        photoTablet: 'https://firebasestorage.googleapis.com/v0/b/audiophile-db.appspot.com/o/assets%2Fimages%2Fproduct-zx9-speaker%2Ftablet%2Fimage-removebg-preview.png?alt=media&token=63a88a1c-b8fa-45cd-a8a2-25a420669ac1',
                        photoTabletWidth: '573w',
                        photoDesktop: '',
                        photoDesktopWidth: '',

                    },
                ],
            }
        ]
    },
    {
        category: 'speakers',
        items: [
            {
                id: 11,
                isNewProduct: true,
                name: 'ZX9 Speaker',
                description: 'Upgrade your sound system with the all new ZX9 active speaker. It’s a bookshelf speaker system that offers truly wireless connectivity -- creating new possibilities for more pleasing and practical audio setups.',
                price: 1002,
                thumbnail: 'https://firebasestorage.googleapis.com/v0/b/audiophile-db.appspot.com/o/assets%2Fimages%2Fcart%2Fimage-zx9-speaker.jpg?alt=media&token=7c74e9d0-414b-49b8-9355-5ec070ee7671',
                imgUrlMobileWidth: '584w',
                imgUrlTablet: '',
                imgUrlTabletWidth: '',
                imgUrlDesktop: 'https://firebasestorage.googleapis.com/v0/b/audiophile-db.appspot.com/o/assets%2Fimages%2Fproduct-zx9-speaker%2Fdesktop%2Fimage-category-page-preview.jpg?alt=media&token=c9c4a8cb-d7ea-4b2f-931b-f284567db8c2',
                imgUrlDesktopWidth: '875w',
                productPageSlug: 'zx9-speaker',
                features: "Connect via Bluetooth or nearly any wired source. This speaker features optical, digital coaxial, USB Type-B, stereo RCA, and stereo XLR inputs, allowing you to have up to five wired source devices connected for easy switching. Improved bluetooth technology offers near lossless audio quality at up to 328ft (100m).Discover clear, more natural sounding highs than the competition with ZX9's signature planar diaphragm tweeter. Equally important is its powerful room-shaking bass courtesy of a 6.5” aluminum alloy bass unit. You'll be able to enjoy equal sound quality whether in a large room or small den. Furthermore, you will experience new sensations from old songs since it can respond to even the subtle waveforms.",
                inTheBox: [
                    {
                        id: 1,
                        description: 'Speaker Unit',
                        quantity: 2
                    },
                    {
                        id: 2,
                        description: 'Speaker Cloth Panel',
                        quantity: 2
                    },
                    {
                        id: 3,
                        description: 'User Manual',
                        quantity: 1
                    },
                    {
                        id: 4,
                        description: '3.5mm 10m Audio Cable',
                        quantity: 1
                    },
                    {
                        id: 5,
                        description: '10m Optical Cable',
                        quantity: 1
                    },
                ],
                galleryPhotos: {
                    photo1Mobile: 'https://firebasestorage.googleapis.com/v0/b/audiophile-db.appspot.com/o/assets%2Fimages%2Fproduct-zx9-speaker%2Fmobile%2Fimage-gallery-1.jpg?alt=media&token=73ce1138-6132-4bb4-a015-deb4c4ae1d0a',
                    photo1MobileWidth: '654w',
                    photo1Tablet: 'https://firebasestorage.googleapis.com/v0/b/audiophile-db.appspot.com/o/assets%2Fimages%2Fproduct-zx9-speaker%2Ftablet%2Fimage-gallery-1.jpg?alt=media&token=2068e322-ba9d-4368-a356-6e406ea9041d',
                    photo1TabletWidth: '831w',
                    photo1Desktop: 'https://firebasestorage.googleapis.com/v0/b/audiophile-db.appspot.com/o/assets%2Fimages%2Fproduct-zx9-speaker%2Fdesktop%2Fimage-gallery-1.jpg?alt=media&token=5fa9681d-fcc0-4683-95a0-81ee7cab8495',
                    photo1DesktopWidth: '445w',

                    photo2Mobile: 'https://firebasestorage.googleapis.com/v0/b/audiophile-db.appspot.com/o/assets%2Fimages%2Fproduct-zx9-speaker%2Fmobile%2Fimage-gallery-2.jpg?alt=media&token=0271a6a7-f47a-47bb-9c91-489e5ab6d44c',
                    photo2MobileWidth: '654w',
                    photo2Tablet: 'https://firebasestorage.googleapis.com/v0/b/audiophile-db.appspot.com/o/assets%2Fimages%2Fproduct-zx9-speaker%2Ftablet%2Fimage-gallery-2.jpg?alt=media&token=c39cb06e-6a92-4e41-96a0-6a7c9fe0ba4a',
                    photo2TabletWidth: '831w',
                    photo2Desktop: 'https://firebasestorage.googleapis.com/v0/b/audiophile-db.appspot.com/o/assets%2Fimages%2Fproduct-zx9-speaker%2Fdesktop%2Fimage-gallery-2.jpg?alt=media&token=5b65f5c5-448e-4cd2-90dd-fe415026adec',
                    photo2DesktopWidth: '445w',

                    photo3Mobile: 'https://firebasestorage.googleapis.com/v0/b/audiophile-db.appspot.com/o/assets%2Fimages%2Fproduct-zx9-speaker%2Fmobile%2Fimage-gallery-3.jpg?alt=media&token=3cf7ac17-726d-4eb9-8261-11fa8440c2d1',
                    photo3MobileWidth: '491w',
                    photo3Tablet: 'https://firebasestorage.googleapis.com/v0/b/audiophile-db.appspot.com/o/assets%2Fimages%2Fproduct-zx9-speaker%2Ftablet%2Fimage-gallery-3.jpg?alt=media&token=f5fd2e9b-a0af-4e51-b970-d1d198a930f2',
                    photo3TabletWidth: '1185w',
                    photo3Desktop: 'https://firebasestorage.googleapis.com/v0/b/audiophile-db.appspot.com/o/assets%2Fimages%2Fproduct-zx9-speaker%2Fdesktop%2Fimage-gallery-3.jpg?alt=media&token=41a27853-034a-40ec-b860-2cf832672040',
                    photo3DesktopWidth: '1270w',

                },
                relatedProducts: [
                    {
                        id: 1,
                        name: 'XX99 MARK I',
                        photoMobile: 'https://firebasestorage.googleapis.com/v0/b/audiophile-db.appspot.com/o/assets%2Fimages%2Fproduct-xx99-mark-one-headphones%2Fmobile%2Fimage-removebg-preview.png?alt=media&token=b216f6ed-a1a3-435e-a1ca-4baa2392d6ec',
                        photoMobileWidth: '293w',
                        photoTablet: 'https://firebasestorage.googleapis.com/v0/b/audiophile-db.appspot.com/o/assets%2Fimages%2Fproduct-xx99-mark-one-headphones%2Ftablet%2Fimage-removebg-preview.png?alt=media&token=8b072dea-b1ba-449e-9a09-fea24f6a94b6',
                        photoTabletWidth: '594w',
                        photoDesktop: '',
                        photoDesktopWidth: '',

                    },
                    {
                        id: 2,
                        name: 'XX59',
                        photoMobile: 'https://firebasestorage.googleapis.com/v0/b/audiophile-db.appspot.com/o/assets%2Fimages%2Fproduct-xx59-headphones%2Fmobile%2Fimage-removebg-preview.png?alt=media&token=41af9468-856f-405f-9c8d-dd158854205a',
                        photoMobileWidth: '293w',
                        photoTablet: 'https://firebasestorage.googleapis.com/v0/b/audiophile-db.appspot.com/o/assets%2Fimages%2Fproduct-xx59-headphones%2Ftablet%2Fimage-removebg-preview.png?alt=media&token=811c383c-9341-40af-9809-661e31d40eae',
                        photoTabletWidth: '594w',
                        photoDesktop: '',
                        photoDesktopWidth: '',

                    },
                    {
                        id: 3,
                        name: 'ZX9 SPEAKER',
                        photoMobile: 'https://firebasestorage.googleapis.com/v0/b/audiophile-db.appspot.com/o/assets%2Fimages%2Fproduct-zx9-speaker%2Fmobile%2Fimage-removebg-preview.png?alt=media&token=3d66115a-f405-4b63-8722-f84e3fb08b1e',
                        photoMobileWidth: '144w',
                        photoTablet: 'https://firebasestorage.googleapis.com/v0/b/audiophile-db.appspot.com/o/assets%2Fimages%2Fproduct-zx9-speaker%2Ftablet%2Fimage-removebg-preview.png?alt=media&token=63a88a1c-b8fa-45cd-a8a2-25a420669ac1',
                        photoTabletWidth: '573w',
                        photoDesktop: '',
                        photoDesktopWidth: '',

                    },
                ],
            },
            {
                id: 12,
                isNewProduct: false,
                name: 'ZX7 Speaker',
                description: 'Stream high quality sound wirelessly with minimal loss. The ZX7 bookshelf speaker uses high-end audiophile components that represents the top of the line powered speakers for home or studio use.',
                price: 1789,
                thumbnail: 'https://firebasestorage.googleapis.com/v0/b/audiophile-db.appspot.com/o/assets%2Fimages%2Fproduct-zx7-speaker%2Fdesktop%2Fimage-category-page-preview.jpg?alt=media&token=a5a82dc7-9ed9-4411-b961-1c3227b43173',
                imgUrlMobile: 'https://firebasestorage.googleapis.com/v0/b/audiophile-db.appspot.com/o/assets%2Fimages%2Fproduct-zx7-speaker%2Fmobile%2Fimage-category-page-preview.jpg?alt=media&token=1f38df10-9d2f-4e9e-bea3-03540045bb82',
                imgUrlMobileWidth: '537w',
                imgUrlTablet: '',
                imgUrlTabletWidth: '',
                imgUrlDesktop: 'https://firebasestorage.googleapis.com/v0/b/audiophile-db.appspot.com/o/assets%2Fimages%2Fproduct-zx7-speaker%2Fdesktop%2Fimage-category-page-preview.jpg?alt=media&token=a5a82dc7-9ed9-4411-b961-1c3227b43173',
                imgUrlDesktopWidth: '1074w',
                productPageSlug: 'zx7-speaker',
                features: "Reap the advantages of a flat diaphragm tweeter cone. This provides a fast response rate and excellent high frequencies that lower tiered bookshelf speakers cannot provide. The woofers are made from aluminum that produces a unique and clear sound. XLR inputs allow you to connect to a mixer for more advanced usage.The ZX7 speaker is the perfect blend of stylish design and high performance. It houses an encased MDF wooden enclosure which minimises acoustic resonance. Dual connectivity allows pairing through bluetooth or traditional optical and RCA input. Switch input sources and control volume at your finger tips with the included wireless remote. This versatile speaker is equipped to deliver an authentic listening experience.",
                inTheBox: [
                    {
                        id: 1,
                        description: 'Speaker Unit',
                        quantity: 2
                    },
                    {
                        id: 2,
                        description: 'Speaker Cloth Panel',
                        quantity: 2
                    },
                    {
                        id: 3,
                        description: 'User Manual',
                        quantity: 1
                    },
                    {
                        id: 4,
                        description: '3.5mm 7.5m Audio Cable',
                        quantity: 1
                    },
                    {
                        id: 5,
                        description: '7.5m Optical Cable',
                        quantity: 1
                    },
                ],
                galleryPhotos: {
                    photo1Mobile: 'https://firebasestorage.googleapis.com/v0/b/audiophile-db.appspot.com/o/assets%2Fimages%2Fproduct-zx7-speaker%2Fmobile%2Fimage-gallery-1.jpg?alt=media&token=22cc0006-aac2-41ee-9b04-2ded80611b9e',
                    photo1MobileWidth: '654w',
                    photo1Tablet: 'https://firebasestorage.googleapis.com/v0/b/audiophile-db.appspot.com/o/assets%2Fimages%2Fproduct-zx7-speaker%2Ftablet%2Fimage-gallery-1.jpg?alt=media&token=b75ad036-ba22-4273-a581-72f26b2ee5a6',
                    photo1TabletWidth: '831w',
                    photo1Desktop: 'https://firebasestorage.googleapis.com/v0/b/audiophile-db.appspot.com/o/assets%2Fimages%2Fproduct-zx7-speaker%2Fdesktop%2Fimage-gallery-1.jpg?alt=media&token=20ab8b72-f01c-4f2d-b4fb-295bfd4b044b',
                    photo1DesktopWidth: '445w',

                    photo2Mobile: 'https://firebasestorage.googleapis.com/v0/b/audiophile-db.appspot.com/o/assets%2Fimages%2Fproduct-zx7-speaker%2Fmobile%2Fimage-gallery-2.jpg?alt=media&token=03ceb50a-ad33-4a65-a13a-1b979455db27',
                    photo2MobileWidth: '654w',
                    photo2Tablet: 'https://firebasestorage.googleapis.com/v0/b/audiophile-db.appspot.com/o/assets%2Fimages%2Fproduct-zx7-speaker%2Ftablet%2Fimage-gallery-2.jpg?alt=media&token=f20d4bae-fbdf-43ff-881f-4726e3f65821',
                    photo2TabletWidth: '831w',
                    photo2Desktop: 'https://firebasestorage.googleapis.com/v0/b/audiophile-db.appspot.com/o/assets%2Fimages%2Fproduct-zx7-speaker%2Fdesktop%2Fimage-gallery-2.jpg?alt=media&token=15734824-777b-44fd-a256-3c08a7407d28',
                    photo2DesktopWidth: '445w',

                    photo3Mobile: 'https://firebasestorage.googleapis.com/v0/b/audiophile-db.appspot.com/o/assets%2Fimages%2Fproduct-zx7-speaker%2Fmobile%2Fimage-gallery-3.jpg?alt=media&token=4cc5d5c8-282f-4448-a1c5-58ff781c1238',
                    photo3MobileWidth: '491w',
                    photo3Tablet: 'https://firebasestorage.googleapis.com/v0/b/audiophile-db.appspot.com/o/assets%2Fimages%2Fproduct-zx7-speaker%2Ftablet%2Fimage-gallery-3.jpg?alt=media&token=18229057-6864-4a55-b793-73d4e8ba6f45',
                    photo3TabletWidth: '1185w',
                    photo3Desktop: 'https://firebasestorage.googleapis.com/v0/b/audiophile-db.appspot.com/o/assets%2Fimages%2Fproduct-zx7-speaker%2Fdesktop%2Fimage-gallery-3.jpg?alt=media&token=a88c81a4-8885-44cb-804b-721d4741c79d',
                    photo3DesktopWidth: '1270w',

                },
                relatedProducts: [
                    {
                        id: 1,
                        name: 'XX99 MARK I',
                        photoMobile: 'https://firebasestorage.googleapis.com/v0/b/audiophile-db.appspot.com/o/assets%2Fimages%2Fproduct-xx99-mark-one-headphones%2Fmobile%2Fimage-removebg-preview.png?alt=media&token=b216f6ed-a1a3-435e-a1ca-4baa2392d6ec',
                        photoMobileWidth: '293w',
                        photoTablet: 'https://firebasestorage.googleapis.com/v0/b/audiophile-db.appspot.com/o/assets%2Fimages%2Fproduct-xx99-mark-one-headphones%2Ftablet%2Fimage-removebg-preview.png?alt=media&token=8b072dea-b1ba-449e-9a09-fea24f6a94b6',
                        photoTabletWidth: '594w',
                        photoDesktop: '',
                        photoDesktopWidth: '',

                    },
                    {
                        id: 2,
                        name: 'XX59',
                        photoMobile: 'https://firebasestorage.googleapis.com/v0/b/audiophile-db.appspot.com/o/assets%2Fimages%2Fproduct-xx59-headphones%2Fmobile%2Fimage-removebg-preview.png?alt=media&token=41af9468-856f-405f-9c8d-dd158854205a',
                        photoMobileWidth: '293w',
                        photoTablet: 'https://firebasestorage.googleapis.com/v0/b/audiophile-db.appspot.com/o/assets%2Fimages%2Fproduct-xx59-headphones%2Ftablet%2Fimage-removebg-preview.png?alt=media&token=811c383c-9341-40af-9809-661e31d40eae',
                        photoTabletWidth: '594w',
                        photoDesktop: '',
                        photoDesktopWidth: '',

                    },
                    {
                        id: 3,
                        name: 'Zx7 SPEAKER',
                        photoMobile: 'https://firebasestorage.googleapis.com/v0/b/audiophile-db.appspot.com/o/assets%2Fimages%2Fproduct-zx9-speaker%2Fmobile%2Fimage-removebg-preview.png?alt=media&token=3d66115a-f405-4b63-8722-f84e3fb08b1e',
                        photoMobileWidth: '144w',
                        photoTablet: 'https://firebasestorage.googleapis.com/v0/b/audiophile-db.appspot.com/o/assets%2Fimages%2Fproduct-zx9-speaker%2Ftablet%2Fimage-removebg-preview.png?alt=media&token=63a88a1c-b8fa-45cd-a8a2-25a420669ac1',
                        photoTabletWidth: '573w',
                        photoDesktop: '',
                        photoDesktopWidth: '',

                    },
                ],
            }
        ]
    },
    {
        category: 'earphones',
        items: [
            {
                id: 21,
                isNewProduct: true,
                name: 'YX1 Wireless Earphones',
                price: 345,
                thumbnail: 'https://firebasestorage.googleapis.com/v0/b/audiophile-db.appspot.com/o/assets%2Fimages%2Fcart%2Fimage-yx1-earphones.jpg?alt=media&token=96b86d0c-4cc1-4627-80c6-20846a565bbf',
                description: 'Tailor your listening experience with bespoke dynamic drivers from the new YX1 Wireless Earphones. Enjoy incredible high-fidelity sound even in noisy environments with its active noise cancellation feature.',
                imgUrlMobile: 'https://firebasestorage.googleapis.com/v0/b/audiophile-db.appspot.com/o/assets%2Fimages%2Fproduct-yx1-earphones%2Fmobile%2Fimage-product.jpg?alt=media&token=aa979237-d7f4-4548-9fc1-af26bb7f60ac',
                imgUrlMobileWidth: '649w',
                imgUrlTablet: '',
                imgUrlTabletWidth: '',
                imgUrlDesktop: 'https://firebasestorage.googleapis.com/v0/b/audiophile-db.appspot.com/o/assets%2Fimages%2Fproduct-yx1-earphones%2Fdesktop%2Fimage-product.jpg?alt=media&token=7be0dbd7-5d0f-4a82-ad26-019ac254ff01',
                imgUrlDesktopWidth: '1080w',
                productPageSlug: 'yx1-wireless-earphones',
                features: "Experience unrivalled stereo sound thanks to innovative acoustic technology. With improved ergonomics designed for full day wearing, these revolutionary earphones have been finely crafted to provide you with the perfect fit, delivering complete comfort all day long while enjoying exceptional noise isolation and truly immersive sound. The YX1 Wireless Earphones features customizable controls for volume, music, calls, and voice assistants built into both earbuds. The new 7-hour battery life can be extended up to 28 hours with the charging case, giving you uninterrupted play time. Exquisite craftsmanship with a splash resistant design now available in an all new white and grey color scheme as well as the popular classic black.",
                inTheBox: [
                    {
                        id: 1,
                        description: 'Earphone Unit',
                        quantity: 2
                    },
                    {
                        id: 2,
                        description: 'Multi-sized Earplugs',
                        quantity: 6
                    },
                    {
                        id: 3,
                        description: 'User Manual',
                        quantity: 1
                    },
                    {
                        id: 4,
                        description: 'USB-C Charging Cable',
                        quantity: 1
                    },
                    {
                        id: 5,
                        description: 'Travel Pouch',
                        quantity: 1
                    },
                ],
                galleryPhotos: {
                    photo1Mobile: 'https://firebasestorage.googleapis.com/v0/b/audiophile-db.appspot.com/o/assets%2Fimages%2Fproduct-yx1-earphones%2Fmobile%2Fimage-gallery-1.jpg?alt=media&token=eba27b1b-7fd6-49fa-89d2-cadac3e82fa3',
                    photo1MobileWidth: '654w',
                    photo1Tablet: 'https://firebasestorage.googleapis.com/v0/b/audiophile-db.appspot.com/o/assets%2Fimages%2Fproduct-yx1-earphones%2Ftablet%2Fimage-gallery-1.jpg?alt=media&token=b1692e0b-045f-4724-baba-71cbf1c61ab9',
                    photo1TabletWidth: '831w',
                    photo1Desktop: 'https://firebasestorage.googleapis.com/v0/b/audiophile-db.appspot.com/o/assets%2Fimages%2Fproduct-yx1-earphones%2Fdesktop%2Fimage-gallery-1.jpg?alt=media&token=9fad1386-5cca-4a5f-9afd-b1bebae71d76',
                    photo1DesktopWidth: '445w',

                    photo2Mobile: 'https://firebasestorage.googleapis.com/v0/b/audiophile-db.appspot.com/o/assets%2Fimages%2Fproduct-yx1-earphones%2Fmobile%2Fimage-gallery-2.jpg?alt=media&token=9d4624f8-daa6-4bb9-9009-4ebff4b8dac3',
                    photo2MobileWidth: '654w',
                    photo2Tablet: 'https://firebasestorage.googleapis.com/v0/b/audiophile-db.appspot.com/o/assets%2Fimages%2Fproduct-yx1-earphones%2Ftablet%2Fimage-gallery-2.jpg?alt=media&token=fd3cea7c-3484-4a87-b7b5-3c204e79e3f4',
                    photo2TabletWidth: '831w',
                    photo2Desktop: 'https://firebasestorage.googleapis.com/v0/b/audiophile-db.appspot.com/o/assets%2Fimages%2Fproduct-yx1-earphones%2Fdesktop%2Fimage-gallery-2.jpg?alt=media&token=b7850675-4a90-4acc-90d2-88dd14ebcb25',
                    photo2DesktopWidth: '445w',

                    photo3Mobile: 'https://firebasestorage.googleapis.com/v0/b/audiophile-db.appspot.com/o/assets%2Fimages%2Fproduct-yx1-earphones%2Fmobile%2Fimage-gallery-3.jpg?alt=media&token=2d8b9386-ebc0-490a-a120-85f9f19a75e0',
                    photo3MobileWidth: '491w',
                    photo3Tablet: 'https://firebasestorage.googleapis.com/v0/b/audiophile-db.appspot.com/o/assets%2Fimages%2Fproduct-yx1-earphones%2Ftablet%2Fimage-gallery-3.jpg?alt=media&token=3715f11c-da73-41b1-b7ff-d6f6492fef25',
                    photo3TabletWidth: '1185w',
                    photo3Desktop: 'https://firebasestorage.googleapis.com/v0/b/audiophile-db.appspot.com/o/assets%2Fimages%2Fproduct-yx1-earphones%2Fdesktop%2Fimage-gallery-3.jpg?alt=media&token=b66be8bb-91d8-41b3-949a-f24cbb723378',
                    photo3DesktopWidth: '1270w',

                },
                relatedProducts: [
                    {
                        id: 1,
                        name: 'XX99 MARK I',
                        photoMobile: 'https://firebasestorage.googleapis.com/v0/b/audiophile-db.appspot.com/o/assets%2Fimages%2Fproduct-xx99-mark-one-headphones%2Fmobile%2Fimage-removebg-preview.png?alt=media&token=b216f6ed-a1a3-435e-a1ca-4baa2392d6ec',
                        photoMobileWidth: '293w',
                        photoTablet: 'https://firebasestorage.googleapis.com/v0/b/audiophile-db.appspot.com/o/assets%2Fimages%2Fproduct-xx99-mark-one-headphones%2Ftablet%2Fimage-removebg-preview.png?alt=media&token=8b072dea-b1ba-449e-9a09-fea24f6a94b6',
                        photoTabletWidth: '594w',
                        photoDesktop: '',
                        photoDesktopWidth: '',

                    },
                    {
                        id: 2,
                        name: 'XX59',
                        photoMobile: 'https://firebasestorage.googleapis.com/v0/b/audiophile-db.appspot.com/o/assets%2Fimages%2Fproduct-xx59-headphones%2Fmobile%2Fimage-removebg-preview.png?alt=media&token=41af9468-856f-405f-9c8d-dd158854205a',
                        photoMobileWidth: '293w',
                        photoTablet: 'https://firebasestorage.googleapis.com/v0/b/audiophile-db.appspot.com/o/assets%2Fimages%2Fproduct-xx59-headphones%2Ftablet%2Fimage-removebg-preview.png?alt=media&token=811c383c-9341-40af-9809-661e31d40eae',
                        photoTabletWidth: '594w',
                        photoDesktop: '',
                        photoDesktopWidth: '',

                    },
                    {
                        id: 3,
                        name: 'ZX9 SPEAKER',
                        photoMobile: 'https://firebasestorage.googleapis.com/v0/b/audiophile-db.appspot.com/o/assets%2Fimages%2Fproduct-zx9-speaker%2Fmobile%2Fimage-removebg-preview.png?alt=media&token=3d66115a-f405-4b63-8722-f84e3fb08b1e',
                        photoMobileWidth: '144w',
                        photoTablet: 'https://firebasestorage.googleapis.com/v0/b/audiophile-db.appspot.com/o/assets%2Fimages%2Fproduct-zx9-speaker%2Ftablet%2Fimage-removebg-preview.png?alt=media&token=63a88a1c-b8fa-45cd-a8a2-25a420669ac1',
                        photoTabletWidth: '573w',
                        photoDesktop: '',
                        photoDesktopWidth: '',

                    },
                ],
            }
        ]
    }
];

export default PRODUCTS;


// const products = {
// headphones: [
//     {
//         id: 1,
//         isNewProduct: true,
//         name: 'XX99 Mark II Headphones',
//         description: 'The new XX99 Mark II headphones is the pinnacle of pristine audio. It redefines your premium headphone experience by reproducing the balanced depth and precision of studio-quality sound.',
//         price: 1214,
//         imgUrlMobile: imgUrlMobileXx99M2,
//         imgUrlMobileWidth: '491w',
//         imgUrlTablet: '',
//         imgUrlTabletWidth: '',
//         imgUrlDesktop: imgUrlDesktopXx99M2,
//         imgUrlDesktopWidth: '1080w',
//         productPageSlug: 'xx99-mark-ii-headphones',
//         features: "Featuring a genuine leather head strap and premium earcups, these headphones deliver superior comfort for those who like to enjoy endless listening. It includes intuitive controls designed for any situation. Whether you’re taking a business call or just in your own personal space, the auto on/off and pause features ensure that you'll never miss a beat. The advanced Active Noise Cancellation with built-in equalizer allow you to experience your audio world on your terms. It lets you enjoy your audio in peace, but quickly interact with your surroundings when you need to. Combined with Bluetooth 5. 0 compliant connectivity and 17 hour battery life, the XX99 Mark II headphones gives you superior sound, cutting-edge technology, and a modern design aesthetic.",
//         inTheBox: [
//             {
//                 id: 1,
//                 description: 'Headphone Unit',
//                 quantity: 1
//             },
//             {
//                 id: 2,
//                 description: 'Replacement Earcups',
//                 quantity: 2
//             },
//             {
//                 id: 3,
//                 description: 'User Manual',
//                 quantity: 1
//             },
//             {
//                 id: 4,
//                 description: '3.5mm 5m Audio Cable',
//                 quantity: 1
//             },
//             {
//                 id: 5,
//                 description: 'Travel Bag',
//                 quantity: 1
//             },
//         ],
//         galleryPhotos: {
//             photo1Mobile: photo1UrlMobileXx99M2,
//             photo1MobileWidth: '654w',
//             photo1Tablet: photo1UrlTabletXx99M2,
//             photo1TabletWidth: '831w',
//             photo1Desktop: photo1UrlDesktopXx99M2,
//             photo1DesktopWidth: '445w',

//             photo2Mobile: photo2UrlMobileXx99M2,
//             photo2MobileWidth: '654w',
//             photo2Tablet: photo2UrlTabletXx99M2,
//             photo2TabletWidth: '831w',
//             photo2Desktop: photo2UrlDesktopXx99M2,
//             photo2DesktopWidth: '445w',

//             photo3Mobile: photo3UrlMobileXx99M2,
//             photo3MobileWidth: '491w',
//             photo3Tablet: photo3UrlTabletXx99M2,
//             photo3TabletWidth: '1185w',
//             photo3Desktop: photo3UrlDesktopXx99M2,
//             photo3DesktopWidth: '1270w',

//         },
//         relatedProducts: [
//             {
//                 id: 1,
//                 name: 'XX99 MARK I',
//                 photoMobile: suggested1MobileXx99M2,
//                 photoMobileWidth: '293w',
//                 photoTablet: suggested1TabletXx99M2,
//                 photoTabletWidth: '594w',
//                 photoDesktop: '',
//                 photoDesktopWidth: '',

//             },
//             {
//                 name: 'XX59',
//                 photoMobile: suggested2MobileXx99M2,
//                 photoMobileWidth: '293w',
//                 photoTablet: suggested2TabletXx99M2,
//                 photoTabletWidth: '594w',
//                 photoDesktop: '',
//                 photoDesktopWidth: '',

//             },
//             {
//                 name: 'ZX9 SPEAKER',
//                 photoMobile: suggested3MobileXx99M2,
//                 photoMobileWidth: '144w',
//                 photoTablet: suggested3TabletXx99M2,
//                 photoTabletWidth: '573w',
//                 photoDesktop: '',
//                 photoDesktopWidth: '',

//             },
//         ],

//     },
//     {
//         id: 2,
//         isNewProduct: false,
//         name: 'XX99 Mark I Headphones',
//         description: 'As the gold standard for headphones, the classic XX99 Mark I offers detailed and accurate audio reproduction for audiophiles, mixing engineers, and music aficionados alike in studios and on the go.',
//         price: 1021,
//         imgUrlMobile: imgUrlMobileXx99M1,
//         imgUrlMobileWidth: '520w',
//         imgUrlTablet: '',
//         imgUrlTabletWidth: '',
//         imgUrlDesktop: imgUrlDesktopXx99M1,
//         imgUrlDesktopWidth: '1080w',
//         productPageSlug: 'xx99-mark-i-headphones',
//         features: "As the headphones all others are measured against, the XX99 Mark I demonstrates over five decades of audio expertise, redefining the critical listening experience. This pair of closed-back headphones are made of industrial, aerospace-grade materials to emphasize durability at a relatively light weight of 11 oz. From the handcrafted microfiber ear cushions to the robust metal headband with inner damping element, the components work together to deliver comfort and uncompromising sound. Its closed-back design delivers up to 27 dB of passive noise cancellation, reducing resonance by reflecting sound to a dedicated absorber. For connectivity, a specially tuned cable is included with a balanced gold connector.",
//         inTheBox: [
//             {
//                 id: 1,
//                 description: 'Headphone Unit',
//                 quantity: 1
//             },
//             {
//                 id: 2,
//                 description: 'Replacement Earcups',
//                 quantity: 2
//             },
//             {
//                 id: 3,
//                 description: 'User Manual',
//                 quantity: 1
//             },
//             {
//                 id: 4,
//                 description: '3.5mm 5m Audio Cable',
//                 quantity: 1
//             },
//             {
//                 id: 5,
//                 description: 'Travel Bag',
//                 quantity: 0
//             },
//         ],
//         galleryPhotos: {
//             photo1: photo1Xx99M1,
//             photo2: photo2Xx99M1,
//             photo3: photo3Xx99M1,
//         },
//         relatedProducts: [
//             {
//                 id: 1,
//                 name: 'XX99 MARK I',
//                 photoMobile: suggested1MobileXx99M2,
//                 photoMobileWidth: '293w',
//                 photoTablet: suggested1TabletXx99M2,
//                 photoTabletWidth: '594w',
//                 photoDesktop: '',
//                 photoDesktopWidth: '',

//             },
//             {
//                 name: 'XX59',
//                 photoMobile: suggested2MobileXx99M2,
//                 photoMobileWidth: '293w',
//                 photoTablet: suggested2TabletXx99M2,
//                 photoTabletWidth: '594w',
//                 photoDesktop: '',
//                 photoDesktopWidth: '',

//             },
//             {
//                 name: 'ZX9 SPEAKER',
//                 photoMobile: suggested3MobileXx99M2,
//                 photoMobileWidth: '144w',
//                 photoTablet: suggested3TabletXx99M2,
//                 photoTabletWidth: '573w',
//                 photoDesktop: '',
//                 photoDesktopWidth: '',

//             },
//         ],
//     },
//     {
//         id: 3,
//         isNewProduct: false,
//         name: 'XX59 Headphones',
//         description: 'Enjoy your audio almost anywhere and customize it to your specific tastes with the XX59 headphones. The stylish yet durable versatile wireless headset is a brilliant companion at home or on the move.',
//         price: 1987,
//         imgUrlMobile: imgUrlMobileXx59,
//         imgUrlMobileWidth: '649w',
//         imgUrlTablet: '',
//         imgUrlTabletWidth: '',
//         imgUrlDesktop: imgUrlDesktopXx59,
//         imgUrlDesktopWidth: '1080w',
//         productPageSlug: 'XX59-headphones',
//         features: "These headphones have been created from durable, high-quality materials tough enough to take anywhere. Its compact folding design fuses comfort and minimalist style making it perfect for travel. Flawless transmission is assured by the latest wireless technology engineered for audio synchronization with videos. More than a simple pair of headphones, this headset features a pair of built-in microphones for clear, hands-free calling when paired with a compatible smartphone. Controlling music and calls is also intuitive thanks to easy-access touch buttons on the earcups. Regardless of how you use the XX59 headphones, you can do so all day thanks to an impressive 30-hour battery life that can be rapidly recharged via USB-C.",
//         inTheBox: [
//             {
//                 id: 1,
//                 description: 'Headphone Unit',
//                 quantity: 1
//             },
//             {
//                 id: 2,
//                 description: 'Replacement Earcups',
//                 quantity: 2
//             },
//             {
//                 id: 3,
//                 description: 'User Manual',
//                 quantity: 1
//             },
//             {
//                 id: 4,
//                 description: '3.5mm 5m Audio Cable',
//                 quantity: 1
//             },
//             {
//                 id: 5,
//                 description: 'Travel Bag',
//                 quantity: 0
//             },
//         ],
//         galleryPhotos: {
//             photo1: photo1Xx59,
//             photo2: photo2Xx59,
//             photo3: photo3Xx59,
//         },
//         relatedProducts: [
//             {
//                 id: 1,
//                 name: 'XX99 MARK I',
//                 photoMobile: suggested1MobileXx99M2,
//                 photoMobileWidth: '293w',
//                 photoTablet: suggested1TabletXx99M2,
//                 photoTabletWidth: '594w',
//                 photoDesktop: '',
//                 photoDesktopWidth: '',

//             },
//             {
//                 name: 'XX59',
//                 photoMobile: suggested2MobileXx99M2,
//                 photoMobileWidth: '293w',
//                 photoTablet: suggested2TabletXx99M2,
//                 photoTabletWidth: '594w',
//                 photoDesktop: '',
//                 photoDesktopWidth: '',

//             },
//             {
//                 name: 'ZX9 SPEAKER',
//                 photoMobile: suggested3MobileXx99M2,
//                 photoMobileWidth: '144w',
//                 photoTablet: suggested3TabletXx99M2,
//                 photoTabletWidth: '573w',
//                 photoDesktop: '',
//                 photoDesktopWidth: '',

//             },
//         ],
//     }
// ],

//     speakers: [
//         {
//             id: 1,
//             isNewProduct: true,
//             name: 'ZX9 Speaker',
//             description: 'Upgrade your sound system with the all new ZX9 active speaker. It’s a bookshelf speaker system that offers truly wireless connectivity -- creating new possibilities for more pleasing and practical audio setups.',
//             price: 1987,
//             imgUrlMobile: imgUrlMobileZx9,
//             imgUrlMobileWidth: '584w',
//             imgUrlTablet: '',
//             imgUrlTabletWidth: '',
//             imgUrlDesktop: imgUrlDesktopZx9,
//             imgUrlDesktopWidth: '875w',
//             productPageSlug: 'zx9-speaker',
//             features: "Connect via Bluetooth or nearly any wired source. This speaker features optical, digital coaxial, USB Type-B, stereo RCA, and stereo XLR inputs, allowing you to have up to five wired source devices connected for easy switching. Improved bluetooth technology offers near lossless audio quality at up to 328ft (100m).Discover clear, more natural sounding highs than the competition with ZX9's signature planar diaphragm tweeter. Equally important is its powerful room-shaking bass courtesy of a 6.5” aluminum alloy bass unit. You'll be able to enjoy equal sound quality whether in a large room or small den. Furthermore, you will experience new sensations from old songs since it can respond to even the subtle waveforms.",
//             inTheBox: [
//                 {
//                     id: 1,
//                     description: 'Headphone Unit',
//                     quantity: 1
//                 },
//                 {
//                     id: 2,
//                     description: 'Replacement Earcups',
//                     quantity: 2
//                 },
//                 {
//                     id: 3,
//                     description: 'User Manual',
//                     quantity: 1
//                 },
//                 {
//                     id: 4,
//                     description: '3.5mm 5m Audio Cable',
//                     quantity: 1
//                 },
//                 {
//                     id: 5,
//                     description: '10m Optical Cable',
//                     quantity: 1
//                 },
//             ],
//             galleryPhotos: {
//                 photo1: '',
//                 photo2: '',
//                 photo3: '',
//             },
//             relatedProducts: [
//                 {
//                     id: 1,
//                     name: 'XX99 MARK I',
//                     photoMobile: suggested1MobileXx99M2,
//                     photoMobileWidth: '293w',
//                     photoTablet: suggested1TabletXx99M2,
//                     photoTabletWidth: '594w',
//                     photoDesktop: '',
//                     photoDesktopWidth: '',

//                 },
//                 {
//                     name: 'XX59',
//                     photoMobile: suggested2MobileXx99M2,
//                     photoMobileWidth: '293w',
//                     photoTablet: suggested2TabletXx99M2,
//                     photoTabletWidth: '594w',
//                     photoDesktop: '',
//                     photoDesktopWidth: '',

//                 },
//                 {
//                     name: 'ZX9 SPEAKER',
//                     photoMobile: suggested3MobileXx99M2,
//                     photoMobileWidth: '144w',
//                     photoTablet: suggested3TabletXx99M2,
//                     photoTabletWidth: '573w',
//                     photoDesktop: '',
//                     photoDesktopWidth: '',

//                 },
//             ],
//         },
//         {
//             id: 2,
//             isNewProduct: false,
//             name: 'ZX7 Speaker',
//             description: 'Stream high quality sound wirelessly with minimal loss. The ZX7 bookshelf speaker uses high-end audiophile components that represents the top of the line powered speakers for home or studio use.',
//             price: 1789,
//             imgUrlMobile: imgUrlMobileZx7,
//             imgUrlMobileWidth: '537w',
//             imgUrlTablet: '',
//             imgUrlTabletWidth: '',
//             imgUrlDesktop: imgUrlDesktopZx7,
//             imgUrlDesktopWidth: '1074w',
//             productPageSlug: 'zx7-speaker',
//             features: "Reap the advantages of a flat diaphragm tweeter cone. This provides a fast response rate and excellent high frequencies that lower tiered bookshelf speakers cannot provide. The woofers are made from aluminum that produces a unique and clear sound. XLR inputs allow you to connect to a mixer for more advanced usage.The ZX7 speaker is the perfect blend of stylish design and high performance. It houses an encased MDF wooden enclosure which minimises acoustic resonance. Dual connectivity allows pairing through bluetooth or traditional optical and RCA input. Switch input sources and control volume at your finger tips with the included wireless remote. This versatile speaker is equipped to deliver an authentic listening experience.",
//             inTheBox: [
//                 {
//                     id: 1,
//                     description: 'Headphone Unit',
//                     quantity: 1
//                 },
//                 {
//                     id: 2,
//                     description: 'Replacement Earcups',
//                     quantity: 2
//                 },
//                 {
//                     id: 3,
//                     description: 'User Manual',
//                     quantity: 1
//                 },
//                 {
//                     id: 4,
//                     description: '3.5mm 5m Audio Cable',
//                     quantity: 1
//                 },
//                 {
//                     id: 5,
//                     description: '7.5m Optical Cable',
//                     quantity: 1
//                 },
//             ],
//             galleryPhotos: {
//                 photo1: '',
//                 photo2: '',
//                 photo3: '',
//             },
//             relatedProducts: [
//                 {
//                     id: 1,
//                     name: 'XX99 MARK I',
//                     photoMobile: suggested1MobileXx99M2,
//                     photoMobileWidth: '293w',
//                     photoTablet: suggested1TabletXx99M2,
//                     photoTabletWidth: '594w',
//                     photoDesktop: '',
//                     photoDesktopWidth: '',

//                 },
//                 {
//                     name: 'XX59',
//                     photoMobile: suggested2MobileXx99M2,
//                     photoMobileWidth: '293w',
//                     photoTablet: suggested2TabletXx99M2,
//                     photoTabletWidth: '594w',
//                     photoDesktop: '',
//                     photoDesktopWidth: '',

//                 },
//                 {
//                     name: 'ZX9 SPEAKER',
//                     photoMobile: suggested3MobileXx99M2,
//                     photoMobileWidth: '144w',
//                     photoTablet: suggested3TabletXx99M2,
//                     photoTabletWidth: '573w',
//                     photoDesktop: '',
//                     photoDesktopWidth: '',

//                 },
//             ],
//         }
//     ],
//         earphones: [
//             {
//                 id: 1,
//                 isNewProduct: true,
//                 name: 'YX1 Wireless Earphones',
//                 price: 345,
//                 description: 'Tailor your listening experience with bespoke dynamic drivers from the new YX1 Wireless Earphones. Enjoy incredible high-fidelity sound even in noisy environments with its active noise cancellation feature.',
//                 imgUrlMobile: imgUrlMobileYx1,
//                 imgUrlMobileWidth: '649w',
//                 imgUrlTablet: '',
//                 imgUrlTabletWidth: '',
//                 imgUrlDesktop: imgUrlDesktopYx1,
//                 imgUrlDesktopWidth: '1080w',
//                 productPageSlug: 'yx1-wireless-earphones',
//                 features: "Experience unrivalled stereo sound thanks to innovative acoustic technology. With improved ergonomics designed for full day wearing, these revolutionary earphones have been finely crafted to provide you with the perfect fit, delivering complete comfort all day long while enjoying exceptional noise isolation and truly immersive sound. The YX1 Wireless Earphones features customizable controls for volume, music, calls, and voice assistants built into both earbuds. The new 7-hour battery life can be extended up to 28 hours with the charging case, giving you uninterrupted play time. Exquisite craftsmanship with a splash resistant design now available in an all new white and grey color scheme as well as the popular classic black.",
//                 inTheBox: [
//                     {
//                         id: 1,
//                         description: 'Earphone Unit',
//                         quantity: 2
//                     },
//                     {
//                         id: 2,
//                         description: 'Multi-sized earplugs',
//                         quantity: 6
//                     },
//                     {
//                         id: 3,
//                         description: 'User Manual',
//                         quantity: 1
//                     },
//                     {
//                         id: 4,
//                         description: 'USB-C Charging Cable',
//                         quantity: 1
//                     },
//                     {
//                         id: 5,
//                         description: 'Travel Pouch',
//                         quantity: 1
//                     },
//                 ],
//                 galleryPhotos: {
//                     photo1: '',
//                     photo2: '',
//                     photo3: '',
//                 },
//                 relatedProducts: [
//                     {
//                         id: 1,
//                         name: 'XX99 MARK I',
//                         photoMobile: suggested1MobileXx99M2,
//                         photoMobileWidth: '293w',
//                         photoTablet: suggested1TabletXx99M2,
//                         photoTabletWidth: '594w',
//                         photoDesktop: '',
//                         photoDesktopWidth: '',

//                     },
//                     {
//                         name: 'XX59',
//                         photoMobile: suggested2MobileXx99M2,
//                         photoMobileWidth: '293w',
//                         photoTablet: suggested2TabletXx99M2,
//                         photoTabletWidth: '594w',
//                         photoDesktop: '',
//                         photoDesktopWidth: '',

//                     },
//                     {
//                         name: 'ZX9 SPEAKER',
//                         photoMobile: suggested3MobileXx99M2,
//                         photoMobileWidth: '144w',
//                         photoTablet: suggested3TabletXx99M2,
//                         photoTabletWidth: '573w',
//                         photoDesktop: '',
//                         photoDesktopWidth: '',

//                     },
//                 ],
//             }
//         ]
// };