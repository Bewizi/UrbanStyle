import { Link } from "react-router-dom";
import { Container } from "../../components/container";
import { Navigation } from "../../components/navigation";
import { Flex, Side } from "../../components/basic/flex";
import { Form, SearchInput } from "../../components/searchinput";
import { CiSearch } from "react-icons/ci";
import { IoMdContact } from "react-icons/io";
import { HeroSection } from "./herosection";
import { NewArrival } from "./newarrival";
import { OurProduct } from "./product";
import { CheckOutProcess } from "./process";
import { HotSeason } from "./hotseason";
import { Testimonials } from "./testimonial";
import { Footer } from "./footer";

export const HomePage = () => {
  return (
    <>
      <Container className="container mx-auto mb-20">
        <Flex side={Side.Row} className="justify-between items-center">
          <div>
            <h1 className="text-primary text-2xl font-bold">
              <Link to={"/"}>UrbanStyle</Link>
            </h1>
          </div>

          <Navigation />

          <Form className="relative flex justify-center items-center">
            <CiSearch className="absolute top-3  ml-3 text-xl" />
            <SearchInput type="text" placeholder="search for wears" />
          </Form>
          <IoMdContact className="text-2xl" />
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
