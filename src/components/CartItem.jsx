import React from 'react';
import { MdDelete } from "react-icons/md";
import { useCartContext } from './context/cart_context';
import FormattPrice from './helpers/FormattPrice';
import { CartAmountToggle } from './CartAmountToggle';

export const CartItem = ({ id, name, image, price, amount, color }) => {
    const { removeItem, setDecrease, setIncrement } = useCartContext();

    return (
        <div className='grid grid-cols-5 gap-1 py-2'>
            <div className='flex items-center'>
                <figure>
                    <img src={image} alt={name} className='w-16 h-16 object-cover' />
                </figure>
                <div className='ml-4'>
                    <p>{name}</p>
                    <div className='flex items-center'>
                        <p>Colors:</p>
                        <div
                            className='w-4 h-4 rounded-full ml-2'
                            style={{ backgroundColor: color }}
                        ></div>
                    </div>
                </div>
            </div>
            <div className='grid items-center'>
                <p><FormattPrice price={price} /></p>
            </div>
            <div className='grid items-center'>
                <CartAmountToggle 
                    amount={amount} 
                    setDecrease={() => setDecrease(id)} 
                    setincrease={() => setIncrement(id)} 
                />
            </div>
            <div className='grid items-center'>
                <p><FormattPrice price={price * amount} /></p>
            </div>
            <div className='grid items-center text-red-500'>
                <MdDelete className='cursor-pointer' onClick={() => removeItem(id)} />
            </div>
        </div>
        
    );
};
