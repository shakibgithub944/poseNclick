import { createBrowserRouter } from "react-router-dom";
import AddService from "../components/AddService/AddService";
import AllSurvices from "../components/AllServices/AllSurvices";
import Blog from "../components/Blog/Blog";
import Home from "../components/Home/Home";
import Login from "../components/Login/Login";
import Root from "../components/Main/Root";
import MyReviews from "../components/MyReviews/MyReviews";
import PrivetRoute from "../components/PrivetRoute/PrivetRoute";
import Register from "../components/Register/Register";
import ReviewUpdate from "../components/ReviewUpdate/ReviewUpdate";
import ServiceDetails from "../components/ServiceDetails/ServiceDetails";
import Services from "../components/Services/Services";

const router = createBrowserRouter([
    {
        path: '/',
        element: <Root></Root>,
        children: [
            {
                path: '/',
                element: <Home></Home>
            },
            {
                path: '/home',
                element: <Home></Home>
            },
            {
                path: '/blog',
                element: <Blog></Blog>
            },

            {
                path: '/services',
                element: <AllSurvices></AllSurvices>,
                loader: () => {
                    return fetch('http://localhost:5000/all-services');
                }
            },
            {
                path: '/service/:id',
                element: <ServiceDetails></ServiceDetails>,
                loader: ({ params }) => {
                    return fetch(`http://localhost:5000/all-services/${params.id}`)
                }
            },
            {
                path: '/myReview',
                element: <PrivetRoute><MyReviews></MyReviews></PrivetRoute>
            },
            {
                path:'/addservice',
                element:<PrivetRoute><AddService></AddService></PrivetRoute>
            },
            {
                path: '/login',
                element: <Login></Login>
            },
            {
                path: '/register',
                element: <Register></Register>
            },
            {
                path: '/reviews/:id',
                element: <ReviewUpdate></ReviewUpdate>,
                loader: ({ params }) => {
                    return fetch(`http://localhost:5000/reviews/${params.id}`)
                }
            }
        ]
    }
])

export default router