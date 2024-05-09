import Link from "next/link";

export default function Navbar() {
  return (
    <div className="flex justify-between items-center py-4 px-6 text-white">
      <h1 className="text-3xl font-bold">Neoalpha</h1>
      <div className="flex items-center space-x-4">
        <Link href="/" passHref>
          <p className="text-lg hover:text-gray-300">Home</p>
        </Link>
        <Link href="/space-race" passHref>
          <p className="text-lg hover:text-gray-300">Space Race</p>
        </Link>
        <Link href="/more" passHref>
          <p className="text-lg hover:text-gray-300">More</p>
        </Link>
        <button className="bg-blue-500 hover:bg-blue-600 text-white px-4 py-1 rounded-sm">Launch App</button>
      </div>
    </div>
  );
}
