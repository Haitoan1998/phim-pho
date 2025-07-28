"use client";

import { menuHeader } from "@/lib/constants";
import { Button, Col, Input, Layout, Menu, Row, Typography, Image } from "antd";
import styles from "./HeaderLayout.module.scss";
import React from "react";
import { useTheme } from "@/context/ThemeProvider";
import { SearchOutlined, UserOutlined } from "@ant-design/icons";
import { usePathname } from "next/navigation";

const { Header } = Layout;
const { Title, Text } = Typography;

const HeaderLayout = () => {
  const { antdTheme, themeMode }: any = useTheme();
  const pathname = usePathname()
  if(pathname === '/') return null;
  return (
    <Header className="fixed top-0 z-20 w-full flex items-center !h-auto justify-between">
      <Row className="w-full" gutter={[16, 16]}>
        <Col span={12} className="">
          <Row className="w-full" gutter={[16, 16]}>
            <Col span={4} className="!flex items-center justify-center">
              <Image width={138} height={50} className="object-contain max-w-full" preview={false} src="/logoBranch.png" />
            </Col>
            <Col span={11}>
              <Input style={{ backgroundColor: themeMode === "dark" ? "#424242" : "#d9d9d9" }} className={`!border-0`} size="large" placeholder="Tìm kiếm phim, diễn viên" prefix={<SearchOutlined />} />
            </Col>
            <Col span={9}>
              <Menu theme={themeMode} style={{ backgroundColor: '#ff000000' }} className={`${styles.menuHeader} !border-b-0 w-full flex gap-1.5 ${themeMode === "dark" ? "[&_li:hover]:!text-[#FFD875]" : "[&_li:hover]:!text-[#1890ff]"}`} mode="horizontal" items={menuHeader} />
            </Col>
          </Row>
        </Col>
        <Col span={12} className="!flex justify-end items-center">
          <div className={`flex items-center border-r ${themeMode === "dark" ? "border-[#424242]" : "border-[#dbdbdbfa]"} pr-8 gap-1.5`}>
            <Image preview={false} src="/iconDownloadApp.png" />
            <div className="flex flex-col">
              <Text className="!text-xs">Tải ứng dụng</Text>
              <Title level={5} className="!my-0">
                RoPhim
              </Title>
            </div>
          </div>
          <Button className="ml-8" size="large" shape="round" icon={<UserOutlined />}>
            Thành viên
          </Button>
        </Col>
      </Row>
    </Header>
  );
};

export default HeaderLayout;
