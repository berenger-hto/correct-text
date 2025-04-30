import {createBrowserRouter} from "react-router-dom";
import Root from "../components/Root.jsx";
import {Correct} from "../components/Correct.jsx";
import {PageError} from "../components/PageError.jsx";
import Home from "../components/Home.jsx";
import {Resum} from "../components/Resum.jsx";

export const router = createBrowserRouter([
    {
        path: "",
        element: <>
            <Root />
        </>,
        errorElement: <PageError />,
        children: [
            {
                path: "",
                element: <Home />
            },
            {
                path: "/correct",
                element: <Correct />
            }, {
                path: "/resum",
                element: <Resum />
            }
        ]
    }
])