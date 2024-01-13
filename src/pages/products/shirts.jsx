import { useState } from "react";

import { Link } from "react-router-dom";
import { Flex, Side } from "../../components/basic/flex";
import { Container } from "../../components/container";
import { Navigation } from "../../components/navigation";
import { Footer } from "../home/footer";
import { shirts } from "../../constant";
import { Fa } from "../../assets";
import { Button } from "../../components/button";
import { MoreShirt } from "./moreshirts";

export const Shirts = () => {
  const [isclicked, setIsClicked] = useState(false);
  const [clicked, setClicked] = useState(false);
  const [seeMore, setSeeMore] = useState(false);

  const toggleSeeMore = () => {
    setSeeMore(!seeMore);
  };
  const handleClick = () => {
    setIsClicked(!isclicked);
  };
  const click = () => {
    setClicked(!clicked);
  };

  return (
    <>
      <Container className="com:container com:mx-auto mb-20 mt-5 sm:px-5">
        <Flex side={Side.Row} className=" items-center justify-between">
          <div>
            <h1 className="text-primary text-2xl font-bold">
              <Link to={"/"}>UrbanStyle</Link>
            </h1>
          </div>

          <Navigation />
        </Flex>
      </Container>
      <div>
        <Flex className="justify-center items-center mb-10 sm:px-[5%]">
          <h1 className="text-6xl font-bold mb-2">Shirt</h1>
          <div>
            <p className="text-xl font-light sm:text-center">
              Revitalize your wardrobe with our diverse e-commerce shirt
              collection, where style meets convenience.
            </p>
          </div>
        </Flex>

        <Container className="com:container com:mx-auto mb-28 sm:px-[5%] ">
          <div className=" grid grid-cols-3 gap-10 sm:gap-x-5 sm:grid-cols-2">
            {shirts.map((shirt) => (
              <div key={shirt.id}>
                <div className="bg-LightGray flex items-center justify-center rounded-lg ">
                  <div>
                    <img
                      src={shirt.img}
                      alt={shirt.alt}
                      className="object-cover h-60"
                    />
                  </div>
                </div>
                <div className="flex items-center justify-between mb-2">
                  <span className="font-extralight">{shirt.name}</span>
                  <p className="font-bold">{shirt.price}</p>
                </div>
                <div className="w-64 font-semibold uppercase mb-2 sm:w-44">
                  <h4>{shirt.discription}</h4>
                </div>
                <div className="flex ">
                  <Button onClick={handleClick} className="flex">
                    <Fa.FaStar color={isclicked ? "#FFB906" : undefined} />
                  </Button>
                  <Button onClick={click}>
                    <Fa.FaStar color={clicked ? "#FFB906" : undefined} />
                  </Button>
                  <Button>
                    <Fa.FaStar />
                  </Button>
                </div>
              </div>
            ))}
          </div>

          {seeMore ? (
            <>
              <MoreShirt />
              <div className="flex items-center justify-center mb-20">
                <Button
                  onClick={toggleSeeMore}
                  className="border border-[#2A2A2A] text-lg text-Charcoal-Gray py-2 px-5 rounded-lg"
                >
                  See Less
                </Button>
              </div>
            </>
          ) : (
            <div className="flex items-center justify-center mb-20 mt-32">
              <Button
                onClick={toggleSeeMore}
                className="border border-[#2A2A2A] text-lg text-Charcoal-Gray py-2 px-5 rounded-lg"
              >
                See More
              </Button>
            </div>
          )}
        </Container>
        <div className="flex items-center justify-center mb-20">
          {/* <Link
            to={"/moreshirts"}
            className="border border-[#2A2A2A] text-lg text-Charcoal-Gray py-2 px-5 rounded-lg"
          >
            See More
          </Link> */}
        </div>
      </div>

      {/* footer  */}
      <Container>
        <footer>
          <Footer />
        </footer>
      </Container>
    </>
  );
};
