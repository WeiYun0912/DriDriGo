import React from "react";
import { Route, Routes, useLocation } from "react-router-dom";
import Home from "./Home";
import MyFavoriteDrinks from "./MyFavoriteDrinks";
import Drink from "./Drink";
import { AnimatePresence } from "framer-motion/dist/framer-motion";
const Drinks = React.lazy(() => import("./Drinks"));

const AnimatedRoutes = () => {
  const location = useLocation();
  return (
    <AnimatePresence>
      <Routes location={location} key={location.pathname}>
        <Route path="/" element={<Home />} />
        <Route path="/drinks" element={<Drinks />} />
        <Route path="/drink/:id" element={<Drink />} />
        <Route path="/myfavorite" element={<MyFavoriteDrinks />} />
      </Routes>
    </AnimatePresence>
  );
};

export default AnimatedRoutes;
