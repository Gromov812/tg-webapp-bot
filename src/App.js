
import './App.css';
import './components/button/button.css'
import { useEffect, useState} from "react";
import Header from "./components/header/Header";
import {useTelegram} from "./Hooks/useTelegram";
import { Route, Routes} from "react-router-dom";
import 'bootstrap/dist/css/bootstrap.min.css';import Currencies from "./components/Currencies/Currencies";
import Offers from "./components/offers/Offers";


function App() {


 
    const { tg } = useTelegram();
    const [inputChose, setInputChose] = useState({});

    useEffect(() => {
        console.log(inputChose)
        tg.ready();
    },[])

  return (
    <div className="App">
        <Header setInputChose={setInputChose}  />
    <Routes>
        <Route path={'/offers'}  element={
            <Offers />
        }>

        </Route>
    </Routes>






    </div>
  );
}

export default App;
