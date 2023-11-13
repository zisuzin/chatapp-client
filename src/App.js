import "./App.css";
import socket from "./server";
import { useEffect} from "react";

function App() {
    useEffect(()=>{
        askUserName();
    }, []);
    const askUserName = () => {
        const userName = prompt("당신의 이름은?");
        console.log("uuu", userName);

        socket.emit("login", userName, (res) => {
            console.log("Res", res);
        });
    };
    return (
        <div>
            <div className="App"></div>
        </div>
    );
}

export default App;
