import "./App.css";
import Home from "./components/Home";
import Header from "./components/Header";
import { useDispatch } from "react-redux";
import { getDrinksDataFromAPI } from "./store/drinkActions";
import { Route, Switch } from "react-router-dom";
// import Drinks from "./components/Drinks";
import Drink from "./components/Drink";
import React, { Suspense } from "react";
import { useEffect } from "react";
import MyFavoriteDrinks from "./components/MyFavoriteDrinks";

const Drinks = React.lazy(() => import("./components/Drinks"));

function App() {
  console.log("app render");
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(getDrinksDataFromAPI());
  }, [dispatch]);

  return (
    <div className="App">
      <Suspense fallback={<h1>Loading...</h1>}>
        <Header />

        <Switch>
          <Route path="/" component={Home} exact />

          <Route path="/drinks" component={Drinks} />
          <Route path="/drink/:id" component={Drink} />
          <Route path="/myfavorite" component={MyFavoriteDrinks} />
        </Switch>
      </Suspense>
    </div>
  );
}

export default App;
