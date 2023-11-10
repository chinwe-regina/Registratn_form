import {createBrowserRouter} from "react-router-dom";

import Homescreen from "../pages/Homescreen";

export const MainRouter = createBrowserRouter(
    [
        {
            path: "/",
            element: <Homescreen/>
        }
    ]
) 
