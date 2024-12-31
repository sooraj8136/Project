import React from "react";
import { RouterProvider } from 'react-router-dom'
import { router } from './routes/router.jsx';
import './styles/GlobalStyles.css'


const App = () => {
  return (
    <>
      <RouterProvider router={router} />
    </>
  );
};

export default App;
