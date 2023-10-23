import React from 'react'
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { bannerImgOne, bannerImgTwo, bannerImgThree } from '../assets/banner';
import { Link } from 'react-router-dom';

const Banner = () => {
    const settings = {
        dots: true,
        fade: true,
        infinite: true,
        speed: 500,
        slidesToShow: 1,
        slidesToScroll: 1,
        autoplay: true
    };
    return (
        <div>
            <Slider {...settings}>
                <div>
                    <Link to='/'>
                        <img src={bannerImgOne} alt='helo' />
                    </Link>
                </div>
                <div>
                    <Link to='/'>
                        <img src={bannerImgTwo} alt='helo' />
                    </Link>
                </div>
                <div>
                    <Link to='/'>
                        <img src={bannerImgThree} alt='helo' />
                    </Link>
                </div>
            </Slider>
        </div>
    )
}

export default Banner