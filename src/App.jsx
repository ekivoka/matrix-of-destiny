import "./App.scss";
import { Home, HomeDesktop } from "./home";
import { isMobile } from "react-device-detect";
import { RouterProvider, createBrowserRouter } from "react-router-dom";

const router = createBrowserRouter(
    [
        {
            path: "/",
            element: isMobile ? <Home /> : <HomeDesktop />,
        },
        {
            path: "/login",
            element: <Home />,
        },
    ],
    {
        basename: "/matrix-of-destiny",
    }
);

function App() {
    return <RouterProvider router={router} />;
}

export default App;
