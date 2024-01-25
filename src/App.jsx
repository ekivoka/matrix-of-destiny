import { createBrowserRouter, RouterProvider } from "react-router-dom";
import "./App.scss";
import Home from "./home";
import Login from "./Login.jsx";


const router = createBrowserRouter([
    {
        path: "/",
        element: <Home/>,
    },{
        path: "/login",
        element: <Login/>,
    }
]);

function App() {
    return (
        
        <RouterProvider router={router} />
        
    );
}

export default App;
