import "./globals.css";
import { Inter } from "next/font/google";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "Amberlie Hicken | Junior Full-Stack Developer",
  description:
    "Portfolio of Amberlie Hicken, junior full-stack developer specializing in web and mobile applications.",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={inter.className}>{children}</body>
    </html>
  );
}
