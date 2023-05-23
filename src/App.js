
import './App.css';
import {useEffect} from "react";
import Button from "./components/button/Button";
import Header from "./components/header/Header";
import {useTelegram} from "./Hooks/useTelegram";


function App() {

    const { tg } = useTelegram();


    useEffect(() => {
        tg.ready();
    },[])


  return (
    <div className="App">

        <Header />

    </div>
  );
}

export default App;
