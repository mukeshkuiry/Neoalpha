export default function Footer() {
  return (
    <footer className="text-white py-8 mt-12">
      <hr className="border-gray-800 mb-8" />
      <div className="container mx-auto">
        <div className="flex flex-col md:flex-row justify-between items-center">
          <div className="mb-4 md:mb-0">
            <h2 className="text-lg font-bold">Contact Us</h2>
            <p className="mt-2">Email: contact@noya.com</p>
            <p>Phone: +1 123 456 7890</p>
          </div>
          <nav className="flex flex-wrap justify-center md:justify-end">
            <a href="#" className="mx-2 hover:text-gray-300">Home</a>
            <a href="#" className="mx-2 hover:text-gray-300">About</a>
            <a href="#" className="mx-2 hover:text-gray-300">Protocols</a>
            <a href="#" className="mx-2 hover:text-gray-300">Strategy</a>
            <a href="#" className="mx-2 hover:text-gray-300">FAQ</a>
          </nav>
        </div>
        <div className="mt-4 text-center md:text-right">
          <p>&copy; 2024 NOYA. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
}
