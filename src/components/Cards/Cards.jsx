import React, { useEffect } from 'react'
import Slider from 'react-slick'
import BoySho from './Shoes'
import Mycustom from '../../Context/Usercontext'

const Cards = ({ cards }) => {

  const { data } = Mycustom()
  const fltrcard = cards.filter(card => card.price <= data)
  const settings = {
    className: 'flex',
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    appendDots: dots => (
      <div
        style={{
          borderRadius: "10px",
          padding: "2px",
          width: '50%',
          background: 'white',
          color: 'black',
          position: 'fixed',
          bottom: '0px',
          left: '30%',
          border: '2px solid black'
        }}
      >
        <ul className=' space-x-9'> {dots} </ul>
      </div>
    ),
    customPaging: i => (
      <div
        className=' hover:bg-black text-black hover:text-white w-[30px] border border-black'
      >
        {i + 1}
      </div>
    )
  };

  return (
    <div className=' overflow-y-auto h-[500px]'>
      <Slider {...settings} className=''>
        <div>
          <BoySho cards={fltrcard.slice(0, 6)} />
        </div>
        <div>
          <BoySho cards={fltrcard.slice(7, 13)} />
        </div>
        <div>
          <BoySho cards={fltrcard.slice(14, 17)} />
        </div>
      </Slider>
    </div>
  )
}

export default Cards
