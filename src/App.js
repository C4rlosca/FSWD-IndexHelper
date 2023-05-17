import { useState } from "react";
import Ensayo from "./Ensayo";

const App = () => {
  const [selectedValue, setSelectedValue] = useState("Todos");

  const handleSelectChange = (event) => {
    setSelectedValue(event.target.value);
  };

  return (
    <div className="App">
      <form>
        <select className="selector" value={selectedValue} onChange={handleSelectChange}>
          <option value="todos">Todos</option>
          <option value="sesión">Clase</option>
          <option value="tutoría">Tutoría</option>
          <option value="file">Otros</option>
        </select>
        <Ensayo selectedValue={selectedValue} />
      </form>
    </div>
  );
};

export default App;
