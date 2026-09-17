"use client";

import { usePathname } from "next/navigation";
import Navigation from "@/Components/Navigation";

export default function LayoutWrapper({ children }) {
  const pathname = usePathname();
  const showNavigation = pathname !== "/about";

  return (
    <>
      {showNavigation && <Navigation />}
      {children}
    </>
  );
}
