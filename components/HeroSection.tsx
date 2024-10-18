import Image from 'next/image'; 
import BgImage from '../public/assets/home/teacher.jpg'; 

const HeroSection = () => {
    return (
        <div className="relative w-full h-screen flex items-center justify-center overflow-hidden">
            <Image 
                src={BgImage} 
                alt="Hero Background" 
                layout="fill" 
                objectFit="cover" 
                className="absolute top-0 left-0 z-0" 
            />
           <div className="absolute top-0 left-0 w-full h-full bg-black opacity-50 z-10" />
            <div className="relative z-20 text-black text-left px-2 flex justify-center items-center h-full">
            <div className="bg-[#ecf0f3] bg-opacity-100 p-4 w-3/4 md:w-1/2 h-[500px] flex flex-col justify-center">
                <h1 className="text-2xl md:text-5xl  font-bold leading-tight mb-2"> 
                    Discover Crescent
                </h1>
                <p className="text-lg md:text-lg mb-6">
                    Welcome to Crescent Academy – Where Learning Shines Bright!
                </p>
                <p className="text-lg md:text-lg mb-6">
                At Crescent Academy, we are committed to providing top-notch educational support and enrichment programs for students from kindergarten to grade 12. 
                Our goal is to foster a love for learning and help each student reach their full potential. 
                Join us on a journey of academic excellence and personal growth!
                </p>
                <br />
               <a href="/programs">
                    <button className="bg-[#17008c] text-white py-3 px-3 hover:bg-[#4b44c1] transition duration-300">
                        Explore Programs
                    </button>
                </a>
            </div>
            </div>
        </div>
    );
}

export default HeroSection;
