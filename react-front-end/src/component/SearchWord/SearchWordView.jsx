import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/Button";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import { useState } from "react";

const SearchWordView = ({ validationError, createCombo }) => {
  const [text, setText] = useState("");
  return (
    <div className="w-100">
      <div className="row justify-content-center">
        <div className="card">
          <div className="card-body">
            <h4 className="card-title">Enter all the letters :</h4>
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
              <Form onSubmit={createCombo}>
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
};

export default SearchWordView;
