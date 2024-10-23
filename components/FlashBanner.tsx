
import { useState, useEffect } from 'react';
import Image from 'next/image';
import FinalBanner from "../public/assets/home/Final Banner.jpeg";

const FlashBanner = () => {
    const [visible, setVisible] = useState(true);

    const closeBanner = () => {
        setVisible(false);
    };

    useEffect(() => {
        // Make the banner visible again when the component mounts
        setVisible(true);
    }, []);

    if (!visible) return null;

    return (
        <div className="fixed inset-0 flex items-center justify-center z-50">
            <div className="absolute inset-0 bg-black opacity-65" /> 

            <div className="relative max-w-2xl w-full"> 
                <Image 
                    src={FinalBanner}
                    alt="Welcome to Crescent Academy" 
                    layout="responsive" 
                    width={1200} 
                    height={600}
                    className="rounded-md shadow-md"
                />
                <button
                    onClick={closeBanner}
                    className="absolute top-2 right-2 bg-white text-black rounded-full p-1 focus:outline-none"
                >
                    &times;
                </button>
            </div>
        </div>
    );
};

export default FlashBanner;
