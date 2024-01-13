import { useState } from "react";

import { Link } from "react-router-dom";
import { Flex, Side } from "../components/basic/flex";
import { Container } from "../components/container";
import { Navigation } from "../components/navigation";
import { Footer } from "./home/footer";
import { Button } from "../components/button";

export const AboutUS = () => {
  const [showMore, setShowMore] = useState(false);

  const toggleShowMore = () => {
    setShowMore(!showMore);
  };
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
      <Container className="com:container com:mx-auto mb-32 sm:px-[10%]">
        <h1 className="text-6xl font-semibold mb-5 ">About us </h1>
        <div className="leading-loose text-xl sm:text-base sm:leading-loose">
          <p className="mb-10">
            <span className="capitalize text-3xl font-semibold ">W</span>
            elcome to UrbanStyle, an avant-garde e-commerce destination where
            fashion converges with urban flair to redefine your style journey.
            At UrbanStyle, we pride ourselves on curating an eclectic collection
            that transcends conventional boundaries, offering a diverse range of
            clothing and accessories that cater to the tastes of contemporary
            trendsetters. From streetwear essentials that exude casual coolness
            to sophisticated urban staples that seamlessly blend comfort with
            style, our carefully selected products reflect the dynamic nature of
            modern fashion. Our user-friendly platform ensures a seamless and
            enjoyable shopping experience, empowering you to explore the latest
            trends and discover unique pieces that resonate with your personal
            style. Navigating through UrbanStyle's virtual aisles, you'll
            encounter a kaleidoscope of colors, patterns, and silhouettes, each
            item meticulously chosen to cater to a spectrum of tastes and
            preferences.
          </p>

          <div>
            {showMore ? (
              <>
                <p className="mb-10">
                  What sets UrbanStyle apart is our commitment to quality. Every
                  garment undergoes rigorous scrutiny to ensure it meets the
                  highest standards of craftsmanship and durability. We
                  collaborate with cutting-edge designers and emerging talent to
                  bring you exclusive collections that resonate with the
                  ever-evolving landscape of fashion.
                </p>{" "}
                <p className="mb-10">
                  {" "}
                  UrbanStyle isn't just a shopping platform; it's a lifestyle.
                  By joining our community, you become part of a global network
                  of fashion enthusiasts who appreciate the fusion of style,
                  comfort, and urban sophistication. Stay connected with the
                  latest fashion news, style tips, and exclusive promotions
                  through our newsletters and social media channels, and let
                  UrbanStyle be your go-to destination for all things fashion.
                </p>{" "}
                <p className="mb-10">
                  {" "}
                  Embark on a style revolution with UrbanStyle – where the
                  streets meet the runway, and your fashion story begins.
                  Explore, express, and elevate your wardrobe with us. Welcome
                  to a world where every click brings you closer to the epitome
                  of urban chic.
                </p>
                <Button
                  onClick={toggleShowMore}
                  className="bg-Charcoal-Gray text-white px-5 py-2 rounded-md"
                >
                  Read Less
                </Button>
              </>
            ) : (
              <Button
                onClick={toggleShowMore}
                className="bg-Charcoal-Gray text-white px-5 py-2 rounded-md"
              >
                Read More
              </Button>
            )}
          </div>
        </div>
      </Container>
      <footer>
        <Footer />
      </footer>
    </>
  );
};
