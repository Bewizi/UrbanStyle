import { Link } from "react-router-dom";
import { Flex, Side } from "../../../components/basic/flex";
import { Container } from "../../../components/container";
import { Navigation } from "../../../components/navigation";
import { Cart } from "../../../components/cart";

import { moreWatches } from "../../../constant";

export const WristWatch = () => {
  return (
    <>
      <Container className="com:container com:mx-auto mb-20 mt-5 sm:px-5">
        <Flex side={Side.Row} className="justify-between items-center">
          <div>
            <h1 className="text-primary text-2xl font-bold">
              <Link to={"/"}>UrbanStyle</Link>
            </h1>
          </div>

          <Navigation />
          <Cart />
        </Flex>
      </Container>
      <div>
        <div className="px-[5%]  grid grid-cols-3 gap-5 sm:grid-cols-1 sm:gap-y-28">
          {moreWatches.map((morewatch) => (
            <div key={morewatch.id}>
              <div className="flex items-center justify-center mb-5 sm:mb-0">
                <img
                  src={morewatch.image}
                  alt={morewatch.alt}
                  className="h-80 object-cover"
                />
              </div>
              <div className="flex flex-col items-center justify-between ">
                <p className="font-extralight">{morewatch.name}</p>
                <span className="font-bold">{morewatch.price}</span>
                <div>
                  <h3 className="text-2xl capitalize font-bold w-64 mt-5 text-center">
                    {morewatch.discription}
                  </h3>
                </div>
              </div>
            </div>
          ))}
        </div>
        <Container className="container mx-auto">
          <div className="grid grid-cols-3 gap-5"></div>
        </Container>
      </div>
    </>
  );
};
