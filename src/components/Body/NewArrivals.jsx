import React from 'react'
import SampleNextArrow from './SampleNextArrow';
import SamplePrevArrow from './SamplePrevArrow';
import Slider from 'react-slick';

const NewArrivals = () => {
    const settings = {
        infinite: true,
        speed: 500,
        slidesToShow: 4,
        slidesToScroll: 1,
        nextArrow: <SampleNextArrow />,
        prevArrow: <SamplePrevArrow />,
        responsive: [
          {
            breakpoint: 1025,
            settings: {
              slidesToShow: 3,
              slidesToScroll: 1,
              infinite: true,
            },
          },
          {
            breakpoint: 769,
            settings: {
              slidesToShow: 2,
              slidesToScroll: 2,
              infinite: true,
            },
          },
          {
            breakpoint: 480,
            settings: {
              slidesToShow: 1,
              slidesToScroll: 1,
              infinite: true,
            },
          },
        ],
      };
  return (
    <div className="w-full pb-16">
      {/* <Heading heading="New Arrivals" /> */}
      <h1 className=' font-bold text-3xl m-2'>New Arrivals</h1>
      <Slider {...settings}>
        <div className="px-2">
          <img src="https://images.unsplash.com/photo-1551489186-ccb95a1ea6a3?auto=format&fit=crop&q=60&w=500&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1yZWxhdGVkfDJ8fHxlbnwwfHx8fHw%3D" alt="" />
        </div>
        <div className="px-2">
          <img src="https://media.istockphoto.com/id/644505002/photo/fashion-concept-red-blouse-with-a-bouquet-of-roses-and-pink-glasses-on-a-light-background-top.jpg?s=612x612&w=0&k=20&c=nvkk8vYoEgKbVKl1E4c5cZZAj86NdoyHtaJRfmvMffA=" alt="" />
        </div>
        <div className="px-2">
         <img src="https://media.istockphoto.com/id/893450368/photo/gray-blouse-black-shoes-and-orange-roses-fashionable-concept.jpg?s=612x612&w=0&k=20&c=CUdlLHPzDlZX5sm8MiXUAugi2_hluT4ptErlER0NNNA=" alt="" />
        </div>
        <div className="px-2">
        <img src="https://media.istockphoto.com/id/958412714/photo/blue-denim-shirt-and-bouquet-of-tulips-fashionable-concept.jpg?s=612x612&w=0&k=20&c=6wFyj6Z6DHihGPc6HsOru1qZFxz98Gryuzokfuz3SE8=" alt="" />
        </div>
        <div className="px-2">
          <img src="https://media.istockphoto.com/id/1153108314/photo/fashion-blogger-working-with-laptop-workspace-with-female-accessory-cosmetics-products-on.jpg?s=612x612&w=0&k=20&c=8Fk8QsspKJMuXJN3G_DRoPqR0OWAD09coyFKlksQcU8=" alt="" />
        </div>
      </Slider>
    </div>
  )
}

export default NewArrivals