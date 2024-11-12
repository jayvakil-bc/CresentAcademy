import Image from 'next/image'; 
import Logo from '../public/assets/home/logo.png'; 

const Footer = () => {
    return (
        <footer className="bg-gray-800 text-white py-8">
            <div className="container mx-auto flex flex-col md:flex-row justify-between items-center px-4">
                <div className="flex items-center mb-4 md:mb-0">
                    <Image src={Logo} alt="Crescent Academy Logo" className="h-20 w-auto" /> 
                </div>
                <div className="flex flex-col md:flex-row">
                    <div className="mb-4 md:mb-0 md:mr-8">
                        <p className="text-sm">40 Innovation Dr Unit 8b,<br/> Woodbridge, ON L4H 0T2,<br/> Canada</p>
                    </div>
                    <div className="mb-4 md:mb-0 md:mr-8">
                        <p className="text-sm">Phone: +1(905) 266-1087</p>
                        <a href="mailto:CresAcademy.Woodbridge@gmail.com" className="text-sm hover:underline">
                            Email: CresAcademy.Woodbridge@gmail.com
                        </a>
                    </div>
                </div>
            </div>
            <div className="text-center mt-4">
                <p className="text-xs">&copy; {new Date().getFullYear()} Crescent Academy. All rights reserved.</p>
            </div>
        </footer>
    );
};

export default Footer;
