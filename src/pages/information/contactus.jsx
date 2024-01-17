import { CiSearch } from "react-icons/ci";
import { Form, Link } from "react-router-dom";
import { SearchInput } from "../../components/searchinput";
import { Container } from "../../components/container";
import { Flex, Side } from "../../components/basic/flex";
import { Navigation } from "../../components/navigation";
import { Button } from "../../components/button";
import { Footer } from "../home/footer";

import { imageSlider } from "../../constant";

export const ContactUs = () => {
  return (
    <>
      <div className="flex items-center justify-center sm:mt-5">
        <Form className="relative flex justify-center items-center sm:mb-10 com:hidden">
          <CiSearch className="absolute top-3 left-0 ml-3 text-xl" />
          <SearchInput
            type="text"
            placeholder="search for wears"
            className="sm:w-full"
          />
        </Form>
      </div>
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
        <Flex side={Side.Column} className="justify-center items-center">
          <h1>Contact Us</h1>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Illum id
            tempore possimus atque eveniet illo, consequuntur quod, provident
            temporibus quo aperiam, nostrum voluptatum non consectetur! Iusto
            voluptate modi eveniet ipsum.
          </p>
          <div>
            <p>
              Lorem ipsum, dolor sit amet consectetur adipisicing elit. Nostrum
              autem unde porro consequuntur eius repudiandae nemo mollitia,
              perspiciatis aliquam veritatis? Incidunt odit ab iure vitae harum
              fuga. Molestiae, facilis non.
            </p>
          </div>
          <Form>
            <SearchInput placeholder="Full Name" type="text" />
            <SearchInput placeholder="Email" type="email" />
            <textarea
              name=""
              id=""
              cols="30"
              rows="10"
              placeholder="meassage"
            ></textarea>
          </Form>
          <Button>Send</Button>
        </Flex>
      </div>

      <footer>
        <Footer />
      </footer>
    </>
  );
};
