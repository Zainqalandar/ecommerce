import React from 'react'
import Slider from 'react-slick'
import BoySho from './Shoes'

const Cards = ({cards}) => {
  
  // console.log(cards)
  const settings = {
    className: 'flex',
    dots: true,
    // fade: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    appendDots: dots => (
      <div
        style={{
          borderRadius: "10px",
          padding: "5px",
          width: '50%',
          background: 'blue',
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
        style={{
          width: "30px",
          color: "blue",
          border: "1px red solid",
          color: 'black',
          fontStyle: 'black'
        }}
      >
        {i + 1}
      </div>
    )
  };

  return (
    <div className=' overflow-y-auto h-[500px]'>
      <Slider {...settings} className=''>
        <div>
          <BoySho cards={cards.slice(0, 6)} />
        </div>
        <div>
          <BoySho cards={cards.slice(7, 13)} />
        </div>
        <div>
          <BoySho cards={cards.slice(14, 17)} />
        </div>
      </Slider>
    </div>
  )
}

export default Cards
