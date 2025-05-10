"use client";

import Link from "next/link";
import { ArrowRightIcon } from "@heroicons/react/24/outline";
import { usePathname } from "next/navigation";

export default function NotFound() {
  const pathname = usePathname();
  const paths = pathname.split("/");
  console.log(paths);
  return (
    <div className="flex items-center justify-center min-h-screen bg-white px-4">
      <div className="text-center max-w-md">
        <h1 className="text-5xl font-bold text-gray-900 mb-4">404</h1>
        <h2 className="text-2xl font-medium text-gray-800 mb-2">
          review {paths[4]} not found for product {paths[2]}
        </h2>
        <p className="text-gray-500 mb-8">
          Sorry, we couldnt find the page youre looking for.
        </p>
        <div className="flex justify-center">
          <Link
            href="/"
            className="inline-flex items-center px-4 py-2 border border-transparent text-sm font-medium rounded-md shadow-sm text-white bg-black hover:bg-gray-800 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-gray-500 transition-colors"
          >
            Go back home
            <ArrowRightIcon className="ml-2 h-4 w-4" />
          </Link>
        </div>
      </div>
    </div>
  );
}
