
import './App.css';
import './components/button/button.css'
import {Suspense, useEffect} from "react";
import Header from "./components/header/Header";
import {useTelegram} from "./Hooks/useTelegram";
import {Link, Router, Route, BrowserRouter, Routes} from "react-router-dom";
import Button from "./components/button/Button";
import Currencies from "./components/Currencies/Currencies";
import LazyLoad from "./components/LazyLoad/LazyLoad";

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
    </Routes>




        <Header />

    </div>
  );
}

export default App;
