import { Route, Routes, useLocation } from "react-router-dom";
import  Home  from "../pages/home/home";
import { Landing } from "./Landing/Landing";

const routes = [
  { path: "/", Page: Landing },
  { path: "/home", Page: Home },
];

function Routing() {
  const location = useLocation();

  return (
    <Routes location={location} key={location.pathname}>
      {routes.map(({ path, Page }) => (
        <Route key={path} path={path} element={<Page />} />
      ))}
    </Routes>
  );
}

export { Routing };
