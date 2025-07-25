"use client";
import { useTheme } from "@/context/ThemeProvider";
import { MoonOutlined, SunOutlined } from "@ant-design/icons";
import { Space, Switch } from "antd";
import React from "react";

const SwitchUI = () => {
  const themeContext = useTheme();
  const toggleTheme = themeContext?.toggleTheme;
  return (
    <Space direction="vertical" className="fixed bottom-0 right-0 p-4 z-30">
      <Switch onChange={(checked) => toggleTheme && toggleTheme(checked ? 'dark' : 'light')} checkedChildren={<MoonOutlined />} unCheckedChildren={<SunOutlined />} defaultChecked />
    </Space>
  );
};

export default SwitchUI;
