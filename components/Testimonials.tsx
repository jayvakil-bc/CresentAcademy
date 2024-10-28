import { FaUserCircle } from 'react-icons/fa'; 

const Testimonials = () => {
    const testimonials = [
        {
            name: "8th Grade",
            text: "Crescent Academy has been a game-changer for my child&apos;s education. The tutors are fantastic, motivating and engaging students.",
            role: "Parent",
        },
        {
            name: "10th Grade",
            text: "I struggled with math for years, but after a few months at Crescent Academy, my grades improved dramatically. I actually enjoy math now!",
            role: "Student",
        },
        {
            name: "7th Grade",
            text: "The French tutoring program is amazing! My son went from barely passing to getting A's on his tests. Merci Crescent Academy!",
            role: "Parent",
        },
    ];

    return (
        <div id="testimonials" className="w-full p-8 bg-[#f8f9fa] mt-20">
            <h2 className="text-center text-4xl font-bold mb-8 text-gray-900">What Our Students Say</h2>
            <div className="max-w-[1240px] mx-auto grid grid-cols-1 md:grid-cols-3 gap-8">
                {testimonials.map((testimonial, index) => (
                    <div key={index} className="bg-white p-8 rounded-lg shadow-md transition-transform transform hover:scale-105 flex flex-col items-center">
                        <div className="mb-4">
                            <FaUserCircle className="text-6xl text-[#17008c]" /> 
                        </div>
                        <p className="text-gray-600 text-lg mb-4">&quot;{testimonial.text}&quot;</p>
                        <h3 className="text-xl font-semibold mb-1 text-gray-900">{testimonial.name}</h3>
                        <p className="text-gray-500 text-md">{testimonial.role}</p>
                    </div>
                ))}
            </div>
        </div>
    );
}

export default Testimonials;
