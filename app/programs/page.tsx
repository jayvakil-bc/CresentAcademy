'use client'
import Footer from '@/components/Footer';
import ProgNavbar from '@/components/ProgNavbar';
import GetAQuoteFooter from '@/components/GetAQuoteFooter';
import React,{} from 'react';

// Programs data (General)
const programsData = [
    {
        title: "Elementary Programs",
        description: "Our Elementary programs foster curiosity and build strong foundations in core subjects like Math, Science, and Languages. We help young minds explore and learn in a supportive environment.",
        bgColor: "bg-[#D0E2FF]", // Light blue for background
    },
    {
        title: "Middle School Programs",
        description: "Middle school is a crucial time for students. Our programs are designed to enhance critical thinking, develop problem-solving skills, and ensure academic success across all subjects.",
        bgColor: "bg-[#FFCC80]", // Soft yellow for background
    },
    {
        title: "High School Programs",
        description: "Our High School programs provide advanced academic support, preparing students for college and beyond. With specialized tutoring in Math, Science, and Languages, students can excel in their studies.",
        bgColor: "bg-[#D0F0C0]", // Soft green for background
    },
    {
        title: "Specialized Courses",
        description: "In addition to academic tutoring, we offer specialized courses for exam preparation, language skills, and more. Tailored to individual needs, these courses help students achieve their academic goals.",
        bgColor: "bg-[#FFD1DC]", // Soft pink for background
    },
];

// Key points of programs
const keyPoints = [
    {
        title: "Unlock Your Potential",
        description: "Explore the world of numbers and problem-solving with our Mathematics Mastery program. Develop a strong foundation in math concepts and boost your analytical skills with personalized guidance.",
    },
    {
        title: "Academic Assistance",
        description: "Receive dedicated support and guidance for your homework assignments with our Homework Support program. Stay organized, focused, and conquer your academic challenges with ease.",
    },
    {
        title: "Master Language Arts",
        description: "Enhance your communication skills and literary knowledge through our English Excellence program. Dive into the realms of literature, grammar, and writing to express yourself effectively and creatively.",
    },
    {
        title: "Bonjour to Fluency",
        description: "Immerse yourself in the beauty of the French language and culture with our French Immersion program. From vocabulary to pronunciation, embark on a journey towards bilingualism with interactive lessons.",
    },
];

// Detailed courses data with images
const detailedCourses = [
    {
        title: "Mathematics Mastery",
        description: "Explore the world of numbers and problem-solving with our Mathematics Mastery program. Develop a strong foundation in math concepts and boost your analytical skills with personalized guidance.",
        imgSrc: "/assets/mathematics.jpg",
    },
    {
        title: "English Excellence",
        description: "Enhance your communication skills and literary knowledge through our English Excellence program. Dive into the realms of literature, grammar, and writing to express yourself effectively and creatively.",
        imgSrc: "/assets/english.jpg",
    },
    {
        title: "Science & Technology",
        description: "Discover the wonders of the natural world with our Science Success program. Through hands-on experiments and interactive learning, you’ll deepen your understanding of key scientific principles.",
        imgSrc: "/assets/science.jpg",
    },
    {
        title: "History",
        description: "Explore significant historical events and figures that shaped our world. Our History program helps students develop critical thinking and research skills through engaging discussions.",
        imgSrc: "/assets/history.jpg",
    },
    {
        title: "Geography",
        description: "Explore the world’s landscapes, cultures, and environments through our Geography program. Understand the relationships between people and their environments and develop global awareness.",
        imgSrc: "/assets/geography.jpg",
    },
    {
        title: "Homework Support",
        description: "Get the help you need with our Homework Support program. Our tutors provide guidance on assignments, helping you understand concepts and improve your study habits.",
        imgSrc: "/assets/homework-support.jpg",
    },
    {
        title: "French Immersion",
        description: "Immerse yourself in the beauty of the French language and culture with our French Immersion program. From vocabulary to pronunciation, embark on a journey towards bilingualism with interactive lessons.",
        imgSrc: "/assets/french.jpg",
    },
    {
        title: "SAT Support",
        description: "Prepare for the SAT with our targeted support program. We provide practice tests, review sessions, and strategies to help you achieve your desired score.",
        imgSrc: "/assets/sat-support.jpg",
    },
];

