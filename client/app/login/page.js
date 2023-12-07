"use client";

import React, { useState } from "react";
import axios from "axios";
import { toast } from "react-toastify";
import { SyncOutlined } from "@ant-design/icons";
import Link from "next/link";

const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setpassword] = useState("");
  const [loading, setLoading] = useState(false);
  /**
   * @description show toast notification
   * @param {*} message
   * @param {*} type
   * @returns toast
   */
  const notify = (message, type) => {
    toast(message, {
      type: type,
      closeOnClick: true,
      pauseOnHover: true,
      draggable: true,
      autoClose: 1500,
    });
  };

  /**
   * @description handleSubmit
   * @param {*} event
   */
  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      setLoading(true);
      const response = await axios.post(`/api/login`, {
        email,
        password,
      });

      console.log(response.data);
      notify("Login Successull");
      setLoading(false);
    } catch (error) {
      setLoading(false);
      console.error(
        "Error:",
        console.error(
          "Error:",
          error.response ? error.response.data : error.message
        )
      );
      notify(error.response.data, "error");
    }
  };

  return (
    <>
      <h1 className="text-center my-3">Login</h1>
      <div className="container col-md-8 offser-md-2 pb-5">
        <form onSubmit={handleSubmit}>
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
          <div className="d-grid">
            <button
              type="submit"
              className="btn btn-primary"
              disabled={!email || !password || loading}
            >
              {loading ? <SyncOutlined spin /> : "Submit"}
            </button>
          </div>
        </form>
        <p className="text-center p-3">
          Not yet registered?
          <Link className="ps-2" href="/register">
            Register
          </Link>
        </p>
      </div>
    </>
  );
};

export default Login;
