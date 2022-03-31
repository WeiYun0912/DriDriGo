import "./App.css";
import Header from "./components/Header";
import { useDispatch } from "react-redux";
import { getDrinksDataFromAPI } from "./store/drinkActions";
import { useLocation } from "react-router-dom";
// import Drinks from "./components/Drinks";

import React, { Suspense } from "react";
import { useEffect } from "react";
import AnimatedRoutes from "./components/AnimatedRoutes";

function App() {
  const location = useLocation();
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(getDrinksDataFromAPI());
  }, [dispatch]);

  return (
    <div className="App">
      <Suspense fallback={<h1>Loading...</h1>}>
        <Header />
        <AnimatedRoutes />
      </Suspense>
    </div>
  );
}

export default App;
