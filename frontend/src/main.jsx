import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import App from "./App.jsx";
import store from "./redux/store.js";
import { Provider } from "react-redux";
import { Route, RouterProvider, createRoutesFromElements } from "react-router";
import { createBrowserRouter } from "react-router-dom";
import Home from "./pages/Home.jsx";
import ErrorPage from "./pages/ErrorPage.jsx";

//Auth

// Restricted

const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path="/" element={<App />}>
      <Route index={true} path="/" element={<Home />} />
      {/* <Route path="/" element={<Home />} errorElement={<ErrorPage />} /> */}
      {/* // <Route path="/login" element={<Login />} />
      // <Route path="/register" element={<Register />} />
      //{" "}
      <Route path="" element={<PrivateRoute />}>
        // <Route path="/profile" element={<Profile />} />
        //{" "}
      </Route>
      //{" "} */}
    </Route>
  )
);

createRoot(document.getElementById("root")).render(
  <Provider store={store}>
    <RouterProvider router={router} />
  </Provider>
);
