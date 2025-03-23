import { createBrowserRouter, Outlet, RouterProvider } from "react-router-dom";
import Navbar from "./Pages/components/Navbar";
import Footerbar from "./Pages/components/Footerbar";
import Accueil from "./Pages/Accueil";
import ErrorPage from "./Pages/ErrorPage";
import Services from './Pages/Services';
import Real from './Pages/Real';
import Blog from './Pages/Blog';
import Contact from './Pages/Contact';
import MentionsLeg from './Pages/MentionsLeg';



const router = createBrowserRouter([
  {
    path: '/',
    element: <Root/>,
    errorElement: <ErrorPage/>,
    children: [
        {
          path: '/',
          element: <Accueil />
        },
        {
          path: 'services',
          element: <Services />
        },
        {
          path: 'realisations',
          element: <Real />
        },
        {
          path: 'blog',
          element: <Blog />
        },
        {
          path: 'contact',
          element: <Contact />
        },
        {
          path: 'mentions',
          element: <MentionsLeg />
        }
    ]
  }
]);


function Root () {
  return <>
    <header>
      <Navbar />
    </header> 
    <main>
      <Outlet />
    </main>
    <footer>
      <Footerbar />
    </footer>
  </>
}

function App () {
  return <RouterProvider router={router} />;
}

export default App;