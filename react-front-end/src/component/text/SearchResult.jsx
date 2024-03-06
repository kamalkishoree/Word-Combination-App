import React from 'react';
import { useLocation } from 'react-router-dom'; // Import useLocation hook from React Router

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
	if (Array.isArray(word_combination) && word_combination.every(item => typeof item === "string")) {
		WordDataArray = word_combination.map(item => item.replace(/\\n/g, '').trim());
	}

	return (
		<div>
			<div><h2> Result of combination words for  Word : {searchStr}</h2> </div>
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

export default SearchResult;
