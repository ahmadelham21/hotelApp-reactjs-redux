import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.jsx";
import "bootstrap/dist/css/bootstrap.min.css";
import "./index.css";
import { Provider } from "react-redux";
import store from "./redux/store.js";
import { createBrowserRouter } from "react-router-dom";
import Home from "./pages/home/Home.jsx";
import Login from "./pages/auth/Login.jsx";
import { RouterProvider } from "react-router-dom";
import BookingList from "./pages/booking_list/BookingList.jsx";
import Booking from "./pages/booking/Booking.jsx";

export const myRoute = [
  {
    name: "home",
    path: "/",
    element: <Home />,
  },

  {
    name: "Booking List",
    path: "/booking-list",
    element: <BookingList />,
  },
];

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    children: myRoute,
  },
  {
    path: "/login",
    element: <Login />,
  },
  {
    path: "/booking/:id",
    element: <Booking />,
  }
]);

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <Provider store={store}>
      <RouterProvider router={router} />
    </Provider>
  </React.StrictMode>
);
