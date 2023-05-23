
import './App.css';
import './components/button/button.css'
import {Suspense, useEffect} from "react";
import Header from "./components/header/Header";
import {useTelegram} from "./Hooks/useTelegram";
import {Link, Router, Route, BrowserRouter, Routes} from "react-router-dom";
import 'bootstrap/dist/css/bootstrap.min.css';import Currencies from "./components/Currencies/Currencies";
import Offers from "./components/offers/Offers";

function App() {

    const { tg } = useTelegram();


    useEffect(() => {
        tg.ready();
    },[])


  return (
    <div className="App">

    <Routes>

        <Route path={'/currencies'}  element={
            <Currencies />
        }></Route>
        <Route path={'/offers'}  element={
            <Offers />
        }></Route>
    </Routes>




        <Header />

    </div>
  );
}

export default App;
