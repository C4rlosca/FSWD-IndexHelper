import "./SearchBar.css";
import React, { useState } from "react";

const SearchBar = (props) => {
  const [search, setSearch] = useState(["", "todos"]);
  const handleChange = (e) => {
    const name = e.target.name;
    let request = name === "search" ? [e.target.value, search[1]] : [search[0], e.target.value];
    setSearch(request);
  };
  const handleSubmit = (e) => {
    e.preventDefault();
    props.onSearch(search);
  };

  return (
    <form onSubmit={handleSubmit}>
      <input
        name="search"
        type="search"
        placeholder="Search..."
        value={search[0]}
        onChange={handleChange}
      />
      <button type="submit">GO</button>
      <select name="selector" onChange={handleChange} value={search[1]}>
        <option value="todos">Todos</option>
        <option value="sesión">Clase</option>
        <option value="tutoría">Tutoría</option>
        <option value="file">Otros</option>
      </select>
    </form>
  );
};

export default SearchBar;
