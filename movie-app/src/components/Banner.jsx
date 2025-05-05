import React from 'react'
import bgBanner from '../../public/banner.png'
import IconRating from '../assets/rating.png'
import IconRatingHalf from '../assets/rating-half.png'
import ImgTemp from '../assets/temp-1.jpeg'
import IconPlay from '../assets/play-button.png'


const Banner = () => {
  return (
    <div className='w-full h-[700px] bg-amber-100 bg-banner bg-center bg-no-repeat bg-cover relative'
      style={{ backgroundImage: `url(${bgBanner})` }}  >
      <div className='absolute w-full h-full top-0 left-0 bg-black opacity-40'>
        {/* mục đích của thẻ này là làm cho ảnh nền tối lại bằng cách cho một lớp màu đen lên trên ảnh nền sau đó dùng opcity để điều chỉnh độ sáng tối của ảnh nền */}
      </div>
      <div className='w-full h-full flex items-center justify-center space-x-[30px] p-4 relative z-20'>
        <div className='flex flex-col space-y-5 items-baseline w-[50%]'>
          <p className='text-white bg-gradient-to-r from-red-500 to-red-300 py-2 px-3 rounded-2xl text-md'>
            TV Show
          </p>

          <div className='flex flex-col space-y-4'>
            <h2 className='text-white text-3xl'>Tralalelo tralala</h2>
            <div className='flex items-center space-x-3'>
              <img src={IconRating} alt="rating" className='w-8 h-8' />
              <img src={IconRating} alt="rating" className='w-8 h-8' />
              <img src={IconRating} alt="rating" className='w-8 h-8' />
              <img src={IconRating} alt="rating" className='w-8 h-8' />
              <img src={IconRatingHalf} alt="rating" className='w-8 h-8' />
            </div>
            <p className='text-white '> Nội dung phim kể về con cá XẤU đi giày Nike và có 3 chân</p>
            <div className='flex items-center space-x-4'>
              <button className='text-white p-3 bg-blue-400 rounded-2xl cursor-pointer hover:scale-105 ease-in-out duration-500'>Chi tiết</button>
              <button className='text-white p-3 bg-red-400 rounded-2xl cursor-pointer hover:scale-105 ease-in-out duration-500'>Xem phim</button>
            </div>
          </div>

        </div>
        <div className='w-[50%] flex items-center justify-center'>
          <div className="w-[300px] h-[400px] relative group cursor-pointer" >
            <img src={ImgTemp} alt="temp"
              className='w-full h-full object-cover rounded-2xl'
            />
            <div className="w-full h-full absolute top-0 left-0 flex items-center justify-center backdrop-blur-sm opacity-0 group-hover:opacity-100 rounded-2xl">
              <img src={IconPlay}
                alt="play"
                className='w-16 h-16 relative z-20' />
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Banner
