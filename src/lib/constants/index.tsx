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
