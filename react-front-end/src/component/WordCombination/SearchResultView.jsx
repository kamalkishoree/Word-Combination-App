import React from "react";
import { useLocation } from "react-router-dom"; // Import useLocation hook from React Router

function SearchResultData({ searchStr, WordDataArray }) {
  return (
    <div>
      <div>
        <h2> Result of combination words for Word : {searchStr}</h2>{" "}
      </div>
      <table className="table table-bordered mb-0 text-center w-25">
        <thead>
          <tr>
            <th>Combination</th>
          </tr>
        </thead>
        <tbody>
          {WordDataArray.length > 0 &&
            WordDataArray.map((row, key) => (
              <tr key={key}>
                <td>{row}</td>
              </tr>
            ))}
        </tbody>
      </table>
    </div>
  );
}

export default SearchResultData;
