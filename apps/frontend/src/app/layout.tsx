import React from "react";
import "./styles.css";

export default function RootLayout({ children }: { children: React.ReactNode; }): React.JSX.Element {
    return (
        <html lang="en">
        <body>{children}</body>
        </html>
    );
}
