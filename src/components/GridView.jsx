
// import React from 'react';
// import { Products } from './Products';

// export const GridView = ({ products }) => {
//     if (!products || !Array.isArray(products) || products.length === 0) {
//         return <div>No products available</div>;
//     }

//     return (
//         <div className='grid grid-cols-1 sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-3 gap-4'>
//             {products.map((product) => (
//                 <Products key={product.id} {...product} />
//             ))}
//         </div>
//     );
// };

import React from 'react';
import { Products } from './Products';

export const GridView = ({ products }) => {
    if (!products || !Array.isArray(products) || products.length === 0) {
        return <div>No products available</div>;
    }

    return (
        <div className='grid grid-cols-1 sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-3 gap-4'>
            {products.map((product) => (
                <Products key={product.id} {...product} />
            ))}
        </div>
    );
};
