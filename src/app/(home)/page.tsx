import Link from "next/link";
import { Navbar } from "./components/navbar";

const Home = () => {
  return (
    <div className="min-h-screen flex flex-col">
      <div className="fixed top-0 left-0 right-0 z-10 h-16 bg-white p-4">
        <Navbar />
      </div>
      <div className="mt-16">
        Click
        <Link
          href="/documents/123"
          className="mx-1 underline underline-offset-2 text-blue-400 hover:text-blue-200 cursor-pointer"
        >
          here
        </Link>
        to go to document id
      </div>
    </div>
  );
};
export default Home;
