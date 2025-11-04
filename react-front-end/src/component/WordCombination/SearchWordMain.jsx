import React, { useState } from "react";
import axios from "axios";
import Swal from "sweetalert2";
import { useLocation, useNavigate } from "react-router-dom";
import SearchWordForm from "./SearchWordForm";

export default function SearchWord() {
  const navigate = useNavigate();
  const location = useLocation();
  const token = location.state ? location.state.token : null;
  console.log(location);

  const [text, setText] = useState("");
  const [validationError, setValidationError] = useState({});

  const createProduct = async (e) => {
    e.preventDefault();
    const formData = new FormData();
    formData.append("name", text);
    const config = {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    };
    await axios
      .post(import.meta.env.VITE_BACKEND_URL+"/api/words-combo", formData, config)
      .then(({ data }) => {
        navigate("/seach_result", {
          state: {
            search_data: data.search_word,
            word_combination: data.word_combination,
            status: data.status,
          },
        });
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
    <SearchWordForm
      text={text}
      setText={setText}
      validationError={validationError}
      handleSubmit={createProduct}
    />
  );
}
