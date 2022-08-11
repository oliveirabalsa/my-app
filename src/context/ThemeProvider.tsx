import { useState } from "react";
import { ThemeContext } from "./ThemeContext";

export default function ThemeProvider({ children }: any) {
    const defaultData = {
        dark: false
    }
    const [dark, setDark] = useState(defaultData.dark);
    const toggleDark = () => {
        setDark(!dark);
    }

    return <ThemeContext.Provider value={{ dark, toggleDark }}>
        {children}
    </ThemeContext.Provider>
}