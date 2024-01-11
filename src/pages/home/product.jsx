import { Link } from "react-router-dom";
import { Flex, Side } from "../../components/basic/flex";
import { Container } from "../../components/container";
import { products } from "../../constant";
import { Fa, Io5 } from "../../assets";
// import { Button } from "../../components/button";

export const OurProduct = () => {
  return (
    <>
      <Container className="container mx-auto mb-40">
        <Flex side={Side.Column} className="justify-center items-center">
          <h1 className="text-4xl font-bold text-Charcoal-Gray leading-tight mb-5">
            Our Products
          </h1>
          <p className="text-Gunmetal mb-10">
            Let's find the best outfit for you
          </p>
        </Flex>
        <div className="border-2 rounded-xl py-2 mb-10">
          <ul>
            <Flex
              side={Side.Row}
              className="justify-around items-center text-lg text-Sconce"
            >
              <li className="link-hover">
                <Link>Shirt</Link>
              </li>
              <li className="link-hover">
                <Link>Accessories</Link>
              </li>
              <li className="link-hover">
                <Link>Jacket</Link>
              </li>
              <li className="link-hover">
                <Link>Footwear</Link>
              </li>
              <li className="link-hover">
                <Link>Cap</Link>
              </li>
              <li className="link-hover">
                <Link>Jeans</Link>
              </li>
            </Flex>
          </ul>
        </div>
        <Container className="grid grid-cols-3 gap-5 mb-12">
          {products.map((product, index) => (
            <div key={index}>
              <div className="relative mb-3">
                <img
                  src={product.img}
                  alt=""
                  className="object-cover w-80 h-[29rem] bg-[#F5F5F5] pt-10 rounded-lg"
                />
                <Io5.IoHeartOutline className="absolute top-2 right-5 text-4xl bg-white p-2 rounded-full" />
              </div>
              <div className="flex justify-between items-center mb-5 ">
                <Link className="text-Gunmetal hover:underline font-light">
                  {product.caterogy}
                </Link>
                <p className="font-bold">{product.price}</p>
              </div>
              <h3 className="font-bold text-2xl text-wrap mb-3">
                {product.description}
              </h3>
              <div className="flex  items-center gap-3">
                <span>
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
