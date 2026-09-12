import logo from '../assets/images/logo-text.png';

export default function Footer() {
  return (
    <footer className="bg-white border-t border-gray-100 pt-16 pb-12 px-6 md:px-12 mt-20">
      <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-5 gap-10">
        {/* Brand Column */}
        <div className="md:col-span-2 space-y-4">
          <div className="flex items-center gap-2">
            <img src={logo} alt="Dev Stack Logo" className="h-8 object-contain" />
          </div>
          <p className="text-gray-500 text-sm max-w-sm leading-relaxed">
            Curated tools, technologies, and resources for developers building modern software.
          </p>
          <div className="flex items-center gap-4 text-sm font-medium text-gray-600 pt-2">
            <a href="https://github.com" target="_blank" rel="noopener noreferrer" className="hover:text-pink-600">GitHub</a>
            <a href="https://twitter.com" target="_blank" rel="noopener noreferrer" className="hover:text-pink-600">Twitter</a>
            <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer" className="hover:text-pink-600">LinkedIn</a>
          </div>
        </div>

        {/* Product Links */}
        <div>
          <h4 className="font-semibold text-gray-900 text-sm uppercase tracking-wider mb-4">Product</h4>
          <ul className="space-y-3 text-sm text-gray-600">
            <li><a href="#home" className="hover:text-gray-900">Home</a></li>
            <li><a href="#technologies" className="hover:text-gray-900">Technologies</a></li>
            <li><a href="#projects" className="hover:text-gray-900">Projects</a></li>
          </ul>
        </div>

        {/* Company Links */}
        <div>
          <h4 className="font-semibold text-gray-900 text-sm uppercase tracking-wider mb-4">Company</h4>
          <ul className="space-y-3 text-sm text-gray-600">
            <li><a href="#about" className="hover:text-gray-900">About</a></li>
            <li><a href="#contact" className="hover:text-gray-900">Contact</a></li>
            <li><a href="#careers" className="hover:text-gray-900">Careers</a></li>
          </ul>
        </div>

        {/* Legal Links */}
        <div>
          <h4 className="font-semibold text-gray-900 text-sm uppercase tracking-wider mb-4">Legal</h4>
          <ul className="space-y-3 text-sm text-gray-600">
            <li><a href="#privacy" className="hover:text-gray-900">Privacy Policy</a></li>
            <li><a href="#terms" className="hover:text-gray-900">Terms of Service</a></li>
          </ul>
        </div>
      </div>

      {/* Copyright Bottom Bar */}
      <div className="max-w-7xl mx-auto border-t border-gray-100 mt-12 pt-8 flex flex-col sm:flex-row items-center justify-between text-xs text-gray-400">
        <p>© 2026 DevStack. All rights reserved.</p>
        <div className="flex items-center gap-6 mt-4 sm:mt-0">
          <a href="#privacy" className="hover:text-gray-600">Privacy</a>
          <a href="#terms" className="hover:text-gray-600">Terms</a>
        </div>
      </div>
    </footer>
  );
}