import { Link } from "react-router-dom";
import { Container } from "../../components/container";
import { Flex, Side } from "../../components/basic/flex";
import { Navigation } from "../../components/navigation";
import { writstWatch } from "../../constant";
// import { Button, IconButton } from "../../components/button";

export const Accessories = () => {
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
        </Flex>
      </Container>
      <div>
        <div>
          <Flex className="justify-center items-center mb-10 sm:px-[5%]">
            <h1 className="text-6xl font-bold mb-2">Accessories</h1>
            <div>
              <p className="text-xl font-light sm:text-center">
                Elevate your style, one accessory at a time - where every detail
                speaks volumes.
              </p>
            </div>
          </Flex>
        </div>
        {/* <h1 className="text-3xl font-bold">Accessories</h1> */}
        <Container className="container mx-auto">
          <Container>
            <div className="flex justify-center">
              <h1 className="text-6xl font-bold mb-2">WristWatch</h1>
            </div>

            <div className="grid grid-cols-3 gap-5">
              {writstWatch.map((wristwatchs) => (
                <div key={wristwatchs.id}>
                  <div className="bg-LightGray flex items-center justify-center">
                    <img
                      src={wristwatchs.image}
                      alt={wristwatchs.alt}
                      className=" h-80"
                    />
                  </div>
                  <div className="flex  justify-between items-center">
                    <p className="font-extralight">{wristwatchs.name}</p>
                    <span className="font-bold">{wristwatchs.price}</span>
                  </div>
                  <h2 className="text-xl w-52 font-extrabold">
                    {wristwatchs.discription}
                  </h2>
                </div>
              ))}
            </div>
          </Container>
          {/* <div>Wrist Watch</div>
          <div>Belts</div>
          <div>Sunglasses</div> */}
          {/* <Link to={"/wristwatch"}>WristWatch</Link> */}
        </Container>
      </div>
    </>
  );
};
