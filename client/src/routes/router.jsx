import UserLayout from '../layout/userLayout';
import Login from '../pages/shared/Login';
import { createBrowserRouter } from "react-router-dom";
import Home from '../pages/user/Home';
import About from '../pages/user/About';
import Signup from '../pages/shared/Signup';
import Contact from '../pages/user/Contact';
import ProductPage from '../pages/user/ProductPage';
import ProductDetailsPage from '../pages/user/ProductDetailsPage';
import ErrorPage from '../pages/shared/ErrorPage';
import ProductList from '../pages/user/ProductList';
import LadiesPage from '../pages/user/LadiesPage';
import MenPage from '../pages/user/MenPage';
import KidsPage from '../pages/user/KidsPage';
import SalesPage from '../pages/user/SalesPage';
import ProfilePage from '../pages/user/ProfilePage';


export const router = createBrowserRouter([
  {
    path: "",
    element: <UserLayout />,
    errorElement: <ErrorPage/>,
    children: [
      {
        path: "/",
        element: <Home />,
      },
      {
        path: "/login",
        element: <Login />,
      },
      {
        path: "/register",
        element: <Signup />,
      },
      {
        path: "/about",
        element: <About />,
      },
      {
        path: "/contact",
        element: <Contact />,
      },
      {
        path: "/sales-page",
        element: <SalesPage />,
      },
      {
        path: "/ladies-page",
        element: <LadiesPage />,
      },
      {
        path: "/men-page",
        element: <MenPage />,
      },
      {
        path: "/kids-page",
        element: <KidsPage />,
      },
      {
        path: "/product",
        element: <ProductPage />,
      },
      {
        path: "/:category",
        element: <ProductList />,
      },
      {
        path: "/productDetails/:productId",
        element: <ProductDetailsPage />,
      },
      {
        // element: <ProtectedRoute />,
        path: "user",
        children: [
            {
                path: "whishlist",
                element: <h1>Wishlist</h1>,
            },
            {
                path: "profile",
                element: <ProfilePage />,
            },
            {
                path: "cart",
                // element: <Cart />,
            },
            {
                path: "order",
                element: <h1> orders page</h1>,
            },
            {
                path: "payment/success",
                element: <h2>Payment success</h2>,
            },
        ],
    },
    ]
  },
]);

