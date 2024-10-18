import Image from 'next/image';
import AboutImg from '../public/assets/home/group.png';

const Mission = () => {
    return (
        <div id='about' className='w-full md:h-screen p-2 flex items-center py-16'>
            <div className='max-w-[1240px] m-auto md:grid grid-cols-3 gap-8'>
                <div className='col-span-2 text-center'> 
                    <h1 className="text-3xl md:text-6xl font-bold leading-tight mb-4">
                        Our Mission
                    </h1>
                    <p className='py-2 text-gray-600 text-md md:text-lg mx-auto max-w-lg'> 
                        Crescent Academy fosters a nurturing and innovative learning atmosphere. 
                        We are dedicated to unlocking the full potential of every student, providing them with the tools, support, and motivation needed to thrive. 
                        Our commitment to excellence drives us to continuously enhance our programs and services, ensuring a rewarding educational journey for all.
                    </p>
                    <a href="#programs">
                        <button className="bg-[#17008c] text-white py-3 px-6 hover:bg-[#4b44c1] transition duration-300">
                            Explore Programs
                        </button>
                    </a>
                </div>
                <div className='w-full h-auto md:col-span-1 flex justify-center'>
                    <div className="border-2 border-[#ecf0f3] rounded-xl w-full max-w-[400px]"> 
                        <Image 
                            src={AboutImg} 
                            className='rounded-xl' 
                            alt='About Image' 
                            layout="responsive" 
                            width={500}
                            height={400}
                        />
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Mission;
