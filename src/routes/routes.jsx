import { Navigate, createBrowserRouter } from "react-router-dom";
import Main from "../layout/Main";
// import Home from "../pages/Home/Home/Home";
import Cate from "../pages/Home/Cate/Cate";
import NewsLayout from "../layout/NewsLayout";
import News from "../pages/News/News/News";
import LoginLayout from "../layout/LoginLayout";
import Login from "../pages/Login/Login/Login";
import Resister from "../pages/Login/Resister/Resister";

const router = createBrowserRouter([
    {
        path: '/',
        element: <LoginLayout></LoginLayout>,
        children: [
            {
                path: '/',
                element: <Navigate to='/cate/0' ></Navigate>
            },
            {
                path: '/login',
                element: <Login></Login>
            },
            {
                path: '/resister',
                element: <Resister></Resister>
            }
        ]
    },
    {
        path: "/cate",
        element: <Main></Main>,
        children: [
            // {
            //     path: "/cate",
            //     element: <Cate></Cate>,
            //     loader: () => fetch(`http://localhost:5000/news`)
            // },
            {
                path: ":id",
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