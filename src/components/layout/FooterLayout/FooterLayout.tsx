import { Layout } from "antd";
import React from "react";

const { Footer } = Layout;
const footerStyle: React.CSSProperties = {
  textAlign: "center",
  color: "#fff",
};

const FooterLayout = () => {
  return <Footer style={footerStyle}>Footer</Footer>
};

export default FooterLayout;
