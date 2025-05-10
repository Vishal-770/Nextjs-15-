"use client";
import Sidebar from "../_layoutcomponents/SideBar";

export default function ProductDetailsLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <>
      <div className="flex">
        <Sidebar />
        {children}
      </div>
    </>
  );
}
