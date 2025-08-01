import Link from "next/link";

export const menuHeader = [
  {
    key: "Chủ Đề",
    label: (
      <Link href="/chu-de" className="menu-link">
        Chủ Đề
      </Link>
    ),
  },
  {
    key: "Lọc Phim",
    label: (
      <Link href="/loc-phim" className="menu-link">
        Lọc Phim
      </Link>
    ),
  },
  {
    key: " Phim Lẻ",
    label: (
      <Link href="/phim-le" className="menu-link">
        Phim Lẻ
      </Link>
    ),
  },
  {
    key: "Phim Bộ",
    label: (
      <Link href="/phim-bo" className="menu-link">
        Phim Bộ
      </Link>
    ),
  },
];
export const gradients = [
  "bg-gradient-to-br from-[#b388a6] to-[#6a7fa5]", // Hồng tím trầm đến xanh xám
  "bg-gradient-to-br from-[#c5a46d] to-[#6e8c8d]", // Vàng nâu nhạt đến xanh xám nhạt
  "bg-gradient-to-br from-[#b29583] to-[#8a6f64]", // Cam nâu nhạt đến nâu đất
  "bg-gradient-to-br from-[#6d86ad] to-[#9bb6c8]", // Xanh biển trầm đến xanh nhạt
  "bg-gradient-to-br from-[#ba9d5f] to-[#8b6d53]", // Vàng đất đến nâu nhạt
  "bg-gradient-to-br from-[#a18fbf] to-[#6a90b3]", // Tím pastel đậm đến xanh tro
  "bg-gradient-to-br from-[#b88d72] to-[#785a96]", // Cam đất đến tím trầm
  "bg-gradient-to-br from-[#a96f5b] to-[#c0a167]", // Cam nâu đến vàng đất trầm
  "bg-gradient-to-br from-[#a86472] to-[#826e68]", // Hồng đất đến xám nâu
  "bg-gradient-to-br from-[#7bb1a2] to-[#5066a9]", // Xanh ngọc đậm đến xanh cobalt trầm
];
export const solidColors = [
  "bg-[#007aff]", // Xanh iOS
  "bg-[#ff9500]", // Cam sáng vừa
  "bg-[#ff2d55]", // Hồng đỏ iOS
  "bg-[#4cd964]", // Xanh lá non
  "bg-[#5856d6]", // Tím iOS
  "bg-[#5ac8fa]", // Xanh da trời
  "bg-[#ffcc00]", // Vàng tươi
  "bg-[#ff3b30]", // Đỏ tươi
  "bg-[#34c759]", // Xanh lục sáng
  "bg-[#af52de]", // Tím hồng đậm
];

