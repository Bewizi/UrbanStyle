import { Link } from "react-router-dom";
import { Flex, Side } from "./basic/flex";

export const Navigation = () => {
  return (
    <nav className="sm:hidden">
      <ul className="text-sm text-primary">
        <Flex side={Side.Row} className="gap-14 ">
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
    </nav>
  );
};
