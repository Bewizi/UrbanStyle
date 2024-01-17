import { useState } from "react";
import { Link } from "react-router-dom";
import { Flex, Side } from "../../components/basic/flex";
import { Container } from "../../components/container";
import { products } from "../../constant";
import { Bs, Fa, Io5 } from "../../assets";
import { Button } from "../../components/button";
import { LinkItems } from "../productlistitems";

export const OurProduct = () => {
  const itemsArray = Object.entries(LinkItems);
  const itemsPerPage = 3;

  const [currentPage, setCurrentPage] = useState(0);

  const handlePrevClick = () => {
    setCurrentPage((prevPage) => Math.max(prevPage - 1, 0));
  };

  const handleNextClick = () => {
    const lastPage = Math.ceil(itemsArray.length / itemsPerPage) - 1;
    setCurrentPage((prevPage) => Math.min(prevPage + 1, lastPage));
  };

  const startIndex = currentPage * itemsPerPage;
  const visibleItems = itemsArray.slice(startIndex, startIndex + itemsPerPage);
  return (
    <>
      <Container className="com:container com:mx-auto mb-40 sm:mt-[35rem]">
        <Flex side={Side.Column} className="justify-center items-center">
          <h1 className="text-4xl font-bold text-Charcoal-Gray leading-tight mb-5">
            Our Products
          </h1>
          <p className="text-Gunmetal mb-10">
            Let's find the best outfit for you
          </p>
        </Flex>
        <div className="border-2 rounded-xl py-2 com:mb-10 sm:mb-5 sm:border-none">
          <ul>
            <Flex
              side={Side.Row}
              className="justify-around items-center text-lg text-Sconce"
            >
              {visibleItems.map(([key, value], index) => (
                <li key={index} className="link-hover">
                  <Link to={`/${key.toLowerCase()}`}>{value}</Link>
                </li>
              ))}
            </Flex>
          </ul>
        </div>
        <div className="flex gap-x-3 justify-end items-center sm:justify-end sm:pr-[2%] sm:gap-x-8 mb-10 ">
          <Button onClick={handlePrevClick}>
            <Bs.BsArrowLeftShort className="border border-Charcoal-Gray rounded-full hover:bg-Charcoal-Gray hover:text-white hover:font-bold text-3xl " />
          </Button>
          <Button onClick={handleNextClick}>
            <Bs.BsArrowRightShort className="border border-Charcoal-Gray rounded-full hover:bg-Charcoal-Gray hover:text-white hover:font-bold text-3xl" />
          </Button>
        </div>
        <Container className="grid grid-cols-3 gap-5 mb-12 sm:grid-cols-2 sm:gap-y-10 sm:px-2">
          {products.map((product, index) => (
            <div key={index}>
              <div className="relative mb-3 bg-[#F5F5F5] rounded-lg sm:pt-0">
                <img
                  src={product.img}
                  alt={product.alt}
                  className="object-cover w-80 h-[29rem] sm:w-40 sm:h-40 pt-10  sm:px-5 "
                />
                <Io5.IoHeartOutline className="absolute top-2 right-5 text-4xl bg-white p-2 rounded-full" />
              </div>
              <div className="flex justify-between items-center mb-5 ">
                <Link className="text-Gunmetal hover:underline font-light">
                  {product.caterogy}
                </Link>
                <p className="font-bold">{product.price}</p>
              </div>
              <h3 className="font-bold text-2xl w-64 mb-3 sm:text-base sm:w-44">
                {product.description}
              </h3>
              <div className="flex  items-center gap-3">
                <span className="flex">
                  <Fa.FaStar className="text-[#FFB906]" />
                </span>
                <div className="flex justify-center items-center">
                  <span className="text-Charcoal-Gray font-bold block mr-1">
                    {product.rate}
                  </span>
                  <span className="text-Gunmetal text-sm">
                    {product.reviewa}
                  </span>
                </div>
              </div>
            </div>
          ))}
        </Container>
        <div className="flex items-center justify-center">
          <Link className="border border-[#2A2A2A] text-lg text-Charcoal-Gray py-2 px-5 rounded-lg">
            See More
          </Link>
        </div>
      </Container>
    </>
  );
};
