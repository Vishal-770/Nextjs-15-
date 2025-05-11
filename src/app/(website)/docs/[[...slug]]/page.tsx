import React from "react";

const page = async ({ params }: { params: Promise<{ slug: string[] }> }) => {
  const { slug } = await params;
  console.log(slug);
  return (
    <div className="justify-center items-center flex h-screen w-screen">
      Docs Page {slug?.length}
    </div>
  );
};

export default page;
