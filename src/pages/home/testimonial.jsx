import { Bs } from "../../assets";
import { Flex, Side } from "../../components/basic/flex";
import { Button } from "../../components/button";
import { Container } from "../../components/container";
import { testimonial } from "../../constant";

export const Testimonials = () => {
  return (
    <Container className="px-5 mb-24">
      <Container className="mb-10">
        <Flex side={Side.Column} className="justify-center items-center">
          <h1 className="text-4xl font-bold text-Charcoal-Gray leading-tight mb-5">
            Testimonials
          </h1>
          <div>
            <p className=" text-right mb-3 text-Gunmetal font-light">
              See what our customers are saying
            </p>
          </div>
        </Flex>
      </Container>
      <Container>
        <div className=" flex gap-x-5 mb-10">
          {testimonial.map((testimonials) => (
            <div key={testimonials.id} className="bg-Plantium pt-5 pb-20 px-5">
              <div className="flex items-center gap-5 mb-10 ">
                <img src={testimonials.img} alt="" className="object-contain" />
                <p className="font-bold text-Charcoal-Gray">
                  {testimonials.name}
                </p>
              </div>
              <blockquote className="font-light text-Gunmetal">
                {testimonials.review}
              </blockquote>
            </div>
          ))}
        </div>
        <div className="flex gap-3 justify-end items-center">
          <Button>
            <Bs.BsArrowLeftShort className="border border-Charcoal-Gray rounded-full hover:bg-Charcoal-Gray hover:text-white hover:font-bold" />
          </Button>
          <Button>
            <Bs.BsArrowRightShort className="border border-Charcoal-Gray rounded-full hover:bg-Charcoal-Gray hover:text-white hover:font-bold" />
          </Button>
        </div>
      </Container>
    </Container>
  );
};
