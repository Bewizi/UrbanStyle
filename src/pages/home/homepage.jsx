import { Link } from "react-router-dom";
import { Container } from "../../components/container";
import { Navigation } from "../../components/navigation";
import { Flex, Side } from "../../components/basic/flex";
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
