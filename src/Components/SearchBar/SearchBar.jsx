import React, { useState, useEffect } from "react";
import { searchAutoComplete } from "../../Utils/apiServices";
import "./searchBar.css";
import { debounce } from "../../Utils/helperFunctions";

function SearchBar() {
  const [searchTerm, setSearchTerm] = useState("");
  const [filteredOptions, setFilteredOptions] = useState([]);

  //triggered on the search-box value change
  const onInputChange = (e) => {
    setSearchTerm(e?.target?.value);
    //Debounce delay of 500ms
    debounce(onSearch(e), 600);
  };
  //asyn function to call the api for search suggestion
  const onSearch = async (e) => {
    if (e?.target?.value === "") setFilteredOptions([]);
    await searchAutoComplete(e?.target?.value).then((res) =>
      setFilteredOptions(res?.data)
    );
  };

  return (
    <div className="search-container">
      <input
        type={"text"}
        value={searchTerm}
        onChange={onInputChange}
        placeholder={"Search For the recipe"}
        className={"search-input"}
      />

      {filteredOptions && (
        <ul className={"suggestions-list"}>
          {filteredOptions?.map((option) => (
            <li key={option?.id}>{option?.title}</li>
          ))}
        </ul>
      )}
    </div>
  );
}

export default SearchBar;
