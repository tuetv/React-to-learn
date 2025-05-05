import React, { useContext, useState } from 'react'
import ImgTemp from '../assets/temp-1.jpeg'
import PropTypes from 'prop-types'
import Carousel from 'react-multi-carousel';
import "react-multi-carousel/lib/styles.css";
import { MovieContext } from '../context/MovieProvider';


const responsive = {
  superLargeDesktop: {
    // the naming can be any, depends on you.
    breakpoint: { max: 4000, min: 3000 },
    items: 10
  },
  desktop: {
    breakpoint: { max: 3000, min: 1200 },
    items: 7
  },
  tablet: {
    breakpoint: { max: 1200, min: 600 },
    items: 2
  },
  mobile: {
    breakpoint: { max: 600, min: 0 },
    items: 1
  }
};

const MovieList = ({ title, data }) => {

  const {handleTrailer} = useContext(MovieContext)

  return (
    <div className='text-white p-10 mb-10'>
      <h2 className='uppercase text-3xl font-bold mb-4'>{title}</h2>
      <Carousel responsive={responsive}
        className="flex items-center space-x-4">
        {data && data.length > 0 &&  // phòng trước hợp data rỗng thì trang không bị trắng
          data.map((item) => (
            <div key={item.id} className='w-[200px] h-[300px] relative group' onClick={() => handleTrailer(item.id)}>
              <div className="group-hover:scale-115 transition-transform duration-500 ease-in-out cursor-pointer w-full h-full">
                <div className='absolute top-0 left-0 w-full h-full bg-black/40' />
                <img src={`${import.meta.env.VITE_IMG_URL}${item.backdrop_path}`}
                  alt={item.title}
                  className='w-full h-full object-cover rounded-lg shadow-lg'
                />
                <div className="absolute bottom-4 left-1">
                  <p className='uppercase text-md font-bold text-white'>
                    {item.title || item.original_title}
                  </p>
                </div>
              </div>
            </div>
          ))
        }
      </Carousel>
    </div>
  )
}

MovieList.propTypes = {
  title: PropTypes.string,
  data: PropTypes.array,
}

export default MovieList
