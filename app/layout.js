
import "./globals.css";
import { BrowserRouter } from "react-router-dom";

import { Nav } from "./Components/Nav/Nav";
import { Footer } from "./Components/Footer/Footer";
export const metadata = {
  title: "Cassiopeya",
  description: "8 march",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <link type="image/svg" rel="icon" href="./cxv.ico"></link>
      <link href="https://fonts.googleapis.com/css2?family=Lora:ital,wght@0,400..700;1,400..700&display=swap" rel="stylesheet"></link>
      <link href="https://fonts.googleapis.com/css2?family=Unbounded:wght@200..900&display=swap" rel="stylesheet"></link>
      <body className="body">
      <Nav  />
      
        {children}
<Footer/>
      </body>
    </html>
  );
}
