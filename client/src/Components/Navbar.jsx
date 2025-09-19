import React from 'react'

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  return (
    <header className="bg-[#1a1a1a] text-white">
      <div className="max-w-7xl mx-auto flex justify-between items-center px-6 py-4">
        {/* Logo */}
        <div className="flex items-center gap-2">
          <span className="text-orange-500 text-2xl font-bold">🥕</span>
          <h1 className="font-bold text-lg">eat this much</h1>
        </div>

        {/* Desktop Nav */}
        <nav className="hidden md:flex gap-6">
          <a href="#" className="hover:text-orange-400 transition">Supported Diets</a>
          <a href="#" className="hover:text-orange-400 transition">Pricing</a>
          <a href="#" className="hover:text-orange-400 transition">For Professionals</a>
        </nav>

        {/* Right Side */}
        <div className="hidden md:flex items-center gap-4">
          <a href="#" className="text-sm">Sign in</a>
          <button className="bg-orange-500 hover:bg-orange-600 px-4 py-2 rounded-md font-medium">
            Sign Up
          </button>
        </div>


        {/* Mobile Hamburger */}
        <button
          className="md:hidden text-2xl"
          onClick={() => setIsOpen(!isOpen)}
        >
          ☰
        </button>
      </div>


      {/* Mobile Menu */}
      {isOpen && (
        <div className="md:hidden bg-[#1a1a1a] px-6 py-4 space-y-4">
          <a href="#" className="block hover:text-orange-400 transition">Supported Diets</a>
          <a href="#" className="block hover:text-orange-400 transition">Pricing</a>
          <a href="#" className="block hover:text-orange-400 transition">For Professionals</a>
          <a href="#" className="block text-sm">Sign in</a>
          <button className="w-full bg-orange-500 hover:bg-orange-600 px-4 py-2 rounded-md font-medium">
            Sign Up
          </button>
        </div>
      )}
    </header>
  )
}
