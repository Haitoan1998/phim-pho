export interface ThemeContextProps {
    antdTheme: any
    themeMode: "light" | "dark" | '';
    toggleTheme: (mode: "light" | "dark" | '') => void;
}