interface Props {
  params: {
    slug: string;
  };
}

const Page = async ({ params }: Props) => {
  const slug = params.slug; // No await needed!
  console.log(slug);

  return (
    <div className="flex justify-center items-center w-screen h-screen">
      Product Page: {slug}
    </div>
  );
};

export default Page;
