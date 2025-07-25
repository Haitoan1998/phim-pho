"use client";
import SwitchUI from "@/components/ui/SwitchUI";
import { ThemeContextProps } from "@/types/type";
import { ConfigProvider, theme, ThemeConfig } from "antd";
import React, { createContext, useContext, useEffect, useState } from "react";
import frFR from 'antd/locale/ru_RU'
const ThemeContext = createContext<ThemeContextProps | undefined>(undefined);

export const ThemeProvider = ({ children }: { children: React.ReactNode }) => {
  const [themeMode, setThemeMode] = useState<"light" | "dark" | "">("");

  useEffect(() => {
    const storedTheme = localStorage.getItem("themeMode") as "light" | "dark";
    if (storedTheme) {
      setThemeMode(storedTheme);
    }
  }, []);
  console.log(themeMode);
  const toggleTheme = (mode: "dark" | "light" | "") => {
    setThemeMode(mode);
    localStorage.setItem("themeMode", mode);
  };

  const antdTheme: ThemeConfig = {
    algorithm: themeMode === "dark" ? theme.darkAlgorithm : theme.defaultAlgorithm,
    token: {
      colorPrimary: themeMode === "dark" ? "#ffffff" : "#1890ff",
      colorTextBase: themeMode === "dark" ? "#ffffff" : "#000000",
      colorBgBase: themeMode === "dark" ? "#000000" : "#ffffff",
      colorTextHeading: themeMode === "dark" ? "#ffffff" : "#000000",
    },
    components: {
      Input: {
        hoverBorderColor: "none",
        activeBorderColor: themeMode === "dark" ? "#ffffff" : "#000000",
        activeShadow: "none",
      },
      Button: {
        defaultShadow: "none",
        defaultHoverBg: "#ffffff",
        defaultHoverBorderColor: "none",
        defaultHoverColor: "#000000",
        defaultBg: "#e9eaeb",
        defaultColor: "#000000",
      },
      Layout: {
        headerBg: "#ff000000",
        headerPadding: "5px 20px",
        bodyBg: themeMode === "dark" ? "#141414" : "#d5d5d5",
        footerBg: "#000000",
      },
      Menu : {
        darkItemSelectedBg : '##1890ff00',
        darkItemSelectedColor :  themeMode === "dark" ? "#FFD875" : "#1890ff",
      }
    },
  };
  const contextValue = React.useMemo(
    () => ({ antdTheme, themeMode, toggleTheme }),
    [antdTheme, themeMode, toggleTheme]
  );

  return (
    <ThemeContext.Provider value={contextValue}>
      <ConfigProvider locale={frFR} theme={antdTheme}>
        {children}
        <SwitchUI />
      </ConfigProvider>
    </ThemeContext.Provider>
  );
};

export const useTheme = () => useContext(ThemeContext);
