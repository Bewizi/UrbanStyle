import { Link } from "react-router-dom";
import { Container } from "../components/container";
import { Io5, ManInBlack, ManInWhite } from "../assets";

export const WomensWear = () => {
  return (
    <div>
      <div>
        <h1>
          <Link to={"/"}>UrbanStyle</Link>
        </h1>
      </div>
      <h1 className="text-3xl font-bold">Womens Wear</h1>
      <Container>
        <div className="relative container mx-auto rounded-md">
          <img
            src={ManInBlack}
            alt=""
            className="w-56 bg-[#F5F5F5] pt-10 rounded-md "
          />
          <Io5.IoHeartOutline className="absolute top-2 translate-x-44 text-4xl bg-white p-2 rounded-full" />
        </div>
        <div className="relative container mx-auto">
          <img src={ManInWhite} alt="" className="w-56 bg-[#F5F5F5] pt-10 " />
          <Io5.IoHeartOutline className="absolute top-2 translate-x-44 text-4xl bg-white p-2 rounded-full  " />
        </div>
      </Container>
    </div>
  );
};
