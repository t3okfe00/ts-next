import Link from "next/link";

function HomePage() {
  return (
    <div>
      <h1 className="text-7xl">Home Page</h1>
      <Link href="/info" className="text-3xl">
        Info Page
      </Link>
    </div>
  );
}

export default HomePage;
