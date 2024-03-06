import React, { useEffect, useState } from "react";
import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/Button";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import axios from "axios";
import Swal from "sweetalert2";
import { useNavigate } from "react-router-dom";
export default function TextCombo() {

	const navigate = useNavigate();
	const [text, setText] = useState("");

	const [wordCombo, SetWordCombo] = useState([]);

	const [validationError, setValidationError] = useState({});



	const createProduct = async (e) => {
		e.preventDefault();

		const formData = new FormData();

		formData.append("name", text);

		await axios
			.post(`http://localhost:8000/api/words-combo`, formData)
			.then(({ data }) => {
				navigate("/seach_result", { state: { search_data: data.search_word,word_combination:data.word_combination,status:data.status} });

			})
			.catch(({ response }) => {
				if (response.status === 422) {
					setValidationError(response.data.errors);
				} else {
					Swal.fire({
						text: response.data.message,
						icon: "error",
					});
				}
			});
	};

	return (
		<div className="w-100">
			<div className="row justify-content-center">
				<div className="card">
					<div className="card-body">
						<h4 className="card-title">Enter all the letters from the puzzle or level number: </h4>
						<hr />

						<div className="form-wrapper">
							{Object.keys(validationError).length > 0 && (
								<div className="row">
									<div className="col-12">
										<div className="alert alert-danger">
											<ul className="mb-0">
												{Object.entries(validationError).map(([key, value]) => (
													<li key={key}>{value}</li>
												))}
											</ul>
										</div>
									</div>
								</div>
							)}
							<Form onSubmit={createProduct}>
								<Row>
									<Col>
										<Form.Group controlId="Name">
											<Form.Label></Form.Label>
											<Form.Control
												type="text"
												value={text}
												onChange={(event) => {
													setText(event.target.value);
												}}
											/>
										</Form.Group>
									</Col>
								</Row>
								<Button
									variant="primary"
									className="mt-2"
									size="lg"
									block="block"
									type="submit"
								>
									Search
								</Button>
							</Form>
						</div>
					</div>
				</div>
			</div>
		</div>
	);
}
