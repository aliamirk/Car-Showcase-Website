"use client";

import Image from "next/image";
import CustomButton from "../UI/CustomButton";
// 
const Hero = () => {
    const handleScroll = () => {};

    return (
        <section className="hero" id="hero">
            {/* Hero Heading */}
            <div className="flex-1 pt-36 padding-x ">
                <h1 className="hero__title">
                    Find, book or rent a car - quickly and easily!
                </h1>

                {/* Hero Sub heading  */}
                <p className="hero__subtitle">
                    Streamline your car rental experience with our effortless booking process.
                </p>

                {/* Button */}
                <CustomButton
                    type="button"
                    title="Explore Cars"
                    containerStyles="bg-primary-blue text-white rounded-full mt-10 border-2 border-white hover:border-2 hover:text-primary-blue hover:border-primary-blue hover:bg-white"
                    handleClick={handleScroll}
                />
            </div>

                {/* Hero Image */}
                <div className="hero__image-container">
                    <div className="hero__image">
                        <Image 
                            src="/hero.png" 
                            alt="Hero-Car-Image"
                            fill className="object-contain"
                        />
                    </div>

                        {/* Blue Background */}
                    <div className="hero__image-overlay" />

                </div>

        </section>
    );
};

export default Hero;