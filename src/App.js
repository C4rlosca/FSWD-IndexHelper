import "./App.css";
import Data from "./db/data.json";
import SearchBar from "./Components/SearchBar";
import Wrapper from "./Components/Wrapper";
import Card from "./Components/Card";
import { useState } from "react";

const App = () => {
  const [items, setItems] = useState(Data);
  const handleSearch = (search) => {
    console.log("handlesearch", search);

    let filteredItems = [];
    if (search[1] === "todos" && search[0].length > 0) {
      console.log("Filtrar por tags y selector -todos-");
      filteredItems = Data.filter((item) => {
        return item.tags.toLowerCase().includes(search[0].toLowerCase());
      });
    } else if (search[1] === "todos" && search[0].length === 0) {
      console.log("Mostrar todos los elementos cuando la selección es -todos- sin búsqueda");
      filteredItems = Data;
    } else {
      if (search[0].length === 0) {
        console.log("Filtrar por tipo cuando no hay palabra para la busqueda");
        filteredItems = Data.filter((item) => item.type.includes(search[1]));
      } else {
        console.log("Filtrar por palabra clave y tipo");
        filteredItems = Data.filter((item) => {
          return (
            item.tags.includes(search[0].toLowerCase()) &&
            item.type.includes(search[1])
          );
        });
      }
    }
    console.log(filteredItems);
    setItems(filteredItems);
  };

  return (
    <>
      <header>
        <SearchBar onSearch={handleSearch} />
      </header>
      <main>
        <Wrapper>
          {items.length > 0 ? (
            items.map((item) => {
              return (
                <Card
                  key={item.id}
                  file={item.file}
                  type={item.type}
                  session={item.session}
                  tags={item.tags}
                  year={item.year}
                  month={item.month}
                  day={item.day}
                  duration={item.duration}
                  description={item.description}
                  link={item.link}
                  teacher={item.teacher}
                  title={item.title}
                  seconds={item.seconds}
                />
              );
            })
          ) : (
            <h4 className="alert">No results found</h4>
          )}
        </Wrapper>
      </main>
      <footer>Made with love by -Javi & Carlos-</footer>
    </>
  );
};

export default App;
