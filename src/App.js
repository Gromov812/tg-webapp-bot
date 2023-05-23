
import './App.css';
import {useEffect} from "react";
import Header from "./components/header/Header";
import {useTelegram} from "./Hooks/useTelegram";
import {Link, Router, Route, BrowserRouter, Routes} from "react-router-dom";
import Button from "./components/button/Button";
import Currencies from "./components/Currencies/Currencies";

function App() {

    const { tg } = useTelegram();


    useEffect(() => {
        tg.ready();
    },[])


  return (
    <div className="App">

    <Routes>
        <Route path={'/currencies'} element={<Currencies />}></Route>
    </Routes>

        <Link to={'/currencies'}>
            <button>Currencies</button>
        </Link>


        <Header />

    </div>
  );
}

export default App;
