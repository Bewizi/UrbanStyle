import { Link } from "react-router-dom";
import { Navigation } from "../components/navigation";
import { Container } from "../components/container";
import { Flex, Side } from "../components/basic/flex";

export const MensWear = () => {
  return (
    <>
      <Container>
        <Flex side={Side.Row} className="justify-between">
          <div>
            <h1>
              <Link to={"/"}>UrbanStyle</Link>
            </h1>
          </div>

          <Navigation />
        </Flex>
      </Container>
      <Container>
        <footer>Footer</footer>
      </Container>
    </>
  );
};
