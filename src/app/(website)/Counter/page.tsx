import { Metadata } from "next";
import Counter from "./Counter";
export const metadata: Metadata = {
  title: "Counter",
};
const page = () => {
  return (
    <div>
      <Counter />
    </div>
  );
};

export default page;
