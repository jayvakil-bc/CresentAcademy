import React from 'react';
import Image from 'next/image';
import BannerImg from '../public/assets/home/Banner2.png';

const Banner = () => {
    return (
        <div className="relative w-full h-[300px] md:h-[400px]"> {/* Set a height that works on mobile */}
            <Image 
                src={BannerImg} 
                alt="Hero Background" 
                layout="responsive"  // Makes the image responsive
                width={1920}  // Specify the original width of the image
                height={1080} // Specify the original height of the image
                objectFit="cover" // Maintain the aspect ratio while covering the area
                className="rounded-lg" // Optional: Rounded corners
            />
        </div>
    );
}

export default Banner;
