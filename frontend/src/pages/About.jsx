import React from "react";
import { assets } from "../assets/assets";

const About = () => {
  return (
    <div>
      <div className="text-center text-2xl pt-10 text-gray-500">
        <p>
          ABOUT <span className="text-gray-700 font-medium">US</span>
        </p>
      </div>
      <div className=" my-10 flex flex-col md:flex-row gap-12">
        <img
          className="w-full md:max-w-[360px]"
          src={assets.about_image}
          alt=""
        />
        <div className="flex flex-col justify-center gap-6 md:w-2/4 text-sm text-gray-600">
          <p>
            Welcome to Prescripto, your trusted partner in connecting patients
            with healthcare professionals.
          </p>
          <p>
            {" "}
            We understand that accessing quality healthcare should be simple,
            efficient, and stress-free. That’s why we’ve built a platform
            designed to make scheduling appointments with doctors and
            specialists as seamless as possible.
          </p>
          <b className="text-gray-800">Our Vision</b>
          <p>
            Our vision is to revolutionize healthcare access by creating a
            seamless and reliable platform that connects patients with trusted
            medical professionals. We aim to empower individuals with informed
            choices, promote preventive care, and leverage technology to
            simplify healthcare journeys. Together, we strive to build a
            healthier, more connected world.
          </p>
        </div>
      </div>
      <div className="text-xl my-4">
        <p>
          WHY <span className="text-gray-700 font-semibold"> CHOOSE US </span>
        </p>
      </div>
      <div className="flex flex-col md:flex-row mb-20 ">
        <div className="border px-10 md:px-16 py-8 sm:py-16 flex flex-col gap-5 text-[15px] hover:bg-primary hover:text-white transition-all duration-300 text-gray-600">
          <b> Efficiency</b>
          <p>Streamlined appointment scheduling that fits into ypour busy lifestyle </p>
        </div>
        <div className="border px-10 md:px-16 py-8 sm:py-16 flex flex-col gap-5 text-[15px] hover:bg-primary hover:text-white transition-all duration-300 text-gray-600">
          <b>Convenience</b>
          <p>Access to a network of trusted healthcare professional in your area</p>
        </div>
        <div className="border px-10 md:px-16 py-8 sm:py-16 flex flex-col gap-5 text-[15px] hover:bg-primary hover:text-white transition-all duration-300 text-gray-600">
          <b>Personlization</b>
          <p>Tailored recomendations and reminders to help you stay on top of your health</p>
        </div>
      </div>
    </div>
  );
};

export default About;
