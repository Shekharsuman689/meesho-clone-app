import React from 'react';
import img1 from '../assets/img1.jpg';
import { FaShoppingBag } from "react-icons/fa";
import image1 from '../assets/productCatergory/womenCategory.jpg';
import image2 from '../assets/productCatergory/womenfashio.jpg';
import image3 from '../assets/productCatergory/menfashion.jpg';
import image4 from '../assets/productCatergory/jewellery.jpg';
import image5 from '../assets/productCatergory/electronics.jpg';
import { Link } from 'react-router-dom';

function Banner() {
  return (
    <>
      <div className='bg-gray-200 py-10 xl:px-20 px-4 mt-6 xl:mx-20 rounded-xl'>
        <div className='py-2 flex flex-col-reverse md:flex-row justify-between items-center gap-8'>
          <div className='xl:w-1/2 text-center md:text-left'>
            <h2 className='xl:text-4xl text-xl font-semibold mb-4'>Explore Our Collection</h2>
            <p className='xl:text-lg text-md mb-6'>Discover and shop a wide variety of collections from various brands here.</p>
            <Link to="/Product">
              <button className='bg-black text-white hover:bg-[#98208e] px-5 py-2 font-semibold rounded-sm flex items-center gap-2 mx-auto md:mx-0'>
                <FaShoppingBag className='inline-flex' />
                Shop Now
              </button>
            </Link>
          </div>
          <div className='xl:w-1/2'>
            <img className='rounded-tl-3xl rounded-br-3xl object-cover w-full h-full shadow-lg' src={img1} alt="Collection Banner" />
          </div>
        </div>
      </div>

      {/* Category Grid */}
      <div className='mt-10'>
        <p className='font-bold uppercase xl:text-md text-center items-center justify-center flex rounded-lg bg-black text-white md:p-2 py-1 mx-6 md:mx-20 my-4'>
          Explore New and Popular Styles
        </p>
        <div className='mt-8 flex flex-col xl:flex-row items-center justify-center gap-6'>
          <div className='grid grid-cols-1 gap-2 xl:w-2/3'>
            <Link to="/Product">
              <img className='xl:h-80 h-60 w-full hover:scale-105 transition-all duration-200 rounded-lg shadow-lg object-cover' src={image1} alt="Women's Category" />
            </Link>
          </div>
          <div className='grid grid-cols-2 gap-4 xl:w-2/3'>
            <Link to="/Product">
              <img className='xl:h-64 h-40 w-full hover:scale-105 transition-all duration-200 rounded-lg shadow-lg object-cover' src={image2} alt="Women's Fashion" />
            </Link>
            <Link to="/Product">
              <img className='xl:h-64 h-40 w-full hover:scale-105 transition-all duration-200 rounded-lg shadow-lg object-cover' src={image3} alt="Men's Fashion" />
            </Link>
            <Link to="/Product">
              <img className='xl:h-64 h-40 w-full hover:scale-105 transition-all duration-200 rounded-lg shadow-lg object-cover' src={image4} alt="Jewellery" />
            </Link>
            <Link to="/Product">
              <img className='xl:h-64 h-40 w-full hover:scale-105 transition-all duration-200 rounded-lg shadow-lg object-cover' src={image5} alt="Electronics" />
            </Link>
          </div>
        </div>
      </div>
    </>
  );
}

export default Banner;

