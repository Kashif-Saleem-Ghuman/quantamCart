"use client";

import React, { useState } from "react";
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
    key: "home",
    icon: <AppstoreOutlined />,
  },
  {
    label: <Link href="login">Login</Link>,
    key: "login",
    icon: <LoginOutlined />,
  },
  {
    label: <Link href="/register">Register</Link>,
    key: "register",
    icon: <UserAddOutlined />,
  },
];
const TopNav = () => {
  const [current, setCurrent] = useState("mail");
  const onClick = (e) => {
    setCurrent(e.key);
  };
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
