"use client";

import React, { useState, useEffect, useContext } from "react";
import Link from "next/link";
import {
  AppstoreOutlined,
  LoginOutlined,
  LogoutOutlined,
  UserAddOutlined,
} from "@ant-design/icons";
import { Menu } from "antd";
import { Context } from "../context";
import axios from "axios";
import { toast } from "react-toastify";
import { useRouter } from "next/navigation";

const TopNav = () => {
  const [current, setCurrent] = useState("");
  const { state, dispatch } = useContext(Context);
  const onClick = (e) => {
    setCurrent(e.key);
  };
  const router = useRouter();

  const logout = async () => {
    dispatch({ type: "LOGOUT" });
    window.localStorage.removeItem("user");
    const { data } = await axios.get("/api/logout");
    notify(data.message, "success");
    router.push("/login");
  };
  const notify = (message, type) => {
    toast(message, {
      type: type,
      closeOnClick: true,
      pauseOnHover: true,
      draggable: true,
      autoClose: 1500,
    });
  };

  const items = [
    {
      label: <Link href="/">Home</Link>,
      key: "/",
      icon: <AppstoreOutlined />,
    },
    {
      label: <Link href="/login">Login</Link>,
      key: "/login",
      icon: <LoginOutlined />,
    },
    {
      label: <Link href="/register">Register</Link>,
      key: "/register",
      icon: <UserAddOutlined />,
    },
    {
      label: (
        <div onClick={logout} className="float-end">
          <LogoutOutlined /> Logout
        </div>
      ),
      key: "/logout",
    },
  ];

  //define window object to avoid undefined error in useEffect

  useEffect(() => {
    setCurrent(window.location.pathname);
  }, [
    /* this is to set the active link class on page refresh */
    window.location.pathname,
  ]);

  return (
    <Menu
      onClick={onClick}
      selectedKeys={[current]}
      mode="horizontal"
      items={items}
    />
  );
};
export default TopNav;
