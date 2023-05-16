import Card from "./Components/Card";
import { useState } from "react";
import Data from "./db/data.json";

const App = () => {
  const [search, setSearch] = useState("");
  const [searchResults, setSearchResults] = useState([]);

  const handleSearch = (e) => {
    const query = e.target.value.toLowerCase();
    setSearch(query);

    const results = Data.filter((item) => {
      return item.tags.some((tag) => tag.toLowerCase().includes(query));
    });

    setSearchResults(results);
  };

  return (
    <div className="App">
      <form>
        <input
          className="input"
          type="text"
          placeholder="Search..."
          value={search}
          onChange={handleSearch}
        />
        <select className="selector">
          <option value="todos" selected>Todos</option>
          <option value="sesión">Clase</option>
          <option value="tutoría">Tutoría</option>
          <option value="file">Otros</option>
        </select>
      </form>
      <Card props={searchResults} />
    </div>
  );
};

export default App;

// =========================================================================================

// const SearchBar = () => {
//   return (
//     <div>
      
//       {searchResults.map((item) => (
//         <div key={item.id}>
//           <h3>{item.type}</h3>
//           <p>{item.description}</p>
//           <a href={item.link}>Link</a>
//         </div>
//       ))}
//     </div>
//   );
// };
