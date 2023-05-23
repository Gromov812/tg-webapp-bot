
import './App.css';
import {useEffect} from "react";
import Button from "./components/button/button";

console.log(window.Telegram);

const tg = window.Telegram.WebApp;
function App() {

    useEffect(() => {
        tg.ready();
    },[])


    const onClose = () => {
        tg.close();
    }


  return (
    <div className="App">

        <button onClick={onClose}>Close</button>
        <Button />
    </div>
  );
}

export default App;
