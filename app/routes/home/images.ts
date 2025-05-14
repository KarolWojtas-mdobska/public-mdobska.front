import type { ResponsiveImageSource } from "~/components/common/responsive-image";

export enum HomeImages {
    profile = 'profile',
    bands = 'bands',
    scrunchies = 'scrunchies',
};

const images: Record<HomeImages, ResponsiveImageSource[]> = {
    [HomeImages.profile]: [
        {
            url: 'https://lh3.googleusercontent.com/d/1M3bJHwMG_31kNzV1qTAdhhTmP5JXs89b',
            // url: 'https://bit.ly/naruto-sage',
            alt: 'Profile picture',                        
        },        
    ],
    [HomeImages.bands]: [
        {
            url: '/images/bands.webp',
            alt: 'Bands'
        }
    ],
    [HomeImages.scrunchies]: [
        {
            url: '/images/scrunchies.webp',
            alt: 'Scrunchies'
        }
    ],
};

export default images;