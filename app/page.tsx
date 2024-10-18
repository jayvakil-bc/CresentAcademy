'use client';
import React, { useState } from "react";
import Image from "next/image";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import HeroSection from "../components/HeroSection";
import Mission from "../components/Mission";
import Testimonials from "../components/Testimonials";
import Banner from "../components/Banner";
import ContactPopup from "../components/ContactPopUp";
import FlashBanner from "../components/FlashBanner";
import Head from 'next/head';

export default function Home() {
    const [isPopupOpen, setIsPopupOpen] = useState(false); 

    const handleContactClick = () => {
        setIsPopupOpen(true); 
    };

    const handleClosePopup = () => {
        setIsPopupOpen(false);
    };

    return (
        <div>
            <Head>
                <title>Crescent Academy</title>
                <link rel="icon" href="/favicon.ico" type="image/x-icon" />
            </Head>
            <FlashBanner />
            <Navbar handleContactClick={handleContactClick} />
            <HeroSection />
            <Mission />
            <Testimonials />
            <Banner />
            <Footer />
            <ContactPopup isOpen={isPopupOpen} onClose={handleClosePopup} />
        </div>
    );
}
