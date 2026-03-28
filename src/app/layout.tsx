import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Sabbir Ahmmed | Software Engineer Portfolio",
  description:
    "Md. Sabbir Ahmmed — Software Engineer specializing in React.js, Next.js, Node.js, Golang, and Cloud Computing. Explore my projects, blog posts, and get in touch.",
  keywords: [
    "Sabbir Ahmmed",
    "Software Engineer",
    "Full Stack Developer",
    "React",
    "Next.js",
    "Node.js",
    "Golang",
    "Portfolio",
  ],
  authors: [{ name: "Md. Sabbir Ahmmed" }],
  openGraph: {
    title: "Sabbir Ahmmed | Software Engineer Portfolio",
    description:
      "Full-stack software engineer building scalable web applications with modern technologies.",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body>
        {children}
      </body>
    </html>
  );
}
