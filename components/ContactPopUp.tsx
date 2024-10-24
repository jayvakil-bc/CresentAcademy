
import React from 'react';
import Image from 'next/image';
import Logo from '../public/assets/home/logo.png'; 

interface ContactPopupProps{
    isOpen: boolean; 
    onClose: () => void;
}

const ContactPopup: React.FC<ContactPopupProps> = ({ isOpen, onClose }) => {
    if (!isOpen) return null; 

    return (
        <div className="fixed inset-0 bg-black bg-opacity-80 flex justify-center items-center z-50">
            <div className="bg-white rounded-lg shadow-lg p-6 relative max-w-md mx-auto"> 
                <button onClick={onClose} className="absolute top-2 right-2 text-gray-500">
                    &times; 
                </button>
                <div className="flex items-center mb-4">
                    <Image src={Logo} alt="Crescent Academy Logo" className="h-16 w-auto mr-2" />
                </div>
                <h2 className="text-2xl font-bold mb-4">Contact Us</h2>
                <p className="mb-2"><strong>Phone:</strong> +1 (289) 236-1840</p>
                <p className="mb-2"><strong>Address:</strong> 40 Innovation Dr unit 8b, Woodbridge, ON L4H 0T2, Canada</p>
                <p className="mb-2">
                    <strong>Email:</strong> 
                    <a href="mailto:info@crescentacademy.com" className="text-blue-500 hover:underline">  info@crescentacademy.com</a>
                </p>
            </div>
        </div>
    );
};

export default ContactPopup;
