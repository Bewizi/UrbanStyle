import { useState } from "react";
import { Form, Link } from "react-router-dom";
import { Flex, Side } from "./basic/flex";
import { CiSearch } from "react-icons/ci";
import { SearchInput } from "./searchinput";
import { IoMdContact } from "react-icons/io";
import { Md } from "../assets";
import { Container } from "./container";

export const Navigation = () => {
  const [menuOpen, setMenuOpen] = useState(false);
  const openMenu = () => {
    setMenuOpen(!menuOpen);
    // console.log(openMenu);
  };
  return (
    <>
      <nav className=" flex items-center">
        {/* lagscreen */}
        <Container className="sm:hidden tab:hidden mcom:hidden flex justify-between items-center gap-x-10">
          <ul className="text-sm text-primary sm:font-bold sm:text-xl sm:mb-10 sm:mt-5 ">
            <Flex
              side={Side.Row}
              className="gap-14 sm:gap-y-10 sm:flex-col items-center justify-center"
            >
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
                <Link to={"/accessories"}>Accessories</Link>
              </li>
              <li>
                <Link to={"/sales"}>Sales</Link>
              </li>
            </Flex>
          </ul>
          <Form className="relative flex justify-center items-center sm:mb-10">
            <CiSearch className="absolute top-3 left-0 ml-3 text-xl" />
            <SearchInput type="text" placeholder="search for wears" />
          </Form>
          <div className="sm:flex sm:items-center sm:justify-center sm:mb-5 ">
            <IoMdContact className="text-4xl" />
          </div>
        </Container>

        {/* mobile to tablet */}
        {menuOpen && (
          <div className="sm:bg-LightGray/80 sm:absolute sm:top-0 sm:left-0 sm:w-56">
            <ul className="text-sm text-primary sm:font-bold sm:text-xl sm:mb-10 sm:mt-5 ">
              <Flex
                side={Side.Row}
                className="gap-14 sm:gap-y-10 sm:flex-col items-center justify-center"
              >
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
                  <Link to={"/accessories"}>Accessories</Link>
                </li>
                <li>
                  <Link to={"/sales"}>Sales</Link>
                </li>
              </Flex>
            </ul>
            <div className="sm:flex sm:items-center sm:justify-center sm:mb-5 ">
              <IoMdContact className="text-4xl" />
            </div>
          </div>
        )}
      </nav>
      <div className="text-4xl com:hidden" onClick={openMenu}>
        <Md.MdMenu />
      </div>
    </>
  );
};
