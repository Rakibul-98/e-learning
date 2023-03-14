import React from 'react';
import { SiAirbnb, SiAmazonaws, SiAmazongames, SiFerrarinv, SiIkea, SiMcdonalds, SiToyota } from "react-icons/si";
import Carousel from 'react-multi-carousel';
import 'react-multi-carousel/lib/styles.css';

const Customer = () => {

    const responsive = {
        desktop: {
          breakpoint: { max: 3000, min: 1024 },
          items: 3,
        },
        tablet: {
          breakpoint: { max: 1024, min: 464 },
          items: 2,
        },
        mobile: {
          breakpoint: { max: 464, min: 0 },
          items: 1,
        }
      };

    const carouselData =[
        {
            id:1,
            icon:<SiAirbnb/>,
        },
        {
            id:2,
            icon:<SiFerrarinv/>,
        },
        {
            id:3,
            icon:<SiAmazongames/>,
        },
        {
            id:4,
            icon:<SiAmazonaws/>,
        },
        {
            id:5,
            icon:<SiToyota/>,
        },
        {
            id:6,
            icon:<SiMcdonalds/>,
        },
        {
            id:7,
            icon:<SiIkea/>,
        },
    ]
    return (
        <div className='w-11/12 mx-auto my-20'>
            <Carousel
                responsive={responsive}
                infinite={true}
                autoPlay={true}
                autoPlaySpeed={1500}
                keyBoardControl={true}
                transitionDuration={500}
                containerClass="carousel-container"
                removeArrowOnDeviceType={["tablet", "mobile","desktop"]}
                centerMode={true}
            >
                {
                    carouselData.map(cd=><span className='text-5xl md:text-7xl lg:text-8xl'>{cd.icon}</span>)
                }
            </Carousel>
        </div>
    );
};

export default Customer;