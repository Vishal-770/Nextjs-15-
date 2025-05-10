import Link from "next/link";

const page = () => {
  return (
    <div>
      <div className="flex flex-col h-screen justify-center items-center gap-y-2">
        <h1>Blog Page </h1>
        <Link href="/blogs/first">
          <button className="border border-white rounded-full p-2 bg-white text-black cursor-pointer hover:text-white hover:bg-black active:scale-98">
            Blog page 1
          </button>
        </Link>
        <Link href="/blogs/second">
          <button className="border border-white rounded-full p-2 bg-white text-black cursor-pointer hover:text-white hover:bg-black active:scale-98">
            Blog page 2
          </button>
        </Link>
      </div>
    </div>
  );
};

export default page;
