import { Link } from "react-router-dom";
import { Container } from "../../components/container";
import { Flex, Side } from "../../components/basic/flex";
import { Navigation } from "../../components/navigation";
import { writstWatch } from "../../constant";
import { Footer } from "../home/footer";
import { Button } from "../../components/button";
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
        <div className="mb-16">
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
              <h1 className="text-6xl font-bold mb-20">WristWatch</h1>
            </div>

            <div className="grid grid-cols-3 gap-16">
              {writstWatch.map((wristwatchs) => (
                <div key={wristwatchs.id}>
                  <div className=" flex items-center justify-center mb-5">
                    <img
                      src={wristwatchs.image}
                      alt={wristwatchs.alt}
                      className=" h-80"
                    />
                  </div>
                  <div className="flex  justify-between items-center mb-5">
                    <p className="font-extralight">{wristwatchs.name}</p>
                    <span className="font-bold">{wristwatchs.price}</span>
                  </div>
                  <h2 className="text-xl w-52 font-extrabold capitalize">
                    {wristwatchs.discription}
                  </h2>
                </div>
              ))}
            </div>
          </Container>
          {/* <div>Wrist Watch</div>
          <div>Belts</div>
          <div>Sunglasses</div> */}
          <div className="flex justify-center items-center my-24">
            <Button className="border border-[#2A2A2A] text-lg text-Charcoal-Gray py-2 px-5 rounded-lg flex justify-center items-center">
              <Link to={"/accessoriespage/wristwatch"}>Shop More</Link>
            </Button>
          </div>
        </Container>
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
