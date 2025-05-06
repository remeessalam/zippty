import { createBrowserRouter } from "react-router-dom";
import AppLayout from "./Layout/AppLayout";
import AboutPage from "./Pages/AboutPage";
import HomePage from "./Pages/HomePage";
import ContactusPage from "./Pages/ContactusPage";
import CartPage from "./Pages/CartPage";
import ProductPage from "./Pages/ProductsPage";
import ProductDetails from "./Pages/ProductDetails";
import WishlistPage from "./Pages/WishlistPage";
import { AdminLayout } from "./Admin/AdminLayout/AdminLayout";
import AdminHome from "./Admin/AdminPage/AdminHome";
import AdminAllProducts from "./Admin/AdminPage/AdminAllProducts";
import AdminOrderList from "./Admin/AdminPage/AdminOrderList";

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
  {
    path: "/admin",
    element: <AdminLayout />,
    children: [
      { path: "/admin", element: <AdminHome /> },
      { path: "/admin/all-products", element: <AdminAllProducts /> },
      { path: "/admin/order-list", element: <AdminOrderList /> },
    ],
  },
]);

export default AppRouter;
