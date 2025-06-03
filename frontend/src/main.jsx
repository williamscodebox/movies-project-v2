import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import App from "./App.jsx";
import store from "./redux/store.js";
import { Provider } from "react-redux";
import { Route, RouterProvider, createRoutesFromElements } from "react-router";
import { createBrowserRouter } from "react-router-dom";
import ErrorPage from "./pages/ErrorPage.jsx";

//Auth
import AdminRoute from "./pages/Admin/AdminRoute.jsx";
import GenreList from "./pages/Admin/GenreList.jsx";

// Restricted
import Login from "./pages/Auth/Login.jsx";
import Register from "./pages/Auth/Register.jsx";
import PrivateRoute from "./pages/Auth/PrivateRoute.jsx";

import Home from "./pages/Home.jsx";
import Profile from "./pages/User/Profile.jsx";
import AllMovies from "./pages/Movies/AllMovies.jsx";
import MovieDetails from "./pages/Movies/MovieDetails.jsx";
import CreateMovie from "./pages/Admin/CreateMovie.jsx";

const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path="/" element={<App />} errorElement={<ErrorPage />}>
      <Route index={true} path="/" element={<Home />} />
      {/* <Route path="/" element={<Home />} errorElement={<ErrorPage />} /> */}
      <Route path="/movies" element={<AllMovies />} />
      <Route path="/login" element={<Login />} />
      <Route path="/register" element={<Register />} />
      <Route path="/movies/:id" element={<MovieDetails />} />

      <Route path="" element={<PrivateRoute />}>
        <Route path="/profile" element={<Profile />} />
      </Route>

      <Route path="" element={<AdminRoute />}>
        <Route path="/admin/movies/genre" element={<GenreList />} />
        <Route path="/admin/movies/create" element={<CreateMovie />} />
      </Route>
    </Route>
  )
);

createRoot(document.getElementById("root")).render(
  <Provider store={store}>
    <RouterProvider router={router} />
  </Provider>
);
