import Head from "next/head";
import Footer from "@/components/Footer";

// app/test/layout.js
export default function TestLayout({ children }) {
  return (
    <div className="bg-yellow-50 p-8 min-h-screen">
      <header className="mb-4">
        <h2 className="text-xl font-bold text-orange-600">テストモード：設定中</h2>
      </header>
      
      {/* メインコンテンツ（page.jsの内容）が表示される場所 */}
      <main className="bg-white rounded-lg shadow p-4">
        {children}
      </main>
      
      <Footer />
    </div>
  );
}