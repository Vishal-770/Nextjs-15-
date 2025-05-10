
import Link from "next/link";
const page = () => {
  return (
    <div className="flex flex-col justify-evenly items-center w-screen h-screen gap-y-10 mt-10">
      <h1>Products Page</h1>
      <Link href="/products/1">
        <button className="border border-white rounded-full p-2 bg-white text-black cursor-pointer hover:text-white hover:bg-black active:scale-98">
          Product 1
        </button>
      </Link>
      <Link href="/products/2">
        <button className="border border-white rounded-full p-2 bg-white text-black cursor-pointer hover:text-white hover:bg-black active:scale-98">
          Product 2
        </button>
      </Link>
      <Link href="/products/3">
        <button className="border border-white rounded-full p-2 bg-white text-black cursor-pointer hover:text-white hover:bg-black active:scale-98">
          Product 3
        </button>
      </Link>
    </div>
  );
};

export default page;
