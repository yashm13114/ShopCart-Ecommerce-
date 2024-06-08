// import React, { useEffect } from 'react';
// import { NavLink, useParams } from 'react-router-dom';
// import { useProductContext } from './context/productcontext';
// import { MyImage } from './MyImage';
// import { FormattPrice } from './helpers/FormattPrice';
// import { FaTruck } from "react-icons/fa";
// import { TbReplace } from "react-icons/tb";
// import { MdSecurity } from "react-icons/md";
// import { Star } from './Star';

// const API = "https://api.pujakaitem.com/api/products";

// export const SingleProduct = () => {
//   const { getSinleProducts, singleProduct, IsSingleLoading } = useProductContext();
//   const { id } = useParams();
//   const {
//     id: alias,
//     name,
//     company,
//     price,
//     description,
//     category,
//     stock,
//     stars,
//     reviews,
//     image
//   } = singleProduct;

//   useEffect(() => {
//     getSinleProducts(`${API}?id=${id}`);
//   }, []);
//   return (
//     <>
//       <div className=''>
//         <div className='text-2xl ml-5'>
//           <NavLink className="text-purple-600" to={"/"}>Home/</NavLink>{name}
//         </div>
//         <div className='grid justify-center'>
//           <div className='flex lg:grid-cols-2  grid-rows-2 p-10 mt-10'>
//             {/* product images */}
//             <div>
//             <MyImage imgs={image} />
//             </div>
//             {/* product data */}
//             <div className='grid '>
//               <h2 className='lg:text-4xl text-2xl'>{name}</h2>
//               <Star stars={stars} reviews={reviews}/>
//               <p>
//                 MRP:
//                 <del>
//                   <FormattPrice price={price + 250000} />
//                 </del>
//               </p>
//               <p className='text-purple-600'>
//                 Deal of the day: <FormattPrice price={price} />
//               </p>
//               <p className='lg:w-[650px] w-auto '>{description}</p>
//               <div className='grid lg:grid-cols-3 md:grid-cols-2 md:grid-rows-2 grid-rows-3 lg:gap-0 gap-6 justify-center mt-7'>
//                 <div className='flex gap-3'>
//                   <FaTruck className='text-2xl text-black' />
//                   Free Delivery
//                 </div>
//                 <div className='flex gap-3'>
//                   <TbReplace className='text-2xl text-black' />
//                   7 Days Replacement
//                 </div>
//                 <div className='flex gap-3'>
//                   <MdSecurity className='text-2xl text-black' />
//                   2 Year Warranty
//                 </div>
//               </div>
//               <hr className='text-gray-200 text-4xl' />
//               <div>
//                 <p>Available: <span className='text-black'>{stock > 0 ? " In Stock" : " Not Available"}</span></p>
//               </div>
//               <div>
//                 <p>Brand: <span className='text-black'>{company}</span></p>
//               </div>
//             </div>
//           </div>
//         </div>
//       </div>
//     </>
//   );
// };
import React, { useEffect, useState } from 'react';
import { NavLink, useParams } from 'react-router-dom';
import { useProductContext } from './context/productcontext';
import { MyImage } from './MyImage';
import { FaTruck } from "react-icons/fa";
import { TbReplace } from "react-icons/tb";
import { MdSecurity } from "react-icons/md";
import { Star } from './Star';
import { AddToCart } from './AddToCart';
import FormattPrice from './helpers/FormattPrice';

const API = "https://api.pujakaitem.com/api/products";

export const SingleProduct = () => {
  const { getSinleProducts, singleProduct, IsSingleLoading } = useProductContext();
  const { id } = useParams();
  const {
    id: alias,
    name,
    company,
    price,
    description,
    category,
    stock,
    stars,
    reviews,
    image
  } = singleProduct;

  useEffect(() => {
    getSinleProducts(`${API}?id=${id}`);
  }, [id]);

  return (
    <div className='container mx-auto p-4'>
      <div className='text-2xl ml-5'>
        <NavLink className="text-purple-600" to={"/"}>Home /</NavLink> {name}
      </div>
      <div className='grid lg:grid-cols-2 gap-10 mt-10 lg:p-10 p-0'>
        {/* product images */}
        <div>
          <MyImage imgs={image} />
        </div>
        {/* product data */}
        <div>
          <h2 className='text-2xl lg:text-4xl'>{name}</h2>
          <Star stars={stars} reviews={reviews} />
          <p className='text-xl'>
            MRP: <del><FormattPrice price={price + 250000} /></del>
          </p>
          <p className='text-2xl text-purple-600'>
            Deal of the day: <FormattPrice price={price} />
          </p>
          <p className='my-4'>{description}</p>
          <div className='grid grid-cols-2 md:grid-cols-3 gap-4 mt-7'>
            <div className='flex items-center gap-2'>
              <FaTruck className='text-2xl text-black' />
              Free Delivery
            </div>
            <div className='flex items-center gap-2'>
              <TbReplace className='text-2xl text-black' />
              7 Days Replacement
            </div>
            <div className='flex items-center gap-2'>
              <MdSecurity className='text-2xl text-black' />
              2 Year Warranty
            </div>
          </div>
          <hr className='my-4' />
          <div>
            <p>Available: <span className='text-black'>{stock > 0 ? " In Stock" : " Not Available"}</span></p>
          </div>
          <div>
            <p>Brand: <span className='text-black'>{company}</span></p>
          </div>
          <hr className='text-black mt-3'/>
          {stock >0 && <AddToCart  product={singleProduct}/>}
        </div>
      </div>
    </div>
  );
};


