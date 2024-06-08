
// import React from 'react';
// import { FormattPrice } from './helpers/FormattPrice';

// export const ListView = ({ products }) => {
//     return (
//         <div className='grid grid-cols-1 gap-4'>
//             {products.map((currElem) => {
//                 const { id, image, description, name, price } = currElem;
//                 return (
//                     <div key={id} className='grid grid-cols-1 sm:grid-cols-2 border p-3'>
//                         <figure className='lg:w-[60%] w-1/2'>
//                             <img src={image} alt={name} className=' h-auto object-cover' />
//                         </figure>
//                         <div className='pl-0  pt-4'>
//                             <h3 className='text-xl font-semibold'>{name}</h3>
//                             <p className='text-gray-600'><FormattPrice price={price} /></p>
//                             <p className='text-gray-600'>{description.slice(0, 90)}...</p>
//                             <a href={`/singleproduct/${id}`} className='inline-block mt-4'>
//                                 <button className='bg-purple-500 text-white px-4 py-2 rounded-lg'>Read More</button>
//                             </a>
//                         </div>
//                     </div>
//                 );
//             })}
//         </div>
//     );
// };
import React from 'react';

import { NavLink } from 'react-router-dom'
import FormattPrice from './helpers/FormattPrice';
export const ListView = ({ products }) => {
    return (
        <div className='grid grid-cols-1 gap-4'>
            {products.map((currElem) => {
                const { id, image, description, name, price } = currElem;
                return (
                    <div key={id} className='grid grid-cols-1 sm:grid-cols-2 border p-3'>
                        <figure className='w-full sm:w-[60%]'>
                            <img src={image} alt={name} className='w-full h-auto object-cover' />
                        </figure>
                        <div className='pl-0 sm:pl-4 pt-4 sm:pt-0'>
                            <h3 className='text-xl font-semibold'>{name}</h3>
                            <p className='text-gray-600'><FormattPrice price={price} /></p>
                            <p className='text-gray-600'>{description.slice(0, 90)}...</p>
                            <NavLink to={`/singleproduct/${id}`} className='inline-block mt-4'>
                                <button className='bg-purple-500 text-white px-4 py-2 rounded-lg'>Read More</button>
                            </NavLink>
                        </div>
                    </div>
                );
            })}
        </div>
    );
};
