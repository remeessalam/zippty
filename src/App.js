import { createBrowserRouter } from "react-router-dom";
import AppLayout from "./Layout/AppLayout";
import AboutPage from "./Pages/AboutPage";
import HomePage from "./Pages/HomePage";
import ContactusPage from "./Pages/ContactusPage";
import CartPage from "./Pages/CartPage";
import ProductPage from "./Pages/ProductsPage";
import ProductDetails from "./Pages/ProductDetails";
import WishlistPage from "./Pages/WishlistPage";

const AppRouter = createBrowserRouter([
  {
    path: "/",
    element: <AppLayout />,
    children: [
      { path: "/", element: <HomePage /> },
      { path: "/about-us", element: <AboutPage /> },
      { path: "/contact-us", element: <ContactusPage /> },
      { path: "/cartitems", element: <CartPage /> },
      { path: "/shop", element: <ProductPage /> },
      { path: "/product", element: <ProductDetails /> },
      { path: "/wishlist", element: <WishlistPage /> },
    ],
  },
]);

export default AppRouter;
