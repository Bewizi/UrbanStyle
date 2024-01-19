import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";

import { Flex, Side } from "../../components/basic/flex";
import { Button } from "../../components/button";
import { Container } from "../../components/container";
import { imageSlider } from "../../constant";

// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";

// import "./styles.css";

// import required modules
import { Autoplay, Pagination } from "swiper/modules";

export const HeroSection = () => {
  const [isClicked, setIsClicked] = useState(false);
  const navigate = useNavigate();
  const handleClick = () => {
    setIsClicked(true);
    navigate("/menswear");
  };

  const [activeIndex, setActiveIndex] = useState(0);

  useEffect(() => {
    // Create an interval to change the activeIndex every 3000 milliseconds (3 seconds)
    const interval = setInterval(() => {
      setActiveIndex((prevIndex) => (prevIndex + 1) % imageSlider.length);
    }, 3000);

    // Clear the interval on component unmount to avoid memory leaks
    return () => clearInterval(interval);
  }, []);

  return (
    <>
      <Container className="com:container com:mx-auto">
        <Flex side={Side.Column} className="items-center justify-center">
          <div className="flex flex-col items-center justify-center mb-10">
            <h1 className="text-5xl text-center font-bold text-Charcoal-Gray leading-tight mb-5 sm:px-5 sm:text-4xl">
              Discover your Urban Style: Where <br /> trends meets style
            </h1>
            <p className="text-Dark-Gray font-light sm:text-center sm:text-xs">
              Explore your gateway to a world of contemporary fashion, where
              every <br /> garments tells a story of urban resilience, street
              attitude and modern chic.
            </p>
          </div>
          <Button
            onClick={handleClick}
            disabled={isClicked}
            // Step 3: Update the state when the button is clicked

            // Step 4: Call the function to handle the click event

            className="bg-Charcoal-Gray text-white font-bold rounded-md px-20 py-3 mb-20"
          >
            {isClicked ? "Redirecting..." : "Shop Now"}
          </Button>
        </Flex>
      </Container>
      <Container className="mb-40">
        <Swiper
          slidesPerView={3}
          spaceBetween={30}
          autoplay={{
            delay: 2500,
            disableOnInteraction: false,
          }}
          pagination={{
            clickable: true,
          }}
          modules={[Pagination, Autoplay]}
          className="mySwiper sm:hidden"
        >
          {imageSlider.map((image, i) => (
            <SwiperSlide key={image.id}>
              <img
                src={image.img}
                alt={image.alt}
                key={i}
                className={`hover:scale-105 transition-all duration-300  h-80 sm:w-full `}
              />
            </SwiperSlide>
          ))}
        </Swiper>

        <Container className="mb-40 com:hidden">
          <Flex
            side={Side.Row}
            className="justify-evenly flex-wrap sm:gap-y-10"
          >
            {imageSlider.map((image, i) => (
              <img
                src={image.img}
                alt={image.alt}
                key={i}
                className={`${
                  i === activeIndex ? "block" : "hidden"
                } h-1/5 w-1/5 bg-contain hover:scale-105 transition-all duration-300  sm:w-80 sm:h-80 px-[5%]`}
              />
            ))}
          </Flex>
        </Container>
      </Container>
    </>
  );
};
