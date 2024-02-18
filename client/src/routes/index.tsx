import { createBrowserRouter , Outlet, Navigate, RouterProvider} from 'react-router-dom'

import Login from '../modules/auth/login/Login'
import Authentification from '../modules/auth/Authentification'
import ErrorPage from './ErrorPage'

const routes = createBrowserRouter([
    {
        path: "/chat",
        element: <Outlet />,
        errorElement: <ErrorPage />,
        children: [
            {
                index: true,
                element: <Navigate to={'auth/login'} replace />
            },
            {
                path: 'auth',
                element: <Authentification />,
                children: [
                    { path: 'login', element: <Login /> }
                ]
            }
        ]
    }
])

export function ReactRouter(){
    return (
        <RouterProvider router={routes} />
    )
}