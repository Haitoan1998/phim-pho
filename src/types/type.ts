export interface ThemeContextProps {
    antdTheme: any
    themeMode: "light" | "dark" | '';
    toggleTheme: (mode: "light" | "dark" | '') => void;
}
export enum LayoutCard {
  TOPIC = 6,
  CARD_VERTICAL = 1,
  CARD_VERTICAL_CUT = 4,
  CARD_HORIZONTAL_WITH_POSTER = 3,
  CARD_HORIZONTAL_COMING = 5,
  CARD_BANNER = 2,
}
export const LayoutSwiperOptions = {
  [LayoutCard.CARD_VERTICAL]: { slidesPerView: 8, spaceBetween: 16 },
  [LayoutCard.CARD_VERTICAL_CUT]: { slidesPerView: 6, spaceBetween: 16 },
  [LayoutCard.CARD_HORIZONTAL_WITH_POSTER]: { slidesPerView: 4, spaceBetween: 16 },
  [LayoutCard.CARD_HORIZONTAL_COMING]: { slidesPerView: 5, spaceBetween: 16 },
}
export enum TypeFilm {
  SIGNLE_MOVIE = 1,
  SERIES_MOVIE = 2
}