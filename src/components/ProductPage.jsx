import React from 'react';
import { FilterSection } from './FilterSection';
import { Sort } from './Sort';
import { ProductList } from './ProductList';
import { useFilterContext } from './context/filter-context';
import Footer from './Footer';

export const ProductPage = () => {
    const { grid_view, setGridView, setListView } = useFilterContext();

    return (
        <>
            <div className='flex flex-col md:flex-row p-4 md:p-10'>
                {/* Filter Section */}
                <div className='w-full md:w-1/4 mb-4 md:mb-0'>
                    <FilterSection />
                </div>

                {/* Sort and Product List Section */}
                <div className='w-full md:w-3/4'>
                    {/* Sort Section */}
                    <div className='items-center mb-4'>
                        <Sort />
                    </div>

                    {/* Product List */}
                    <ProductList />
                </div>
            </div>
            <Footer />
        </>
    );
};
