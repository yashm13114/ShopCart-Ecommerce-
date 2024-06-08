// import React from 'react';
// import { useFilterContext } from './context/filter-context';
// import { FormattPrice } from './helpers/FormattPrice';

// export const FilterSection = () => {
//     const { filters: { text, category, company, color, price, maxPrice, minPrice }, clearFilters, all_products, updateFilterValue } = useFilterContext();

//     const handleInputChange = (e) => {
//         updateFilterValue(e);
//     };

//     // to get unique data of each field
//     const getUniquedata = (data, property) => {
//         let newVal = data.map((currElem) => currElem[property]);

//         if (property === "colors") {
//             // Flatten the array of arrays, remove duplicates, and filter out invalid colors
//             return ["all", ...new Set([].concat(...newVal).filter(color => /^#[0-9A-F]{6}$/i.test(color)))];
//         } else {
//             return ["all", ...new Set(newVal)];
//         }
//     };

//     // we need unique data
//     const categoryOnlyData = getUniquedata(all_products, "category") || [];
//     const companyOnlyData = getUniquedata(all_products, "company") || [];
//     const colorOnlyData = getUniquedata(all_products, "colors") || [];
//     console.log(colorOnlyData);

//     return (
//         <>
//             <div>
//                 <form action="" onSubmit={(e) => e.preventDefault()}>
//                     <input
//                         className='p-1 w-[300px] border border-black rounded'
//                         type="text"
//                         name='text'
//                         value={text}
//                         onChange={handleInputChange}
//                         placeholder='Search here...'
//                     />
//                 </form>
//             </div>
//             <div className="category-box flex flex-col items-center mt-4">
//                 <h3 className="text-xl font-semibold">Category</h3>
//                 <div className="category-buttons flex flex-wrap gap-2 justify-center mt-2">
//                     {
//                         categoryOnlyData.map((currElem, index) => {
//                             return (
//                                 <button
//                                     className={`category-button px-4 py-2 border rounded ${category === currElem ? 'bg-black text-white' : 'bg-gray-200'}`}
//                                     type="button"
//                                     name="category"
//                                     key={index}
//                                     value={currElem}
//                                     onClick={updateFilterValue}>
//                                     {currElem}
//                                 </button>
//                             )
//                         })
//                     }
//                 </div>
//             </div>
//             <div className="company-box flex flex-col items-center mt-4">
//                 <h3 className="text-xl font-semibold">Company</h3>
//                 <div className="flex justify-center mt-2">
//                     <select
//                         className="px-4 py-2 border rounded bg-gray-200"
//                         name="company"
//                         value={company}
//                         onChange={handleInputChange}
//                     >
//                         {
//                             companyOnlyData.map((currElem, index) => {
//                                 return (
//                                     <option key={index} value={currElem}>
//                                         {currElem}
//                                     </option>
//                                 )
//                             })
//                         }
//                     </select>
//                 </div>
//             </div>
//             <div className='flex flex-col items-center mt-4'>
//                 <h3 className="text-xl font-semibold">Colors</h3>
//                 <div className='flex flex-wrap gap-2 justify-center mt-2'>
//                     {
//                         colorOnlyData.map((curColor, index) => {
//                             return (
//                                 <button
//                                     type='button'
//                                     key={index}
//                                     value={curColor}
//                                     name='color'
//                                     className={`cursor-pointer h-6 w-6 rounded-full m-1 ${color === curColor ? 'border-2 border-black' : ''}`}
//                                     style={{ backgroundColor: curColor }}
//                                     onClick={updateFilterValue}
//                                 >
//                                     {curColor === "all" ? "All" : color === curColor ? <span style={{ color: 'white' }}>&#10003;</span> : null}
//                                 </button>
//                             )
//                         })
//                     }
//                 </div>
//             </div>
//             <div className='grid justify-center  mt-6'>
//                 <h3>Price</h3>
//                 <p><FormattPrice price={price} /></p>
//                 <input
//                     type="range"
//                     name="price"
//                     id="price"
//                     min={minPrice}
//                     max={maxPrice}
//                     value={price}
//                     onChange={updateFilterValue} />
//             </div>
//             <div className='flex justify-center m-3'>
//                 <button type="button" onClick={clearFilters} className='p-3 bg-red-400 text-white'>Clear Filter</button>
//             </div>
//         </>
//     );
// };
import React from 'react';
import { useFilterContext } from './context/filter-context';
import FormattPrice from './helpers/FormattPrice';

