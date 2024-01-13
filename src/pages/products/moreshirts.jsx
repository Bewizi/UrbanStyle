import { Fa } from "../../assets";
import { Button } from "../../components/button";
import { Container } from "../../components/container";
import { moreShirts } from "../../constant";

export const MoreShirt = () => {
  return (
    <>
      <Container className="com:container com:mx-auto mt-10 mb-28">
        <div className="grid grid-cols-3 gap-5 sm:grid-cols-2">
          {moreShirts.map((moreShirt) => (
            <div key={moreShirt}>
              <div className="bg-LightGray flex flex-col justify-center items-center rounded-md">
                <div>
                  <img
                    src={moreShirt.img}
                    alt={moreShirt.alt}
                    className="h-60 object-cover"
                  />
                </div>
              </div>
              <div className="flex items-center justify-between mb-2">
                <span className="font-extralight">{moreShirt.name}</span>
                <p className="font-bold">{moreShirt.price}</p>
              </div>
              <div className="w-64 font-semibold uppercase mb-2 sm:w-44">
                <h4>{moreShirt.discription}</h4>
              </div>
              <div className="flex ">
                <Button className="flex">
                  <Fa.FaStar />
                </Button>
                <Button>
                  <Fa.FaStar />
                </Button>
                <Button>
                  <Fa.FaStar />
                </Button>
              </div>
            </div>
          ))}
        </div>
      </Container>
    </>
  );
};
