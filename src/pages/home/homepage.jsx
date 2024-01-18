import { Form, Link } from "react-router-dom";
import { Container } from "../../components/container";
import { Navigation } from "../../components/navigation";
import { Flex, Side } from "../../components/basic/flex";
import { HeroSection } from "../sections/herosection";
import { NewArrival } from "../sections/newarrival";
import { OurProduct } from "../sections/product";
import { CheckOutProcess } from "../sections/process";
import { HotSeason } from "../sections/hotseason";
import { Testimonials } from "../sections/testimonial";
import { Footer } from "./footer";
import { CiSearch } from "react-icons/ci";
import { SearchInput } from "../../components/searchinput";
import { Cart } from "../../components/cart";

export const HomePage = () => {
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
          <Cart />
        </Flex>
      </Container>
      <HeroSection />
      <NewArrival />
      <OurProduct />
      <CheckOutProcess />
      <HotSeason />
      <Testimonials />

      <footer>
        <Footer />
      </footer>
    </>
  );
};
