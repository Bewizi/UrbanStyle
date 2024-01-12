import { Frame35, Frame40, Frame41, Frame42, Frame43, Go } from "../../assets";
import { Flex, Side } from "../../components/basic/flex";
import { Button } from "../../components/button";
import { Container } from "../../components/container";

export const NewArrival = () => {
  return (
    <>
      <Container className="mb-96 ">
        <Container className="com:container com:mx-auto sm:px-5 sm:mb-10">
          <Flex
            side={Side.Row}
            className="com:justify-between com:items-center sm:flex-col "
          >
            <h1 className="text-4xl font-bold text-Charcoal-Gray leading-tight mb-5 sm:text-2xl">
              Browse our collection <br /> for all your style
            </h1>
            <div>
              <p className=" text-right mb-3 text-Gunmetal font-light sm:hidden sm">
                New Arrival
              </p>
              <Button className="flex items-center justify-center gap-5 border-2 py-2 px-2 text-lg rounded-lg border-primary sm:btn-sm-screen">
                See all collections <Go.GoArrowUpRight className="sm:hidden" />{" "}
              </Button>
            </div>
          </Flex>
        </Container>
        <div className="relative com:container com:mx-auto ">
          <img
            src={Frame35}
            alt=""
            className="w-96 h-96 mt-96 object-cover sm:hidden"
          />
          <div className="flex absolute -top-48 sm:top-0 sm:ml-2 ml-96 z-10 sm:z-0 ">
            <img
              src={Frame41}
              alt=""
              className="w-96 h-96 sm:w-48 sm:h-48 object-cover"
            />
            <img
              src={Frame43}
              alt=""
              className="w-96 h-96 sm:w-48 sm:h-48 object-cover"
            />
          </div>
          <div className="flex absolute top-48 ml-80 sm:top-[12.5rem] sm:ml-0 ">
            <img
              src={Frame40}
              alt=""
              className="w-96 h-96 object-cover  sm:w-48 sm:h-48"
            />
            <img
              src={Frame42}
              alt=""
              className="w-96 h-96 object-cover sm:w-48 sm:h-48"
            />
          </div>
        </div>
      </Container>
    </>
  );
};
