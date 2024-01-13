import { Link } from "react-router-dom";
import { Container } from "../components/container";

export const Accessories = () => {
  return (
    <div>
      <div>
        <h1>
          <Link to={"/"}>UrbanStyle</Link>
        </h1>
      </div>
      <h1 className="text-3xl font-bold">Accessories</h1>
      <Container>
        <div>Wrist Watch</div>
        <div>Belts</div>
        <div>Sunglasses</div>
      </Container>
    </div>
  );
};
