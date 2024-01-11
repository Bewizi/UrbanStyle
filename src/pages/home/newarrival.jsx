import { Frame35, Frame40, Frame41, Frame42, Frame43, Go } from "../../assets";
import { Flex, Side } from "../../components/basic/flex";
import { Button } from "../../components/button";
import { Container } from "../../components/container";

export const NewArrival = () => {
  return (
    <>
      <Container className="mb-96">
        <Container className="container mx-auto">
          <Flex side={Side.Row} className="justify-between items-center">
            <h1 className="text-4xl font-bold text-Charcoal-Gray leading-tight mb-5">
              Browse our collection <br /> for all your style
            </h1>
            <div>
              <p className=" text-right mb-3 text-Gunmetal font-light">
                New Arrival
              </p>
              <Button className="flex items-center justify-center gap-5 border-2 py-2 px-2 text-lg rounded-lg border-primary">
                See all collections <Go.GoArrowUpRight />{" "}
              </Button>
            </div>
          </Flex>
        </Container>
        <div className="relative container mx-auto">
          <img src={Frame35} alt="" className="w-96 h-96 mt-96 object-cover" />
          <div className="flex absolute -top-48 ml-96 z-10 ">
            <img src={Frame41} alt="" className="w-96 h-96" />
            <img src={Frame43} alt="" className="w-96 h-96" />
          </div>
          <div className="flex absolute top-48 ml-80 ">
            <img src={Frame40} alt="" className="w-96 h-96 object-cover " />
            <img src={Frame42} alt="" className="w-96 h-96 object-cover" />
          </div>
        </div>
      </Container>
    </>
  );
};
