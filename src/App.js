import GitHub from "@mui/icons-material/GitHub";
import React, { lazy, Suspense } from "react";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import "./App.css";
import Git from "./components/Github/Git";
import Stars from "./components/Stars/Stars";
import { db } from "./firebase";
import AllReviews from "./pages/AllReviews/AllReviews";
const Home = lazy(() => import("./pages/Home/Home"));
const AllProject = lazy(() => import("./pages/AllProject/AllProject"));
const ReviewForm = lazy(() => import("./components/ReviewForm/ReviewForm"));
const Contact = lazy(() => import("./pages/Contact/Contact"));
const Certificate = lazy(() => import("./pages/Certificates/Certificate"));

const Layout = () => {
  return (
    <>
      <Home />
    </>
  );
};

const router = createBrowserRouter([
  {
    path: "/",
    element: <Layout />,
  },
  {
    path: "/contact-form",
    element: <Contact />,
  },
  {
    path: "/review-form",
    element: <ReviewForm db={db} />,
  },
  {
    path: "/all-project",
    element: <AllProject />,
  },
  {
    path: "/certificate",
    element: <Certificate />,
  },
  {
    path: "/all-reviews",
    element: <AllReviews />,
  },
  {
    path: "/git",
    element: <Git />,
  },
  
]);

const App = () => {
  return (
    <>
      <Suspense fallback={<h2>Loading...</h2>}>
        <RouterProvider router={router} />
      </Suspense>
    </>
  );
};

export default App;
