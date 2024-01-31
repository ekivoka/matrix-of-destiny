import { createBrowserRouter, RouterProvider } from "react-router-dom";
import "./App.scss";
import {Home, HomeDesktop} from "./home";
import Login from "./Login.jsx";
import { isMobile } from "react-device-detect";

const router = createBrowserRouter([
    {
        path: "/",
        element: isMobile ? <Home /> : <HomeDesktop />,
    },
    {
        path: "/login",
        element: <Login />,
    },
]);

function App() {
    return <RouterProvider router={router} />;
}

export default App;
