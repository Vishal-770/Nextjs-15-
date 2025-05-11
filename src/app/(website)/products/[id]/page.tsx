import { Metadata } from "next";

type Params = { params: Promise<{ id: string }> };

export const generateMetadata = async ({
  params,
}: Params): Promise<Metadata> => {
  const id = (await params).id;
  return {
    title: `Product${id}`,
  };
};

const page = async ({ params }: Params) => {
  const params1 = await params;
  const id = params1.id;
  console.log(params1, params);
  return (
    <div className="justify-center items-center flex h-screen">
      <h1>Product {id} page</h1>
    </div>
  );
};

export default page;
