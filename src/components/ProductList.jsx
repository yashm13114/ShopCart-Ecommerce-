import React from 'react';
import { useFilterContext } from './context/filter-context';
import { GridView } from './GridView';
import { ListView } from './ListView';

export const ProductList = () => {
    const { filter_products, grid_view } = useFilterContext();

    return (
        <>
            {grid_view ? <GridView products={filter_products} /> : <ListView products={filter_products} />}
        </>
    );
};
