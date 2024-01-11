import { useState } from "react";
import { useNavigate } from "react-router-dom";

import { Flex, Side } from "../../components/basic/flex";
import { Button } from "../../components/button";
import { Container } from "../../components/container";
import { imageSlider } from "../../constant";

export const HeroSection = () => {
  const [isClicked, setIsClicked] = useState(false);
  const navigate = useNavigate();
  const handleClick = () => {
    setIsClicked(true);
    navigate("/menswear");
  };
  return (
    <>
      <Container className="container mx-auto">
        <Flex side={Side.Column} className="items-center justify-center">
          <div className="flex flex-col items-center justify-center mb-10">
            <h1 className="text-5xl text-center font-bold text-Charcoal-Gray leading-tight mb-5">
              Discover your Urban Style: Where <br /> trends meets style
            </h1>
            <p className="text-Dark-Gray">
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
        <Flex side={Side.Row} className=" justify-evenly flex-wrap">
          {imageSlider.map((image, i) => (
            <img
              src={image.img}
              alt={image.alt}
              key={i}
              className="hover:scale-105 transition-all duration-300"
            />
          ))}
        </Flex>
      </Container>
    </>
  );
};
