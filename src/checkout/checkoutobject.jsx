import { Ci, Io5, Md, Tb } from "../assets";

export const cartReviewStep = {
  id: 1,
  chart: <Ci.CiShoppingCart />,
  title: "Cart Review",
  description:
    "Upon clicking the check out icon you will be taken to the cart review page where you can review items on your cart, update quantities, or remove items if needed. Then you will also see the total cost and any applicable discounts.",
};

export const shippingInfoStep = {
  ship: <Md.MdOutlineLocalShipping />,
  title: "Shipping Information",
  description:
    "After reviewing the cart, you click ‘proceed to shipping’ then you are prompted to provide shipping information, including name, address, and contact details. Next, you select your shipping method (e.g., standard, express) and enter any special information.",
};

export const paymentStep = {
  payment: <Io5.IoWalletOutline />,
  title: "Payment",
  description:
    "After confirming shipping details, you click ‘Proceed to payment’ and enter your payment information, including credit card details or other payment methods.",
};

export const orderReviewStep = {
  order: <Tb.TbReceipt />,
  title: "Order Review",
  description:
    "Upon successful payment information input, you are taken to order review page and there you can see a summary of your order, including items, shipping details and total cost. In this page you review and confirm your order.",
};
export const orderConfrimStep = {
  confirm: <Tb.TbReceipt />,
  title: "Order Confirmation",
  description:
    "Upon successful payment information input, you are taken to order review page and there you can see a summary of your order, including items, shipping details and total cost. In this page you review and confirm your order.",
};
export const acctCreateStep = {
  acctCreate: <Tb.TbReceipt />,
  title: "Account Creation",
  description:
    "Upon successful payment information input, you are taken to order review page and there you can see a summary of your order, including items, shipping details and total cost. In this page you review and confirm your order.",
};

// export const individualSteps = [cartReviewStep, shippingInfoStep];
