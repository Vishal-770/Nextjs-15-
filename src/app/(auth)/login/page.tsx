import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Login Page",
  description: "This is a Login Page ",
};

const page = () => {
  return (
    <div className="flex justify-center items-center h-screen">Login Page</div>
  );
};

export default page;
