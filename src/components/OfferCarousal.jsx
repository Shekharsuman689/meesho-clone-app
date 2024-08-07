// //This page contains OfferCarousal, Brand Image and All Product Details

import React from 'react'
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Autoplay } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";
import icici from '../assets/carousal/ICICI.avif'
import bankoffer from '../assets/carousal/bankoffers.avif'
import onecard from '../assets/carousal/one card.avif'
import rrl from '../assets/carousal/RRL_SBI.avif'
import image1 from '../assets/brandImages/img-1.jpg'
import image2 from '../assets/brandImages/img-2.jpg'
import image3 from '../assets/brandImages/img-3.jpg'
import image4 from '../assets/brandImages/img-4.jpg'
import { useLoaderData } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import { addToCart } from '../redux/meeshoSlice';
import StarIcon from '@mui/icons-material/Star';
import { BsCart2 } from "react-icons/bs";

function Carousel() {
  // Fetching product data
  const data = useLoaderData()
  const productsData = data.data
  const dispatch = useDispatch()

  return (
    <>
      <div className="xl:h-[400px] h-[300px] mt-10 mb-10">
        <Swiper
          loop={true}
          spaceBetween={30}
          navigation={true}
          modules={[Navigation, Autoplay]}
          autoplay={{
            delay: 3000,
          }}
          className="h-[100%] p-4"
        >
          <SwiperSlide>
            <img src={bankoffer} alt="Carousel POR" className="h-full w-full mx-auto object-contain" />
          </SwiperSlide>
          <SwiperSlide>
            <img src={icici} alt="Carousel POR" className="h-full w-full mx-auto object-contain" />
          </SwiperSlide>
          <SwiperSlide>
            <img src={onecard} alt="Carousel POR" className="h-full w-full mx-auto object-contain" />
          </SwiperSlide>
          <SwiperSlide>
            <img src={rrl} alt="Carousel POR" className="h-full w-full mx-auto object-contain" />
          </SwiperSlide>
        </Swiper>
      </div>
      {/* Brand Image */}
      <div className='py-10'>
        <div className='flex flex-wrap items-center justify-center gap-4 px-3'>
          <img className="hover:scale-105 transition-all duration-200 xl:h-90 xl:w-70 h-50 w-60 object-cover" src={image1} alt="" />
          <img className="hover:scale-105 transition-all duration-200 xl:h-90 xl:w-70 h-50 w-60 object-cover" src={image2} alt="" />
          <img className="hover:scale-105 transition-all duration-200 xl:h-90 xl:w-70 h-50 w-60 object-cover" src={image3} alt="" />
          <img className="hover:scale-105 transition-all duration-200 xl:h-90 xl:w-70 h-50 w-60 object-cover" src={image4} alt="" />
        </div>
      </div>
      {/*----- Heading ------- */}
      <div className='max-w-screen-2xl container mx-auto xl:px-28  mb-8 mt-20'>
        <h2 className='font-bold uppercase xl:text-lg text-center items-center justify-center flex rounded-lg bg-black text-white md:p-3 py-1 mx-6 md:mx-28 my-4'>All Products for you</h2>
      </div>
      {/* All Product Details */}
      <div className='mx-auto m-auto grid grid-cols-1 md:grid-cols-2 xl:grid-cols-4 gap-10 xl:gap-4 px-4 py-14'>
        {
          productsData.map((item) => (
            <div key={item.id} className='bg-white h-auto border-[1.5px] rounded-md hover:border-transparent hover:shadow-testShadow border-gray-400 py-6 z-30 shadow-none transition-all duration-200 relative flex flex-col gap-4'>
              {/* ------Product Image------- */}
              <div className="w-full h-auto flex items-center justify-center relative group ">
                <img className='w-36 h-48 object-contain' src={item.image} alt="Product " />
                {/*-------- product Category------- */}
                <p className='text-sm capitalize italic -top-2 right-2 absolute text-gray-600'>{item.category}</p>
              </div>

              {/* --------Product Title-------- */}
              <div className='px-4 bg-white flex flex-col gap-1 z-10'>
                <h2 className='font-titleFont tracking-wide text-xl text-[#131921] font-extrabold'>
                  {item.title.substring(0, 20)}</h2>
                {/* ---------Product Price ---------- */}
                <p className='text-lg text-gray-800 font-bold'>
                  ₹{item.price}</p>
                {/* ---------Product Description ---------- */}
                <div>
                  <p className=" font-bodyFont text-lg">{item.description.substring(0, 100)}</p>
                  <div className="text-black  flex">
                    <StarIcon />
                    <StarIcon />
                    <StarIcon />
                    <StarIcon />
                    <StarIcon />
                  </div>

                  {/* Add-to-Cart Button */}
                  <div className='items-center justify-center my-3 flex text-lg '>
                    <button
                      onClick={() =>
                        dispatch(
                          addToCart({
                            id: item.id,
                            title: item.title,
                            description: item.description,
                            price: item.price,
                            category: item.category,
                            image: item.image,
                            quantity: 1,
                          })
                      )
                      }
                      className=' bg-black text-white hover:bg-[#98208e] px-6 py-2 font-bold rounded-md flex items-center gap-2'>
                      <BsCart2 className='inline-flex ' />
                      AddToCart</button>
                  </div>
                </div>
              </div>
            </div>
          ))
        }
      </div>
    </>
  )
}

export default Carousel
