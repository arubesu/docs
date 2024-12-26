import Link from "next/link";

const Home = () => {
  return (
    <div>
      <Link href={"/documents/id"}>Go to document</Link>
    </div>
  );
};

export default Home;
