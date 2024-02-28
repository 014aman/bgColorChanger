import { useState } from "react";
import "./App.css";
import Colors from "./components/Colors";
// const applyColor(color) => {

// }
function App() {
  const [color, setColor] = useState("black");

  return (
    <div className=" w-full h-screen " style={{ backgroundColor: color }}>
      <div className="border h-15 rounded-lg items-center shadow-md px-10 bg-white flex flex-row justify-center space-x-10">
        <Colors colorName="Green" color="bg-green-600" setColor={setColor} />

        <Colors colorName="Red" color="bg-red-600" setColor={setColor} />

        <Colors colorName="Blue" color="bg-blue-600" setColor={setColor} />

        <Colors colorName="Yellow" color="bg-yellow-600" setColor={setColor} />

        <Colors colorName="Brown" color="bg-yellow-900" setColor={setColor} />

        <Colors colorName="Pink" color="bg-pink-600" setColor={setColor} />
      </div>
    </div>
  );
}

export default App;
