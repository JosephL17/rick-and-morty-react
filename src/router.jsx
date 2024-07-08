import { createBrowserRouter } from 'react-router-dom'
import App from "./App"
import Homepage from './pages/HomePage';
import About from "./pages/About"
import NotFound from './pages/NotFound';
import CharacterPage from "./pages/CharacterPage";
import AllCharacterPage from './pages/AllCharacterPage';
import FavoritesPage from './pages/FavoritesPage';


const router = createBrowserRouter([
    {
        path: "/",
        element: <App/>,
        children: [
            {
                index: true,
                element: <Homepage/>
            },
            {
                path: "about/",
                element: <About/>
            },
            {
                path: "AllCharacterPage/",
                element: <AllCharacterPage />
            },
            {
                path: "AllCharacterPage/:id",
                element: <CharacterPage/>
            },
            {
                path: "FavoritesPage/",
                element: <FavoritesPage/>
            }
        ],
        errorElement:<NotFound />
    }
]);

export default router