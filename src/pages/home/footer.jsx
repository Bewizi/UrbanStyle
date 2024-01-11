import { Link } from "react-router-dom";
import { Container } from "../../components/container";
import { Form, SearchInput } from "../../components/searchinput";
import { Flex, Side } from "../../components/basic/flex";
import { Bs } from "../../assets";
import { IconObject } from "../../assets/icons/IconObject";

export const Footer = () => {
  return (
    <footer className="bg-Charcoal-Gray text-white py-20">
      <Container className="container mx-auto">
        {/* nav one */}
        <Flex side={Side.Row} className="justify-between mb-16">
          <nav>
            <h3 className="font-bold mb-5">Product</h3>
            <ul className="font-light leading-loose">
              <li>
                <Link to={"/menswear"}>Men</Link>
              </li>
              <li>
                <Link to={"/womenswear"}>Women</Link>
              </li>
              <li>
                <Link to={"/footwears"}>Footwears</Link>
              </li>
              <li>
                <Link>Sales</Link>
              </li>
              <li>
                <Link>Shift planner</Link>
              </li>
              <li>
                <Link>Recruiting</Link>
              </li>
            </ul>
          </nav>

          {/* nav two */}

          <nav>
            <h3 className="font-bold mb-5">Information</h3>
            <ul className="font-light leading-loose">
              <li>
                <Link>FAQ</Link>
              </li>
              <li>
                <Link>Blog</Link>
              </li>
              <li>
                <Link>Support</Link>
              </li>
            </ul>
          </nav>

          {/* nav three */}

          <nav>
            <h3 className="font-bold mb-5">Company</h3>
            <ul className="font-light leading-loose">
              <li>
                <Link>About Us</Link>
              </li>
              <li>
                <Link>Careers</Link>
              </li>
              <li>
                <Link>Contact us</Link>
              </li>
              <li>
                <Link>Lift Media</Link>
              </li>
            </ul>
          </nav>

          {/* form */}
          <Container className="bg-white  py-8 px-10 w-96">
            <Flex side={Side.Column} className="justify-center ">
              <h3 className="font-bold mb-5 text-Charcoal-Gray">Subscribe</h3>
              <Form>
                <div className="relative flex">
                  <SearchInput
                    placeholder="Email address"
                    className="rounded-md border-Charcoal-Gray bg-white text-start pl-5 relative"
                  />
                  <Bs.BsArrowRightShort className="h-full absolute top-0 right-20  w-10 bg-Charcoal-Gray text-white rounded-tr-md rounded-br-md" />
                </div>
              </Form>
              <p className="text-Charcoal-Gray mt-5 font-light ">
                Hello, we are Lift Media. Our goal is to translate the positive
                effects from revolutionizing how companies engage with their
                clients & their team.
              </p>
            </Flex>
          </Container>
        </Flex>
        <hr />

        <Container className="mt-10">
          <Flex side={Side.Row} className="justify-between">
            <div>
              <h1 className=" text-2xl font-bold">
                <Link to={"/"}>UrbanStyle</Link>
              </h1>
            </div>
            <div>
              <ul className="flex gap-10 text-sm items-center">
                <li>Terms</li>
                <li>Privacy</li>
                <li>Cookies</li>
              </ul>
            </div>
            <div className="flex items-center gap-x-5">
              {Object.keys(IconObject).map((index) => (
                <div
                  className="border border-white rounded-full p-2 text-xs"
                  key={index}
                >
                  {IconObject[index]}
                </div>
              ))}
            </div>
          </Flex>
        </Container>
      </Container>
    </footer>
  );
};
