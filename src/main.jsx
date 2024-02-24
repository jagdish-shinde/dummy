import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import { createBrowserRouter, RouterProvider} from "react-router-dom";
import 'bootstrap/dist/css/bootstrap.min.css';
import './index.css'
import PlanetCard from './components/planet-cards/PlanetCard.jsx';
import ResidentData from './components/ResidentData.jsx';
const router = createBrowserRouter([
  {
    path:"/",element:<App/>,
    children: [
      {
        path: "/",
        element:<PlanetCard/>,
      },
      {
        path: "/resident-info",
        element:<ResidentData/>,
      },
      // {
      //   path: "/Create-Quiz",
      //   element: <CreateQuizPage/>,
      // },{
      //   path:"/my-quizes",
      //   element:<MyQuizes/>
      // }
    ],
  }]);
ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
   <RouterProvider router={router} />
  </React.StrictMode>,
)
