import { Link } from "react-router-dom";
import { Flex, Side } from "../../../components/basic/flex";
import { Container } from "../../../components/container";
import { Navigation } from "../../../components/navigation";
import { Cart } from "../../../components/cart";

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
        <h1>wrist watch</h1>
        <div>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Unde, eum
            mollitia suscipit ex ipsam error assumenda neque nihil nostrum!
            Assumenda sit accusantium inventore aperiam dolores maiores, neque
            adipisci. Odit, voluptates!
          </p>
        </div>
      </div>
    </>
  );
};
