const page = async ({
  params,
}: {
  params: Promise<{ reviewid: string; id: string }>;
}) => {
  const { id, reviewid } = await params;

  return (
    <div className="items-center justify-center flex w-screen h-screen">
      <h1>
        Review {reviewid} for Product {id}
      </h1>
    </div>
  );
};

export default page;
