"use client";

import { motion } from "framer-motion";
import Navigation from "@/components/layout/Navigation";
import Image from "next/image";
import Link from "next/link";

export default function Contact() {
    return (
        <motion.div
            initial={{ y: "-100%" }} // Start above screen
            animate={{ y: "0%" }} // Move down into view
            exit={{ y: "100%" }} // Move down when leaving
            transition={{ duration: 0.8, ease: "easeOut" }}
            className="flex flex-col min-h-screen bg-black text-white relative"
        >
            {/* Page Content (85vh) */}
            <motion.div
                initial={{ y: "-100%", opacity: 0 }} // Content starts off-screen at the top
                animate={{ y: "0%", opacity: 1 }} // Slides down into view
                exit={{ y: "-100%", opacity: 0 }} // Moves back up when navigating away
                transition={{ duration: 0.8, ease: "easeOut" }}
                className="relative h-[85vh] flex flex-col-reverse md:flex-row md:grid md:grid-cols-12 items-center gap-4"
            >
                {/* Left Column - Icons (Mobile: Moves to Bottom) */}
                <div className="col-span-3 flex flex-col items-center justify-center space-y-16 bg-black md:space-y-24">
                    <div className="grid grid-cols-3 gap-6 md:flex md:flex-col md:space-y-16">
                        {/* Email Icon */}
                        <Link href="mailto:your@email.com" target="_blank">
                            <Image
                                src="/images/email-icon.webp"
                                alt="Email"
                                width={80} // Mobile size
                                height={80}
                                className="md:w-[120px] md:h-[120px] cursor-pointer border-2 border-neon-green rounded-lg transition-all duration-300 hover:shadow-[0_0_15px_#39ff14]"
                            />
                        </Link>

                        {/* LinkedIn Icons */}
                        <Link href="https://linkedin.com/in/yourprofile" target="_blank">
                            <Image
                                src="/images/linkedin-icon.webp"
                                alt="LinkedIn"
                                width={80} // Mobile size
                                height={80}
                                className="md:w-[120px] md:h-[120px] cursor-pointer border-2 border-neon-green rounded-lg transition-all duration-300 hover:shadow-[0_0_15px_#39ff14]"
                            />
                        </Link>

                        <Link href="https://linkedin.com/in/yourprofile" target="_blank">
                            <Image
                                src="/images/linkedin-icon.webp"
                                alt="LinkedIn"
                                width={80} // Mobile size
                                height={80}
                                className="md:w-[120px] md:h-[120px] cursor-pointer border-2 border-neon-green rounded-lg transition-all duration-300 hover:shadow-[0_0_15px_#39ff14]"
                            />
                        </Link>
                    </div>
                </div>

                {/* Right Column - Background Image with Chip & Text */}
<div className="col-span-9 flex items-center justify-center relative w-full h-[85vh]">
    {/* Background Image (Stays within 85vh) */}
    <div
        className="absolute inset-0 w-full h-full bg-no-repeat bg-cover md:bg-right bg-center"
        style={{
            height: "100%",  // Ensures background image fills only 85vh
            backgroundImage: "url('/images/contact-bg-2.jpg')"
        }}
    ></div>

    {/* Text Inside Chip Area (Perfectly Contained) */}
    <div
        className="absolute flex flex-col items-center justify-center text-center"
        style={{
            top: "50%",
            left: "50%",
            transform: "translate(-50%, -50%)",
            width: "100%",
            maxWidth: "250px"
        }}
    >
        <motion.p
            className="text-lg md:text-xl lg:text-2xl font-bold text-neon-green tracking-wide opacity-60 break-words"
            initial={{ opacity: 0.6 }}
            animate={{ opacity: [0.2, 1, 0.2] }}
            transition={{ duration: 2, repeat: Infinity }}
        >
            LET’S BUILD SOMETHING GOOD TOGETHER
        </motion.p>

        <motion.p
            className="text-md md:text-lg lg:text-xl font-bold text-neon-green tracking-wide mt-4 opacity-60 break-words"
            initial={{ opacity: 0.6 }}
            animate={{ opacity: [0.2, 1, 0.2] }}
            transition={{ duration: 2.5, repeat: Infinity }}
        >
            GET IN TOUCH!
        </motion.p>
    </div>
</div>

            </motion.div>

            {/* Bottom Navigation (15vh) */}
            <motion.div
                initial={{ y: "100%" }} // Navbar starts off-screen at the bottom
                animate={{ y: "0%" }} // Moves into position
                exit={{ y: "-100%" }} // Moves up when navigating away
                transition={{ duration: 0.8, ease: "easeOut" }}
                className="h-[15vh] flex items-center justify-center border-t border-neon-green z-10 fixed bottom-0 left-0 w-full bg-black"
            >
                <Navigation />
            </motion.div>
        </motion.div>
    );
}
