import * as React from "react";
import Navbar from "react-bootstrap/Navbar";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import "bootstrap/dist/css/bootstrap.css";

import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";

import Login from "./component/Login/Login";
import Register from "./component/Register/Register";
import Profile from "./component/Profile/Profile";
import SearchWord from "./component/WordCombination/SearchWordMain";
import SearchResult from "./component/WordCombination/SearchResultMain";
function App() {
  return (
    <Router>
      <Navbar bg="primary">
        <Container>
          <Link to={"/"} className="navbar-brand text-white">
            Jumble Text
          </Link>
        </Container>
      </Navbar>

      <Container className="mt-5">
        <Row>
          <Col md={12}>
            <Routes>
              <Route path="/" element={<Login />} />
              <Route path="/dashboard" element={<Profile />} />
              <Route path="/login" element={<Login />} />
              <Route path="/signup" element={<Register />} />
              <Route path="/text" element={<SearchWord />} />
              <Route path="/seach_result" element={<SearchResult />} />
            </Routes>
          </Col>
        </Row>
      </Container>
    </Router>
  );
}

export default App;
