import NotFound from "@/app/(website)/products/[id]/reviews/not-found";

const page = async ({
  params,
}: {
  params: Promise<{ reviewid: string; id: string }>;
}) => {
  const { id, reviewid } = await params;
  if (parseInt(reviewid) > 1000) {
    console.log("yee");
    return <NotFound />;
  }
  return (
    <div className="items-center justify-center flex w-screen h-screen">
      <h1>
        Review {reviewid} for Product {id}
      </h1>
    </div>
  );
};

export default page;
