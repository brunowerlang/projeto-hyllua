// src/app/blog/layout.tsx
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Blog",
  description: "Posts do blog",
};

export default function BlogLayout({ children }: { children: React.ReactNode }) {
  return (
    <body style={{ backgroundColor: "#fcfbfb", minHeight: "100vh", margin: 0 }}>
      {children}
    </body>
  );
}
