import React from 'react';
import { NavLink } from 'react-router-dom';
import FormattPrice from './helpers/FormattPrice';

export const Products = ({ id, name, category, price, image }) => {
  return (
    <div className="p-4 sm:w-full md:w-1/2 lg:w-1/3 xl:w-[100%]">
      <NavLink to={`/singleproduct/${id}`}>
        <div className="flex flex-col justify-between items-center bg-white p-6 rounded-lg shadow-md transform transition-transform duration-300 hover:scale-105 hover:shadow-xl">
          <div className="relative w-full h-64 overflow-hidden rounded-lg mb-4">
            <img className="w-full h-full object-cover transition-transform duration-300 hover:scale-110" src={image} alt={name} />
            <span className="absolute top-2 right-2 bg-purple-500 text-white text-xs font-semibold rounded-full px-2 py-1">{category}</span>
          </div>
          <h3 className="mt-4 text-xl font-semibold text-gray-900">{name}</h3>
          <p className="mt-2 text-base text-gray-500 text-center"><FormattPrice price={price} /></p>
        </div>
      </NavLink>
    </div>
  );
};
