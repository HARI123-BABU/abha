"use client";
import { ThemeProvider } from "next-themes";

const Providers = ({ children }: { children: React.ReactNode }) => {
    return (
        <ThemeProvider enableSystem attribute="class" defaultTheme="light">
            {children}
        </ThemeProvider>
    );
};

export default Providers;