// STEM Summer Camps data with images and headings only
const stemCamps = [
    {
        title: "Robotics Workshops",
        imgSrc: "/assets/robotics.jpg",
        bgColor: "bg-[#B2EBF2]", // Light teal background
    },
    {
        title: "Coding Classes",
        imgSrc: "/assets/coding.jpg",
        bgColor: "bg-[#FFCC80]", // Light orange background
    },
    {
        title: "Math Enrichment",
        imgSrc: "/assets/math.jpg",
        bgColor: "bg-[#D1C4E9]", // Light purple background
    },
    {
        title: "Science Exploration",
        imgSrc: "/assets/science-exploration.jpg",
        bgColor: "bg-[#D1C4E9]", // Same purple as Math Enrichment for consistency
    },
];

const Programs = () => {
    return (
        <div className="min-h-screen py-12 bg-[#ECF0F3]">
            <ProgNavbar />

            {/* Hero Section */}
            <div className="text-center py-16 bg-[#17008c] text-white">
                <h1 className="text-5xl font-bold">Our Programs</h1>
                <p className="text-2xl mt-4">Comprehensive Learning for All Ages</p>
                <p className="mt-6 text-lg max-w-2xl mx-auto text-white">
                    Whether you&apos;re looking to build a strong academic foundation or preparing for your next big exam,
                    our programs are designed to provide comprehensive support for students at every level.
                </p>
            </div>

            {/* Key Points Section */}
            <div className="max-w-[1240px] mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-16 py-12">
                {keyPoints.map((point, index) => (
                    <div key={index} className="bg-[#FFECB3] p-6 rounded-lg shadow-md hover:shadow-lg transition duration-300">
                        <h2 className="text-2xl font-semibold mb-4 text-[#17008C]">{point.title}</h2>
                        <p className="text-gray-700">{point.description}</p>
                    </div>
                ))}
            </div>

            {/* Programs List Section */}
            <h2 className="text-5xl font-bold text-center mb-12 text-[#17008C]">Explore Our Programs</h2>
            <div className="max-w-[1240px] mx-auto grid grid-cols-1 md:grid-cols-2 gap-10 p-6">
                {programsData.map((program, index) => (
                    <div key={index} className={`p-6 rounded-lg shadow-lg ${program.bgColor}`}>
                        <h2 className="text-3xl font-semibold mb-4 text-[#17008C]">{program.title}</h2>
                        <p className="text-lg text-gray-700">{program.description}</p>
                    </div>
                ))}
            </div>

            {/* Detailed Program Features with Images */}
            <h2 className="text-5xl font-bold text-center mt-16 mb-12 text-[#17008C]">Detailed Program Features</h2>
            <div className="max-w-[1240px] mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-16">
                {detailedCourses.map((detail, index) => (
                    <div key={index} className="bg-[#FFECB3] p-8 rounded-lg shadow-lg hover:shadow-xl transition duration-300">
                        {/* <img src={detail.imgSrc} alt={detail.title} className="rounded-lg mb-4" /> */}
                        <h2 className="text-2xl font-semibold mb-4 text-[#17008C]">{detail.title}</h2>
                        <p className="text-gray-700">{detail.description}</p>
                    </div>
                ))}
            </div>

            {/* STEM Summer Camps with Images and Headings */}
            <h2 className="text-5xl font-bold text-center mt-16 mb-12 text-[#17008C]">STEM Summer Camps</h2>
            <div className="max-w-[1240px] mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10 p-6">
                {stemCamps.map((camp, index) => (
                    <div key={index} className={`p-6 rounded-lg shadow-lg ${camp.bgColor}`}>
                        {/* <img src={camp.imgSrc} alt={camp.title} className="rounded-lg mb-4" /> */}
                        <h2 className="text-3xl font-semibold mb-4 text-[#17008C]">{camp.title}</h2>
                    </div>
                ))}
            </div>

            <GetAQuoteFooter />
            <Footer />
        </div>
    );
}

export default Programs;
