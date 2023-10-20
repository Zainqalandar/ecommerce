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
                        <img src={bannerImgOne} />
                    </Link>
                </div>
                <div>
                    <Link to='/'>
                        <img src={bannerImgTwo} />
                    </Link>
                </div>
                <div>
                    <Link to='/'>
                        <img src={bannerImgThree} />
                    </Link>
                </div>
            </Slider>
        </div>
    )
}

export default Banner