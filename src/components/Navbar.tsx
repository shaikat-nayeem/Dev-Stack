import logo from '../assets/images/logo-text.png';

export default function Navbar() {
  return (
    <header className="w-full bg-white border-b border-gray-100 py-4 px-6 md:px-12 flex items-center justify-between sticky top-0 z-50">
      {/* Logo */}
      <div className="flex items-center gap-2 cursor-pointer">
        <img src={logo} alt="Dev Stack Logo" className="h-8 object-contain" />
      </div>

      {/* Nav Links */}
      <nav className="hidden md:flex items-center gap-8 text-sm font-medium text-gray-600">
        <a href="#home" className="text-pink-600 hover:text-pink-700">Home</a>
        <a href="#technologies" className="hover:text-gray-900">Technologies</a>
        <a href="#projects" className="hover:text-gray-900">Projects</a>
        <a href="#about" className="hover:text-gray-900">About</a>
        <a href="#contact" className="hover:text-gray-900">Contact</a>
      </nav>

      {/* Action Buttons */}
      <div className="flex items-center gap-4">
        <button className="text-sm font-medium text-gray-700 hover:text-gray-900 hidden sm:block">
          Sign In
        </button>
        <button className="bg-pink-600 hover:bg-pink-700 text-white text-sm font-medium px-4 py-2 rounded-full shadow-sm">
          Sign Up
        </button>
      </div>
    </header>
  );
}