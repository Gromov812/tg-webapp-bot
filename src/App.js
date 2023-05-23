
import './App.css';
import {useEffect} from "react";

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

    </div>
  );
}

export default App;
