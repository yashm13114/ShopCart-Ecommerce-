import React from 'react';
import { useProductContext } from './context/productcontext';
import { Products } from './Products';

export const FeatureProduct = () => {
  const { isLoading, featureProducts } = useProductContext();

  if (isLoading) {
    return <div className="loading">....loading</div>;
  }

  return (
    <div className="bg-gray-100 py-12">
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
          <div className="grid grid-cols-1 gap-y-10 sm:grid-cols-2 lg:grid-cols-3 gap-8">
            {featureProducts && featureProducts.length > 0 ? (
              featureProducts.map((item) => (
                <Products key={item.id} {...item} />
              ))
            ) : (
              <p className="col-span-3 text-lg">No products available.</p>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};
