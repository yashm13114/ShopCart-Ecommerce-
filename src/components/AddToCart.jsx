import React, { useState } from 'react';
import { CartAmountToggle } from './CartAmountToggle';
import { NavLink } from 'react-router-dom';
import { useCartContext } from './context/cart_context';

export const AddToCart = ({ product }) => {
    const { id, colors, stock } = product;
    const [color, setColor] = useState(colors[0]);
    const [amount, setAMount] = useState(1);
    const {addToCart} = useCartContext();
    const handleColorSelect = (color) => {
        setColor(color);
    };

    const setIncrease = () => {
        amount < stock ? setAMount(amount + 1) : setAMount(stock);
    }
    const setDecrease = () => {
        amount > 1 ? setAMount(amount - 1) : setAMount(1);
    }
    return (
        <>
            <div>
                <p>Colors:</p>
                <div className="flex mt-2">
                    {colors.map((curColor, index) => (
                        <button
                            key={index}
                            className={`select-none h-7 w-7 rounded-full mr-2 focus:outline-none ${color === curColor ? 'bg-gray-400 text-white' : 'bg-gray-200 text-gray-700'
                                }`}
                            style={{ backgroundColor: curColor }}
                            onClick={() => handleColorSelect(curColor)}
                            disabled={color === curColor}
                        >
                            {color === curColor && <span>&#10003;</span>}
                        </button>
                    ))}
                </div>
            </div>
            <CartAmountToggle amount={amount}
                setDecrease={setDecrease}
                setincrease={setIncrease} />
            <NavLink to={"/cart"} >
                <button onClick={() => addToCart(id, amount, color, product)} className='text-white bg-purple-600 px-4 py-3 mt-2'>Add To Cart</button>
            </NavLink>
        </>
    );
};
