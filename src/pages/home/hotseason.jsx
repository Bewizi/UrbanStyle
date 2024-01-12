import { SensitiveMan } from "../../assets";
import { Flex, Side } from "../../components/basic/flex";
import { Button } from "../../components/button";
import { Container } from "../../components/container";

export const HotSeason = () => {
  return (
    <Container className="bg-Charcoal-Gray mb-20 ">
      <Container className="text-white com:container com:mx-auto sm:pt-20">
        <Flex
          side={Side.Row}
          className="items-center justify-between sm:flex-col"
        >
          <div className="hot-season">
            <h1 className="text-5xl font-bold w-[35rem] mb-5 sm:mb-2 sm:w-full sm:text-3xl">
              Hot season is coming
            </h1>
            <p className="text-xl font-light mb-10 sm:mb-5 ">
              The 10 biggest summer 2023 trends
            </p>
            <Button className="bg-white text-Charcoal-Gray font-bold px-20 py-3 rounded-lg">
              Shop Now
            </Button>
          </div>
          <div>
            <img
              src={SensitiveMan}
              alt="Young and sensitive man thinking"
              className="object-cover"
            />
          </div>
        </Flex>
      </Container>
    </Container>
  );
};
