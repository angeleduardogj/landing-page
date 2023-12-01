import { NavLink, Route, Routes } from "react-router-dom";
import "./App.css";
import Header from "./components/Header";
import Nav from "./components/Nav";
import { ImHome } from "react-icons/im";

export const navData = [
  { name: "home", path: "/", icon: <ImHome /> },
  { name: "about", path: "/about", icon: <ImHome /> },
  { name: "services", path: "/services", icon: <ImHome /> },
  { name: "work", path: "/work", icon: <ImHome /> },
  {
    name: "testimonials",
    path: "/testimonials",
    icon: <ImHome />,
  },
  {
    name: "contact",
    path: "/contact",
    icon: <ImHome />,
  },
];


const App = () => {
  
  return (
    <div>
      <div className="absolute inset-0 -z-10 h-full w-full bg-white-500 bg-[radial-gradient(#e5e7eb_1px,transparent_1px)] [background-size:16px_16px]"></div>
      <div className="fixed bottom-0 w-full left-0 md:flex md:h-full md:w-auto">
        <div className="flex flex-row bg-black/10 background-blur justify-between h-full md:justify-center md:py-7 md:flex-col md:h-full">
        {navData.map((link, index) => {
            return <NavLink  className="p-2 m-2 bg-blue-500 text-white rounded-md cursor-pointer" key={`nav-${index}`} to={link.path}>{link.icon}</NavLink>;
          })}
        </div>
      </div>
      <Routes>
           {navData.map((link, index) => {
             return <Route key={`nav-${index}`} path={link.path} />;
         })}
      </Routes>
    </div>
  );
};

export default App;
