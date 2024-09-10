import './App.css';
import { RouterProvider } from "react-router-dom";
import router from "./Routes.js";
import Header from './components/Header.js';
import Footer from './components/Footer.js';


function App() {
  return (
    <>
    <Header />
      <RouterProvider router={router} />
      <Footer />
    </>
  );
};

export default App;
