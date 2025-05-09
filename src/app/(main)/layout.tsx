// app/(main)/layout.tsx
"use client";

import Footer from "../components/layout/Footer";
import Header from "../components/layout/Header";

export default function MainLayout({ children }: { children: React.ReactNode }) {
  return (
    <>
      <Header />
      <main>{children}</main>
      <Footer />
    </>
  );
}
