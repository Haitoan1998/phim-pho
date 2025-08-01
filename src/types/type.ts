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