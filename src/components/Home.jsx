import React from 'react'
import '../App.css'
const products = [
  {
    id: 1,
    name: 'Product 1',
    description: '₹899',
    imageUrl: 'https://encrypted-tbn1.gstatic.com/shopping?q=tbn:ANd9GcTwHVE3Ft7WzjAm3WbDVT3C7FHX2o_dIVEVUiQliAkeYAFR3Wu9eAWywk6XYhIDed7K2WH6Xwd59jmBYpC_wAvsc751LZEQBLt6ijZ_h55M7YsOJCpBmcj6&usqp=CAE',
  },
  {
    id: 2,
    name: 'Product 2',
    description: '₹899',
    imageUrl: 'https://encrypted-tbn1.gstatic.com/shopping?q=tbn:ANd9GcTwHVE3Ft7WzjAm3WbDVT3C7FHX2o_dIVEVUiQliAkeYAFR3Wu9eAWywk6XYhIDed7K2WH6Xwd59jmBYpC_wAvsc751LZEQBLt6ijZ_h55M7YsOJCpBmcj6&usqp=CAE',
  },
  {
    id: 3,
    name: 'Product 3',
    description: '₹899',
    imageUrl: 'https://encrypted-tbn1.gstatic.com/shopping?q=tbn:ANd9GcTwHVE3Ft7WzjAm3WbDVT3C7FHX2o_dIVEVUiQliAkeYAFR3Wu9eAWywk6XYhIDed7K2WH6Xwd59jmBYpC_wAvsc751LZEQBLt6ijZ_h55M7YsOJCpBmcj6&usqp=CAE',
  },
];
import { TbTruckDelivery } from "react-icons/tb";
import { MdSecurity } from "react-icons/md";
import { SiAdguard } from "react-icons/si";
import { SiFsecure } from "react-icons/si";
import Footer from './Footer';
import 'C:/Users/YASH MEHTA/Desktop/Ecommerce website/frontend/src/App.css';
import { FeatureProduct } from './FeatureProduct';
export const Home = () => {
  return (
    <>
      <div className="p-16 grid w-full grid-cols-1 my-auto mt-3 mb-8 md:grid-cols-2 xl:gap-14 md:gap-5">
        <div className="flex flex-col justify-center col-span-1 text-center lg:text-start">
          <h1 className="mb-8 text-4xl font-extrabold leading-tight lg:text-6xl text-dark-grey-900">Welcome to ShopCart</h1>
          <p className="mb-6 text-base font-normal leading-7 lg:w-3/4 text-grey-900">
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ducimus id ipsam, veritatis velit tempora fuga ex mollitia porro consectetur voluptates quasi! Iusto cumque recusandae voluptates illum corrupti mollitia quo velit.
          </p>
          <div className="flex flex-col items-center gap-4 lg:flex-row">
            <button className="flex items-center py-4 text-sm font-bold text-white px-7 bg-purple-blue-500 hover:bg-purple-blue-600 focus:ring-4 focus:ring-purple-blue-100 transition duration-300 rounded-xl">Get started now</button>
            <button className="flex items-center bg-purple-400 text-white py-4 text-sm font-medium px-7 text-dark-grey-700 hover:text-dark-grey-900 transition duration-300 rounded-2xl">
              Shop Now
            </button>
          </div>
        </div>
        <div className="items-center justify-end hidden col-span-1 md:flex">
          <img className="w-4/5 rounded-md" src="https://img.freepik.com/free-vector/ordering-goods-online-internet-store-online-shopping-niche-e-commerce-website-mother-buying-babies-clothes-footwear-toys-infant-accessories-vector-isolated-concept-metaphor-illustration_335657-2764.jpg" alt="header" />
        </div>
      </div>
      <FeatureProduct />
      {/* <div className="bg-gray-100 py-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h2 className="text-base text-purple-600 font-semibold tracking-wide uppercase">Check Now!</h2>
            <p className="mt-2 text-3xl leading-8 font-extrabold tracking-tight text-gray-900 sm:text-4xl">
              Our Feature Services
            </p>
            <p className="mt-4 max-w-2xl text-xl text-gray-500 lg:mx-auto">
              Here are some of the features and services we provide.
            </p>
          </div>
          <div className="mt-10">
            <div className="grid grid-cols-1 gap-y-10 sm:grid-cols-2 lg:grid-cols-3 lg:gap-x-8">
              {products.map((product) => (
                <div key={product.id} className="flex flex-col items-center bg-white p-6 rounded-lg shadow-md hover-effect">
                  <div className="hover-effect">
                    <img className="w-11/12" src={product.imageUrl} alt={product.name} />
                  </div>
                  <h3 className="mt-4 text-xl font-semibold text-gray-900">{product.name}</h3>
                  <p className="mt-2 text-base text-gray-500 text-center">{product.description}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div> */}

      <div className='mt-10 flex flex-col md:flex-row justify-center gap-4 mb-10'>
        <div className='w-full md:w-1/3 lg:w-[30%]'>
          <div className="shadow-md mt-16 bg-gray-100 rounded-lg p-10">
            <div className='flex gap-3'>
              <TbTruckDelivery className='text-purple-600 text-3xl' /> <h3 className="text-xl font-semibold text-gray-900">Fast Delivery</h3>
            </div>
            <p className="mt-2 text-base text-gray-500">Get your products delivered to you in no time.</p>
          </div>
        </div>
        <div className='w-full md:w-1/3 lg:w-[30%] grid gap-4'>
          <div className='shadow-md bg-gray-100 rounded-lg p-10'>
            <div className='flex gap-3'>
              <MdSecurity className='text-purple-600 text-3xl' /> <h3 className="text-xl font-semibold text-gray-900">Non-Contact Shipping</h3>
            </div>
            <p className="mt-2 text-base text-gray-500">Receive your items with safety protocols.</p>
          </div>
          <div className='bg-gray-100 shadow-md rounded-lg p-10'>
            <div className='flex gap-3'>
              <SiAdguard className='text-purple-600 text-3xl' /> <h3 className="text-xl font-semibold text-gray-900">Money Back Guarantee</h3>
            </div>
            <p className="mt-2 text-base text-gray-500">Not satisfied? Get your money back easily.</p>
          </div>
        </div>
        <div className='w-full md:w-1/3 lg:w-[30%]'>
          <div className="mt-16 shadow-md bg-gray-100 rounded-lg p-10">
            <div className='flex gap-3'>
              <SiFsecure className='text-purple-600 text-3xl' /> <h3 className="text-xl font-semibold text-gray-900">Super Secure Payment System</h3>
            </div>
            <p className="mt-2 text-base text-gray-500">Your payments are secure with our system.</p>
          </div>
        </div>
      </div>

      <Footer />
    </>
  )
}
