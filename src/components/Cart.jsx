
import React from 'react';
import { useCartContext } from './context/cart_context';
import { CartItem } from './CartItem';
import { NavLink } from 'react-router-dom';
import FormattPrice from './helpers/FormattPrice';
import { FaPlus } from "react-icons/fa";
import { FaMinus } from "react-icons/fa";
import { MdDelete } from "react-icons/md";
import Footer from './Footer';
import '../App.css';
const Cart = () => {
  const { cart, clearCart, total_price, shipping_fee,setDecrease, setIncrement,removeItem,tax } = useCartContext();
  if (cart.length === 0) {
    return <div className='lg:text-3xl text-xl grid justify-center items-center'>There are no items in the cart.</div>;
  }
  return (
    <>
        <div className="px-4 sm:px-12 md:px-24 lg:px-48 xl:px-64 overflow-x-auto">
        <table className="min-w-full text-left text-sm font-light text-surface dark:text-white">
          <thead className="border-b border-neutral-200 font-medium dark:border-white/10">
            <tr>
              <th scope="col" className="px-6 py-4">Item</th>
              <th scope="col" className="px-6 py-4">Price</th>
              <th scope="col" className="px-6 py-4">Quantity</th>
              <th scope="col" className="px-6 py-4">Subtotal</th>
              <th scope="col" className="px-6 py-4">Remove</th>
            </tr>
          </thead>
          <tbody>
            {cart.map((currElem, index) => (
              <tr key={currElem.id} className="border-b border-neutral-200 dark:border-white/10">
                <td className="whitespace-nowrap px-6 py-4 font-medium flex items-center">
                  <img src={currElem.image} alt={currElem.name} className="w-16 h-16 object-cover mr-4" />
                  <div>
                    <p>{currElem.name}</p>
                    <div className="flex items-center">
                      <p>Color:</p>
                      <div
                        className='w-4 h-4 rounded-full ml-2'
                        style={{ backgroundColor: currElem.color }}
                      ></div>
                    </div>
                  </div>
                </td>
                <td className="whitespace-nowrap px-6 py-4"><FormattPrice price={currElem.price} /></td>
                <td className="whitespace-nowrap px-6 py-4">
                  <div className="flex items-center">
                    <button onClick={() => setDecrease(currElem.id)}><FaMinus/></button>
                    <span className="mx-2 text-xl">{currElem.amount}</span>
                    <button onClick={() => setIncrement(currElem.id)}><FaPlus/></button>
                  </div>
                </td>
                <td className="whitespace-nowrap px-6 py-4"><FormattPrice price={currElem.price * currElem.amount} /></td>
                <td className="whitespace-nowrap px-6 py-4">
                  <button onClick={() => removeItem(currElem.id)} className="text-red-500"><MdDelete /></button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      <div className='flex justify-between px-4 sm:px-12 md:px-24 lg:px-48 xl:px-64 mt-9'>
        <NavLink to={"/products"}>
          <button className='bg-purple-500 p-4 text-white' type="button">Continue Shopping</button>
        </NavLink>
        <button type="button" onClick={clearCart} className='bg-red-500 p-4 text-white'>Clear Cart</button>
      </div>



{/* chexk out */}


<div className="containe grid justify-center my-5">
      <div className="card cart">
        <label className="title">CHECKOUT</label>
        <div className="steps">
          <div className="step">
            {/* <div>
              <span>SHIPPING</span>
              <p>221B Baker Street, W1U 8ED</p>
              <p>London, United Kingdom</p>
            </div> */}
            <hr />
            {/* <div>
              <span>PAYMENT METHOD</span>
              <p>Visa</p>
              <p>**** **** **** 4243</p>
            </div> */}
            <hr />
            <div className="promo">
              <span>HAVE A PROMO CODE?</span>
              <form className="form">
                <input type="text" placeholder="Enter a Promo Code" className="input_field" />
                <button type="submit">Apply</button>
              </form>
            </div>
            <hr />
            <div className="payments">
              <span>PAYMENT</span>
              <div className="details">
                <span>Subtotal:</span>
                <span><FormattPrice price={total_price} /></span>
                <span>Shipping:</span>
                <span><FormattPrice price={shipping_fee}/></span>
                <span>Tax:</span>
                <span><FormattPrice price={tax}/></span>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="card checkout">
        <div className="footer">
          <label className="price"><FormattPrice price={shipping_fee + total_price+ tax}/></label>
          <button className="checkout-btn">Checkout</button>
        </div>
      </div>
    </div>
      
      <Footer />

    </>
  );
};

export default Cart;

// import React from 'react';
// import { useCartContext } from './context/cart_context';
// import { CartItem } from './CartItem';
// import { NavLink } from 'react-router-dom';
// import FormattPrice from './helpers/FormattPrice';

// const Cart = () => {
//   const { cart, clearCart, total_price, shipping_fee } = useCartContext();
//   if (cart.length === 0) {
//     return <div className='lg:text-3xl text-xl grid justify-center items-center'>There are no items in the cart.</div>;
//   }
//   return (
//     <>
//       <div className='px-4 sm:px-12 md:px-24 lg:px-48 xl:px-64'>
//         <div className='grid grid-cols-5 gap-1'>
//           <p className='w-[20%]'>Item</p>
//           <p className='w-[20%]'>Price</p>
//           <p className='w-[20%]'>Quantity</p>
//           <p className='w-[20%]'>Subtotal</p>
//           <p className='w-[20%]'>Remove</p>
//         </div>
//         <hr />
//         <div>
//           {cart.map((currElem) => (
//             <CartItem key={currElem.id} {...currElem} />
//           ))}
//         </div>
//         <hr />
//       </div>
//       <div className='flex justify-between px-4 sm:px-12 md:px-24 lg:px-48 xl:px-64 mt-9'>
//         <NavLink to={"/products"}>
//           <button className='bg-purple-500 p-4 text-white' type="button">Continue Shopping</button>
//         </NavLink>
//         <button type="button" onClick={clearCart} className='bg-red-500 p-4 text-white'>Clear Cart</button>
//       </div>
//       <div className="p-4 mt-3">
//         <div className="bg-gray-200  p-4 rounded-lg shadow-md w-full md:w-1/2 lg:w-1/3 mx-auto">
//           <div className="flex justify-between items-center mb-1">
//             <p className="font-semibold">Subtotal:</p>
//             <p className="text-right"><FormattPrice price={total_price} /></p>
//           </div>
//           <div className="flex justify-between items-center ">
//             <p className="font-semibold">Shipping Fee:</p>
//             <p className="text-right"><FormattPrice price={shipping_fee} /></p>
//           </div>
//           <hr className="my-2" />
//           <div className="flex justify-between items-center font-semibold text-lg">
//             <p>Order Total:</p>
//             <p className="text-right"><FormattPrice price={shipping_fee + total_price} /></p>
//           </div>
//         </div>
//       </div>
     
//       {/* <div className="flex flex-col px-44">
//         <div className="overflow-x-auto sm:-mx-6 lg:-mx-8">
//           <div className="inline-block min-w-full py-2 sm:px-6 lg:px-8">
//             <div className="overflow-hidden">
//               <table className="min-w-full text-left text-sm font-light text-surface dark:text-white">
//                 <thead className="border-b border-neutral-200 font-medium dark:border-white/10">
//                   <tr>
//                     <th scope="col" className="px-6 py-4">Item</th>
//                     <th scope="col" className="px-6 py-4">Price</th>
//                     <th scope="col" className="px-6 py-4">Quantity</th>
//                     <th scope="col" className="px-6 py-4">Subtotal</th>
//                     <th scope="col" className="px-6 py-4">Remove</th>
//                   </tr>
//                 </thead>
//                 <tbody>
//                   <tr className="border-b border-neutral-200 dark:border-white/10">
//                     <td className="whitespace-nowrap px-6 py-4 font-medium">1</td>
//                     <td className="whitespace-nowrap px-6 py-4">Mark</td>
//                     <td className="whitespace-nowrap px-6 py-4">Otto</td>
//                     <td className="whitespace-nowrap px-6 py-4">@mdo</td>
//                   </tr>
//                   <tr className="border-b border-neutral-200 dark:border-white/10">
//                     <td className="whitespace-nowrap px-6 py-4 font-medium">2</td>
//                     <td className="whitespace-nowrap px-6 py-4">Jacob</td>
//                     <td className="whitespace-nowrap px-6 py-4">Thornton</td>
//                     <td className="whitespace-nowrap px-6 py-4">@fat</td>
//                   </tr>
//                   <tr className="border-b border-neutral-200 dark:border-white/10">
//                     <td className="whitespace-nowrap px-6 py-4 font-medium">3</td>
//                     <td className="whitespace-nowrap px-6 py-4">Larry</td>
//                     <td className="whitespace-nowrap px-6 py-4">Wild</td>
//                     <td className="whitespace-nowrap px-6 py-4">@twitter</td>
//                   </tr>
//                 </tbody>
//               </table>
//             </div>
//           </div>
//         </div>
//       </div> */}

//     </>
//   );
// };

// export default Cart;
