import { Container } from "../../components/container";
import { IconButton } from "../../components/button";

import { moreShirts } from "../../constant";

export const MoreShirt = () => {
  return (
    <>
      <Container className="com:container com:mx-auto com mt-10 mb-28">
        <div className="grid grid-cols-3 gap-10 sm:gap-x-5 sm:grid-cols-1">
          {moreShirts.map((moreShirt) => (
            <div key={moreShirt.id}>
              <div className="bg-LightGray flex flex-col justify-center items-center rounded-md">
                <div>
                  <img
                    src={moreShirt.img}
                    alt={moreShirt.alt}
                    className="h-96 w-60 object-cover"
                  />
                </div>
              </div>
              <div className="flex items-center justify-between mb-2">
                <span className="font-extralight">{moreShirt.name}</span>
                <p className="font-bold">{moreShirt.price}</p>
              </div>
              <div className="w-64 font-semibold uppercase mb-2 sm:w-full">
                <h4>{moreShirt.discription}</h4>
              </div>
              <div className="flex ">
                <IconButton />
                <IconButton />
                <IconButton />
              </div>
            </div>
          ))}
        </div>
      </Container>
    </>
  );
};
