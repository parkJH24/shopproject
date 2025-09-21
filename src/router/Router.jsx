import { createBrowserRouter, Navigate, replace, RouterProvider } from "react-router-dom";
import Main from "../pages/Main";
import NotFound from "../pages/NotFoun";
import App from "../App";
import CategoryPage from "../pages/CategoryPage";
import UploadProduct from "../pages/UploadProduct";
import { useAuthContext } from "../context/AuthContext";


export default function Router() {

    const ProtectRouter = ({ checkAdmin, children }) => {
        
        const { user, init } = useAuthContext();
        console.log(init)
        if(init) return null

        if (!user || (checkAdmin && !user.isAdmin)) {
            return <Navigate to='/' replace />
        };
        return children
    }

    const router = createBrowserRouter([
        {
            path: '/',
            element: <App />,
            errorElement: <NotFound />,
            children: [
                { index: true, element: <Main /> },
                { path: '/products/:category', element: <CategoryPage /> },
                {
                    path: '/products/upload',
                    element:
                        <ProtectRouter checkAdmin>
                            <UploadProduct />
                        </ProtectRouter>
                }
            ]

        }
    ])
    return <RouterProvider router={router} />
}