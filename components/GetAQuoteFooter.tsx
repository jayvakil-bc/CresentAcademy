'use client';
import { useState } from 'react';

interface FormData {
    name: string;
    email: string;
    message: string;
}

const GetAQuoteFooter = () => {
    const [formData, setFormData] = useState<FormData>({
        name: '',
        email: '',
        message: ''
    });

    const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
        const { name, value } = e.target;
        setFormData({
            ...formData,
            [name]: value
        });
    };

    const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();

        try {
            const response = await fetch('/api/sendEmail', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify(formData), // Send form data as JSON
            });

            if (response.ok) {
                const data = await response.json();
                console.log(data.message); 
                alert("Mail Sent Successfully!")
                setFormData({ name: '', email: '', message: '' }); // Reset form
            } else {
                const errorData = await response.json();
                console.error('Error:', errorData.message); // Error message
            }
        } catch (error) {
            console.error('Error sending email:', error);
        }
    };

    return (
        <footer id="GetAQuote" className="bg-[#17008c] text-white p-10">
            <div className="max-w-lg mx-auto text-center">
                <h2 className="text-4xl font-bold mb-6">Get a Quote</h2>
                <form className="space-y-4" onSubmit={handleSubmit}>
                    <div>
                        <label className="block text-sm font-bold mb-2">Name</label>
                        <input
                            type="text"
                            name="name"
                            value={formData.name}
                            onChange={handleInputChange}
                            placeholder="Your name"
                            className="w-full p-2 border border-gray-300 rounded-md text-black" // Set text color to black
                            required
                        />
                    </div>
                    <div>
                        <label className="block text-sm font-bold mb-2">Email</label>
                        <input
                            type="email"
                            name="email"
                            value={formData.email}
                            onChange={handleInputChange}
                            placeholder="Your email"
                            className="w-full p-2 border border-gray-300 rounded-md text-black" // Set text color to black
                            required
                        />
                    </div>
                    <div>
                        <label className="block text-sm font-bold mb-2">Message</label>
                        <textarea
                            name="message"
                            value={formData.message}
                            onChange={handleInputChange}
                            placeholder="Your message"
                            className="w-full p-2 border border-gray-300 rounded-md text-black"
                            required
                        />
                    </div>
                    <button
                        type="submit"
                        className="w-full bg-white text-[#17008c] py-2 px-4 rounded-md hover:bg-gray-200 transition"
                    >
                        Submit
                    </button>
                </form>
            </div>
        </footer>
    );
};

export default GetAQuoteFooter;
