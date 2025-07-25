"use client";

import React, { Suspense } from "react";
import { useTheme } from "@/context/ThemeProvider";
import HeaderLayout from "../HeaderLayout/HeaderLayout";
import FooterLayout from "../FooterLayout/FooterLayout";
import { Layout } from "antd";
import { AntdRegistry } from "@ant-design/nextjs-registry";
import LoadingUi from "@/components/ui/LoadingUi";
const layoutStyle = {
  overflow: "hidden",
};
const { Content } = Layout;
const contentStyle: React.CSSProperties = {
  textAlign: "center",
  minHeight: 120,
};
const LayoutUi = ({ children, className }: { children: React.ReactNode; className?: string }) => {
  const { antdTheme, themeMode }: any = useTheme();

  return (
    <Layout style={layoutStyle}>
      <AntdRegistry>
        <HeaderLayout />
        <div
          style={{
            backgroundColor: antdTheme.token.colorBgBase,
            color: antdTheme.token.colorTextBase,
          }}
          className={`${className}`}
        >
          <Suspense>
            <Content style={contentStyle}>{!themeMode ? children : children}</Content>
          </Suspense>
        </div>
        <FooterLayout />
      </AntdRegistry>
    </Layout>
  );
};

export default LayoutUi;
