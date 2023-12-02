"use client";

import React, { useState } from "react";
import axios from "axios";

const page = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setpassword] = useState("");
  /**
   * @description handleSubmit
   * @param {*} event
   */
  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const response = await axios.post("http://localhost:8000/api/register", {
        name,
        email,
        password,
      });

      console.log(response.data);
    } catch (error) {
      console.error(
        "Error:",
        console.error(
          "Error:",
          error.response ? error.response.data : error.message
        )
      );
    }
  };
  return (
    <>
      <h1 className="text-center my-3">Register</h1>
      <div className="container col-md-8 offser-md-2 pb-5">
        <form onSubmit={handleSubmit}>
          <input
            type="text"
            className="form-control mb-4 p-2"
            value={name}
            onChange={(input) => setName(input.target.value)}
            placeholder="Enter name"
            required
          />

          <input
            type="email"
            className="form-control mb-4 p-2"
            value={email}
            onChange={(input) => setEmail(input.target.value)}
            placeholder="Enter email"
            required
          />

          <input
            type="password"
            className="form-control mb-4 p-2"
            value={password}
            onChange={(input) => setpassword(input.target.value)}
            placeholder="Enter password"
            required
          />

          <button type="submit" className="btn btn-primary btn-block">
            Submit
          </button>
        </form>
      </div>
    </>
  );
};

export default page;