export const FilterSection = () => {
    const { filters: { text, category, company, color, price, maxPrice, minPrice }, clearFilters, all_products, updateFilterValue } = useFilterContext();

    const handleInputChange = (e) => {
        updateFilterValue(e);
    };

    // to get unique data of each field
    const getUniquedata = (data, property) => {
        let newVal = data.map((currElem) => currElem[property]);

        if (property === "colors") {
            // Flatten the array of arrays, remove duplicates, and filter out invalid colors
            return ["all", ...new Set([].concat(...newVal).filter(color => /^#[0-9A-F]{6}$/i.test(color)))];
        } else {
            return ["all", ...new Set(newVal)];
        }
    };

    // we need unique data
    const categoryOnlyData = getUniquedata(all_products, "category") || [];
    const companyOnlyData = getUniquedata(all_products, "company") || [];
    const colorOnlyData = getUniquedata(all_products, "colors") || [];

    return (
        <>
            <div>
                <form action="" onSubmit={(e) => e.preventDefault()}>
                    <input
                        className='p-1 w-full border border-black rounded'
                        type="text"
                        name='text'
                        value={text}
                        onChange={handleInputChange}
                        placeholder='Search here...'
                    />
                </form>
            </div>
            <div className="category-box flex flex-col items-center mt-4">
                <h3 className="text-xl font-semibold">Category</h3>
                <div className="category-buttons flex flex-wrap gap-2 justify-center mt-2">
                    {
                        categoryOnlyData.map((currElem, index) => {
                            return (
                                <button
                                    className={`category-button px-4 py-2 border rounded ${category === currElem ? 'bg-black text-white' : 'bg-gray-200'}`}
                                    type="button"
                                    name="category"
                                    key={index}
                                    value={currElem}
                                    onClick={updateFilterValue}>
                                    {currElem}
                                </button>
                            )
                        })
                    }
                </div>
            </div>
            <div className="company-box flex flex-col items-center mt-4">
                <h3 className="text-xl font-semibold">Company</h3>
                <div className="flex justify-center mt-2 w-full">
                    <select
                        className="px-4 py-2 border rounded bg-gray-200 w-full"
                        name="company"
                        value={company}
                        onChange={handleInputChange}
                    >
                        {
                            companyOnlyData.map((currElem, index) => {
                                return (
                                    <option key={index} value={currElem}>
                                        {currElem}
                                    </option>
                                )
                            })
                        }
                    </select>
                </div>
            </div>
            <div className='flex flex-col items-center mt-4'>
                <h3 className="text-xl font-semibold">Colors</h3>
                <div className='flex flex-wrap gap-2 justify-center mt-2'>
                    {
                        colorOnlyData.map((curColor, index) => {
                            return (
                                <button
                                    type='button'
                                    key={index}
                                    value={curColor}
                                    name='color'
                                    className={`cursor-pointer h-6 w-6 rounded-full m-1 ${color === curColor ? '' : ''}`}
                                    style={{ backgroundColor: curColor }}
                                    onClick={updateFilterValue}
                                >
                                    {curColor === "all" ? "All" : color === curColor ? <span style={{ color: 'white' }}>&#10003;</span> : null}
                                </button>
                            )
                        })
                    }
                </div>
            </div>
            <div className='grid justify-center mt-6 w-full'>
                <h3>Price</h3>
                <p><FormattPrice price={price} /></p>
                <input
                    type="range"
                    name="price"
                    id="price"
                    min={minPrice}
                    max={maxPrice}
                    value={price}
                    onChange={handleInputChange}
                    className='w-full'
                />
            </div>
            <div className='flex justify-center m-3'>
                <button type="button" onClick={clearFilters} className='p-3 bg-red-500 text-white'>Clear Filter</button>
            </div>
        </>
    );
};

