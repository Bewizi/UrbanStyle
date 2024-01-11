import { SensitiveMan } from "../../assets";
import { Flex, Side } from "../../components/basic/flex";
import { Button } from "../../components/button";
import { Container } from "../../components/container";

export const HotSeason = () => {
  return (
    <Container className="bg-Charcoal-Gray mb-20 ">
      <Container className="text-white container mx-auto">
        <Flex side={Side.Row} className="items-center justify-between">
          <div>
            <h1 className="text-5xl font-bold w-[35rem] mb-5">
              Hot season is coming
            </h1>
            <p className="text-2xl font-light mb-10">
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
