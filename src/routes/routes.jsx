import { createBrowserRouter } from "react-router-dom";
import Main from "../layout/Main";
import Home from "../pages/Home/Home/Home";
import Cate from "../pages/Home/Cate/Cate";
import NewsLayout from "../layout/NewsLayout";
import News from "../pages/News/News/News";

const router = createBrowserRouter([
    {
        path: "/",
        element: <Main></Main>,
        children: [
            {
                path: "/",
                element: <Cate></Cate>,
                loader: () => fetch(`http://localhost:5000/news`)
            },
            {
                path: "/cate/:id",
                element: <Cate></Cate>,
                loader: ({ params }) => fetch(`http://localhost:5000/cate/${params.id}`)
            }
        ]
    },
    {
        path: "/news",
        element: <NewsLayout></NewsLayout>,
        children: [
            {
                path: ":id",
                element: <News></News>,
                loader: ({ params }) => fetch(`http://localhost:5000/news/${params.id}`)
            }
        ]
    }
]);

export default router;