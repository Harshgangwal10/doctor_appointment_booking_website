import React from "react";
import { specialityData } from "../assets/assets";
import { Link } from "react-router-dom";

const SpecialityMenu = () => {
  return (
    <div
      className="flex flex-col items-center gap-6 py-16  text-gray-800"
      id="speciality"
    >
      <h1 className="text-4xl font-semibold text-gray-900">Find by Speciality</h1>
      <p className="sm:w-2/5 text-center text-base text-gray-600">
        Explore our wide range of trusted doctors by speciality and schedule your
        appointment hassle-free.
      </p>
      <div className="flex sm:justify-center gap-6 pt-5 w-full overflow-x-auto scrollbar-hide px-4">
        {specialityData.map((item, index) => (
          <Link
            onClick={() => scrollTo(0, 0)}
            className="flex flex-col items-center text-sm cursor-pointer flex-shrink-0 transition-transform duration-300 hover:scale-105 bg-white shadow-md rounded-lg p-4"
            key={index}
            to={`/doctors/${item.speciality}`}
          >
            <img
              className="w-20 h-20 sm:w-28 sm:h-28 rounded-full object-cover mb-3 border-2 border-gray-200"
              src={item.image}
              alt={item.speciality}
            />
            <p className="font-medium text-gray-700">{item.speciality}</p>
          </Link>
        ))}
      </div>
    </div>
  );
};

export default SpecialityMenu;
