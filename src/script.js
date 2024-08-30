import react from "react";
import reactDOM from "react-dom/client";
import NavBar from "./components/NavBar";
import Restaurant from "./components/Restaurant";
import Blogs from "./components/Blogs";
import Error from "./components/Error";
import Body from "./components/Body";
import Footer from "./components/Footer"
import { createBrowserRouter, RouterProvider, Outlet } from "react-router-dom";
import RestaurantDetails from "./components/RestaurantDetails";
import { Provider } from "react-redux";
import appStore from "../src/utils/appStore";
import Cart from "./components/Cart";

const App = () => {
  return (
    <Provider store={appStore}>
    <>
      <NavBar />
      <Outlet />
      <Footer />
    </>
    </Provider>
  );
};

const appRouter = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    children: [
      {
        path: "/",
        element: <Body />,
      },
      {
        path: "/restaurant",
        element: <Restaurant />,
      },
      {
        path: "/blogs",
        element: <Blogs />,
      },
      {
        path: "/restaurant/:resid",
        element: <RestaurantDetails/>
      },
      {
        path: "/cart",
        element: <Cart />,
      },
    ],
    errorElement: <Error />,
  },
]);
const root = reactDOM.createRoot(document.getElementById("root"));

root.render(<RouterProvider router={appRouter} />);
