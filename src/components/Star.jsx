import React from 'react'
import { FaStar } from "react-icons/fa6";
import { FaStarHalfStroke } from "react-icons/fa6";
import { CiStar } from "react-icons/ci";
export const Star = ({ stars, reviews }) => {
    const ratingStar = Array.from({ length: 5 }, (e, index) => {
        let number = index + 0.5;
        return (
            <span key={index} className='text-yellow-400'>
                {
                    stars >= index + 1 ? (<FaStar />) : stars >= number ? (<FaStarHalfStroke />) : (<CiStar />)
                }
            </span>
        )
    })
    return (
        <div className='flex gap-1'>
            {ratingStar}
            <p>({reviews} customer reviews)</p>
        </div>
    )
}
