import React, { useContext } from 'react'
import PropTypes from 'prop-types'
import { MovieContext } from '../context/MovieProvider'


const MovieSearch = ({ title, data }) => {

    const { handleTrailer } = useContext(MovieContext)

    return (
        <div className='text-white p-10 mb-10'>
            <h2 className='uppercase text-xl mb-4'>{title}</h2>
            <div className='grid lg:grid-cols-5 sm:grid-cols-4 grid-cols-3 gap-4 '>
                {data && data.map((item) => (
                    <div key={item.id} className='w-[200px] h-[300px] relative group'
                        onClick={() => handleTrailer(item.id)}
                    >
                        <div className="group-hover:scale-105 transition-transform duration-500 ease-in-out cursor-pointer w-full h-full">
                            <div className='absolute top-0 left-0 w-full h-full bg-black/40'/>
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
                ))}
            </div>
        </div>
    )
}

MovieSearch.propTypes = {
    title: PropTypes.string,
    data: PropTypes.array,
}

export default MovieSearch
