import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import Footer from "../components/Footer";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

// TypeScriptの型定義（: Metadata）を削除しました
export const metadata = {
  title: "よりみちくん",
  description: "最適な寄り道ルートを提案します",
};

// 引数の型定義（{ children }: Readonly<{...}>）を削除し、シンプルにしました
export default function RootLayout({ children }) {
  return (
    <html
      lang="ja"
      className={`${geistSans.variable} ${geistMono.variable} h-full antialiased`}
    >
      <body className="min-h-full flex flex-col">{children}</body>
      <Footer />
    </html>
  );
}