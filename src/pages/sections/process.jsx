import { Flex, Side } from "../../components/basic/flex";
import { Container } from "../../components/container";

import {
  cartReviewStep,
  shippingInfoStep,
  paymentStep,
  orderReviewStep,
  orderConfrimStep,
  acctCreateStep,
} from "../../checkout/checkoutobject";

export const CheckOutProcess = () => {
  return (
    <Container className="com:container com:mx-auto mb-28 sm:px-10">
      <Flex side={Side.Column} className="justify-center items-center">
        <h1 className="text-4xl font-bold sm:text-center sm:text-2xl text-Charcoal-Gray leading-tight mb-5">
          CheckOut Process
        </h1>
        <p className="text-Gunmetal mb-10 sm:text-center font-light">
          Follow these 6 steps to purchase and get your item delivered to you
        </p>
      </Flex>
      <Container>
        <div className="grid grid-cols-3 gap-5 sm:grid-cols-1 ">
          {/* cartreview */}
          <div className="bg-[#F5F5F5] flex flex-col items-center justify-center py-10 px-5 ">
            <span className="text-Charcoal-Gray border border-Charcoal-Gray rounded-full text-lg p-2 mb-5">
              {cartReviewStep.chart}
            </span>
            <h3 className="font-bold text-xl mb-2">{cartReviewStep.title}</h3>
            <p className="text-DimGray font-light">
              {cartReviewStep.description}
            </p>
          </div>
          {/* shipping info */}

          <div className="bg-[#F5F5F5] flex flex-col items-center justify-center py-10 px-5">
            <span className="text-Charcoal-Gray border border-Charcoal-Gray rounded-full text-lg p-2 mb-5">
              {shippingInfoStep.ship}
            </span>
            <h3 className="font-bold text-xl mb-2">{shippingInfoStep.title}</h3>
            <p className="text-DimGray font-light">
              {shippingInfoStep.description}
            </p>
          </div>

          {/* payment */}
          <div className="bg-[#F5F5F5] flex flex-col items-center justify-center py-10 px-5">
            <span className="text-Charcoal-Gray border border-Charcoal-Gray rounded-full text-lg p-2 mb-5">
              {paymentStep.payment}
            </span>
            <h3 className="font-bold text-xl mb-2">{paymentStep.title}</h3>
            <p className="text-DimGray font-light">{paymentStep.description}</p>
          </div>

          {/* order */}
          <div className="bg-[#F5F5F5] flex flex-col items-center justify-center py-10 px-5">
            <span className="text-Charcoal-Gray border border-Charcoal-Gray rounded-full text-lg p-2 mb-5">
              {orderReviewStep.order}
            </span>
            <h3 className="font-bold text-xl mb-2">{orderReviewStep.title}</h3>
            <p className="text-DimGray font-light">
              {orderReviewStep.description}
            </p>
          </div>

          {/* orderconfirm */}
          <div className="bg-[#F5F5F5] flex flex-col items-center justify-center py-10 px-5">
            <span className="text-Charcoal-Gray border border-Charcoal-Gray rounded-full text-lg p-2 mb-5">
              {orderConfrimStep.confirm}
            </span>
            <h3 className="font-bold text-xl mb-2">{orderConfrimStep.title}</h3>
            <p className="text-DimGray font-light">
              {orderConfrimStep.description}
            </p>
          </div>

          {/* Account Creation */}
          <div className="bg-[#F5F5F5] flex flex-col items-center justify-center py-10 px-5">
            <span className="text-Charcoal-Gray border border-Charcoal-Gray rounded-full text-lg p-2 mb-5">
              {acctCreateStep.acctCreate}
            </span>
            <h3 className="font-bold text-xl mb-2">{acctCreateStep.title}</h3>
            <p className="text-DimGray font-light">
              {acctCreateStep.description}
            </p>
          </div>
        </div>
      </Container>
    </Container>
  );
};
