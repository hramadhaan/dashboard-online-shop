import type { Metadata } from "next";
import HeaderComponent from "@/components/header";
import SideBarComponent from "@/components/sidebar";

export const metadata: Metadata = {
  title: "Dashboard | Homepage",
  description: "Dashboard SMK Bina Informatika",
};

export default function DashboardLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="id">
      <body>
        <SideBarComponent>
          <HeaderComponent />
          {children}
        </SideBarComponent>
      </body>
    </html>
  );
}
