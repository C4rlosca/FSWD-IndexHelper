import "./App.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPersonThroughWindow } from "@fortawesome/free-solid-svg-icons";
import Data from "./db/data.json";
import SearchBar from "./Components/SearchBar";
import CardWrapper from "./Components/Wrapper";
import Card from "./Components/Card";
import Footer from "./Components/Footer";
import { useState } from "react";

const App = () => {
  const [items, setItems] = useState(Data);
  const handleTagSearch = (tag) => {
    handleSearch(tag);
    const windowWidth = window.innerWidth;
    let topValue;

    if (windowWidth >= 995) {
      topValue = 81;
    } else {
      topValue = 70;
    }

    window.scrollTo({ top: topValue, behavior: "smooth" });
  };
  const handleSearch = (search) => {
    let filteredItems = [];
    if (search[1] === "todos" && search[0].length > 0) {
      filteredItems = Data.filter((item) => {
        return item.tags.includes(search[0].toLowerCase()); //
      });
    } else if (search[1] === "todos" && search[0].length === 0) {
      filteredItems = Data;
    } else {
      if (search[0].length === 0) {
        filteredItems = Data.filter((item) => item.type.includes(search[1]));
      } else {
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
  const handleTitle = () => {
    window.location.reload();
  };

  return (
    <>
      <header>
        <FontAwesomeIcon
          icon={faPersonThroughWindow}
          className="Jump"
          onClick={handleTitle}
        />
        <h1 onClick={handleTitle} className="Header-title">
          FSWD12 - IndexHelper
        </h1>
        <SearchBar onSearch={handleSearch} />
      </header>
      <main>
        <CardWrapper>
          {items.length > 0 ? (
            items.map((item) => {
              return (
                <Card
                  onSearch={handleTagSearch}
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
        </CardWrapper>
      </main>
      <Footer/>
    </>
  );
};

export default App;
