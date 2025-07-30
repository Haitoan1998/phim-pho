"use client";

import React, { Suspense } from "react";
import { useTheme } from "@/context/ThemeProvider";
import HeaderLayout from "../HeaderLayout/HeaderLayout";
import FooterLayout from "../FooterLayout/FooterLayout";
import { Layout } from "antd";
import { AntdRegistry } from "@ant-design/nextjs-registry";
import LoadingUi from "@/components/ui/LoadingUi";
import { usePathname } from "next/navigation";

const { Content } = Layout;
const contentStyle: React.CSSProperties = {
  textAlign: "center",
};
const LayoutUi = ({ children, className }: { children: React.ReactNode; className?: string }) => {
  const { antdTheme, themeMode }: any = useTheme();
  const pathname = usePathname();
  return (
    <AntdRegistry>
      <HeaderLayout />
      <div
        style={{
          backgroundColor: pathname === "/" ? "transparent" : antdTheme.token.colorBgBase,
          color: antdTheme.token.colorTextBase,
        }}
        className={`${className}`}
      >
        <Suspense>
          <Content style={contentStyle}>{children}</Content>
        </Suspense>
      </div>
      <FooterLayout />
    </AntdRegistry>
  );
};

export default LayoutUi;
