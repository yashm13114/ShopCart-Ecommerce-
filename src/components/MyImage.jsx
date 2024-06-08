import { useState } from "react";

export const MyImage = ({ imgs = [{ url: "" }] }) => {
    const [MainImage, setMainImage] = useState(imgs[0]);
    return (
      <div className='grid gap-4'>
        <div className='flex flex-wrap gap-2'>
          {imgs.map((currentElem, index) => (
            <figure key={index}>
              <img
                className='lg:w-20 lg:h-20 w-16 h-16 object-cover cursor-pointer'
                src={currentElem.url}
                alt="image"
                onClick={() => { setMainImage(currentElem) }}
              />
            </figure>
          ))}
        </div>
        <div>
          <img src={MainImage.url} className='w-full max-h-96 object-cover' alt="image" />
        </div>
      </div>
    );
  };