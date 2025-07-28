import { Layout } from "antd";
import Link from "next/link";
import { usePathname } from "next/navigation";
import React from "react";

const { Footer } = Layout;
const footerStyle: React.CSSProperties = {
  textAlign: "center",
  color: "#fff",
  padding: 0,
  background:'#0a0a0a'
};

const FooterLayout = () => {
  const pathname = usePathname();
  // if (pathname === "/") return null;
  return (
    <Footer style={footerStyle}>
      <div className="mx-auto py-8 flex justify-center flex-wrap gap-y-4 gap-x-10 px-5">
        <Link title="Hỏi-Đáp" href="/hoi-dap" className="!text-[#aaaaaa] hover:!text-[#FFD875]">
          Hỏi-Đáp
        </Link>
        <Link title="Chính sách bảo mật" href="/chinh-sach-bao-mat" className="!text-[#aaaaaa] hover:!text-[#FFD875]">
          Chính sách bảo mật
        </Link>
        <Link title="Điều khoản sử dụng" href="/dieu-khoan-su-dung" className="!text-[#aaaaaa] hover:!text-[#FFD875]">
          Điều khoản sử dụng
        </Link>
        <Link title="Giới thiệu" href="/gioi-thieu" className="!text-[#aaaaaa] hover:!text-[#FFD875]">
          Giới thiệu
        </Link>
        <Link title="Liên hệ" href="/lien-he" className="!text-[#aaaaaa] hover:!text-[#FFD875]">
          Liên hệ
        </Link>
      </div>
      <div className="text-center pb-16 text-[#aaaaaa]">© 2024 <a href="/" className="!text-white hover:!text-[#FFD875]">Rophim</a></div>
    </Footer>
  );
};

export default FooterLayout;
