import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Authentication Dashboard",
  description: "Dashboard SMK Bina Informatika",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="id">
      <body>{children}</body>
    </html>
  );
}
