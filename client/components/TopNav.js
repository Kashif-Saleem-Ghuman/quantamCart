"use client";

import React, { useState, useEffect } from "react";
import Link from "next/link";
import {
  AppstoreOutlined,
  LoginOutlined,
  UserAddOutlined,
} from "@ant-design/icons";
import { Menu } from "antd";
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
];
const TopNav = () => {
  const [current, setCurrent] = useState("");
  const onClick = (e) => {
    setCurrent(e.key);
  };

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
