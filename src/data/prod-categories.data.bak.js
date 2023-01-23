import desktopImageHeadphones from 'https://firebasestorage.googleapis.com/v0/b/audiophile-db.appspot.com/o/assets%2Fimages%2Fshared%2Fdesktop%2Fimage-category-thumbnail-headphones.png?alt=media&token=9b906c25-a5ab-4133-96e5-b07bef8408da';
import desktopImageSpeakers from '../assets/images/shared/desktop/image-category-thumbnail-speakers.png';
import desktopImageEarphones from '../assets/images/shared/desktop/image-category-thumbnail-earphones.png';

const prodCategories = [
    {
        id: 1,
        imgUrl: desktopImageHeadphones,
        heading: 'Headphones',
        altText: 'Headphone',
        url: '/shop/headphones',
    },
    {
        id: 2,
        imgUrl: desktopImageSpeakers,
        heading: 'Speakers',
        altText: 'Audio Speaker',
        url: '/shop/speakers',
    },
    {
        id: 3,
        imgUrl: desktopImageEarphones,
        heading: 'Earphones',
        altText: 'Audio Earphone',
        url: '/shop/earphones',
    },
];

export default prodCategories;