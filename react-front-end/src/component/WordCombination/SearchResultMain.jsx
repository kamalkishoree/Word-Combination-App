import React from "react";
import { useLocation } from "react-router-dom"; // Import useLocation hook from React Router
import SearchResultData from "./SearchResultView";

function SearchResult() {
  const location = useLocation();
  const { search_data, word_combination } = location.state;
  let searchStr = "";
  let WordDataArray = [];

  // Check if search_data is a string, otherwise, set it to an empty string
  if (typeof search_data === "string") {
    searchStr = search_data;
  }

  // Check if word_combination is an array of strings, otherwise, set WordDataArray to an empty array
  if (
    Array.isArray(word_combination) &&
    word_combination.every((item) => typeof item === "string")
  ) {
    WordDataArray = word_combination.map((item) =>
      item.replace(/\\n/g, "").trim()
    );
  }

  return (
    <SearchResultData
      WordDataArray={WordDataArray}
      searchStr={searchStr}
    ></SearchResultData>
  );
}

export default SearchResult;
