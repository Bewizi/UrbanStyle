// import LandingPage from "../components/landingpage";

import Product from "../components/product";
import Products from "../components/products";
import { AboutUS } from "../pages/aboutus";
import { Accessories } from "../pages/accessoriespage";
import { FootWears } from "../pages/footwearpage";
import { HomePage } from "../pages/home/homepage";
import { ContactUs } from "../pages/information/contactus";
import { MensWear } from "../pages/menswear";
import { MoreShirt } from "../pages/products/moreshirts";
import { Shirts } from "../pages/products/shirts";
import { Sales } from "../pages/sales";
import { WomensWear } from "../pages/womenswear ";

export const routes = [
  {
    path: "/",
    children: [
      {
        index: true,
        element: <HomePage />,
      },
      {
        path: "/menswear",
        element: <MensWear />,
      },
      {
        path: "/womenswear",
        element: <WomensWear />,
      },
      {
        path: "/footwears",
        element: <FootWears />,
      },
      {
        path: "/accessories",
        element: <Accessories />,
      },
      {
        path: "/sales",
        element: <Sales />,
      },
      {
        path: "/shirts",
        element: <Shirts />,
      },
      {
        path: "/aboutus",
        element: <AboutUS />,
      },
      {
        path: "/moreshirts",
        element: <MoreShirt />,
      },
      {
        path: "/contactus",
        element: <ContactUs />,
      },
      {
        path: "/products",
        children: [
          {
            index: true,
            element: <Products />,
          },
          {
            path: "/products/:id",
            element: <Product />,
          },
        ],
      },
    ],
  },
];
export default routes;
