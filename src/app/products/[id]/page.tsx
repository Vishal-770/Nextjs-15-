const page = async ({ params }: { params: Promise<{ id: string }> }) => {
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
