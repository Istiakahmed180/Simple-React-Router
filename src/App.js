import logo from "./logo.svg";
import "./App.css";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Home from "./components/Home/Home";
import About from "./components/About/About";
import Products from "./components/Products/Products";
import Main from "./Layout/Main";
import Friends from "./components/Friends/Friends";
import FriendDetails from "./components/FriendDetails/FriendDetails";

function App() {
  const router = createBrowserRouter([
    {
      path: "/",
      element: <Main></Main>,
      children: [
        { path: "/", element: <Home></Home> },
        { path: "/home", element: <Home></Home> },
        { path: "/products", element: <Products></Products> },
        {
          path: "/friends",
          loader: () => {
            return fetch("https://jsonplaceholder.typicode.com/users");
          },
          element: <Friends></Friends>,
        },
        {
          path: "/friend/:friendID",
          loader: ({ params }) => {
            return fetch(
              `https://jsonplaceholder.typicode.com/users/${params.friendID}`
            );
          },
          element: <FriendDetails></FriendDetails>,
        },
      ],
    },

    { path: "/about", element: <About></About> },
    { path: "*", element: <div>This Page Is Not Found</div> },
  ]);
  return (
    <div className="App">
      <RouterProvider router={router}></RouterProvider>
    </div>
  );
}

export default App;
