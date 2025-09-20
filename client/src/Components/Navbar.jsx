import React, { useState } from "react";


export default function Navbar({ logoSrc = "Ai-Diet-Planner\client\src\assets\logo.png", onSignIn, onSignUp }) {
  const [mobileOpen, setMobileOpen] = useState(false);
  const [dietsOpen, setDietsOpen] = useState(false);

  return (
    <header className="w-full bg-white shadow-sm sticky top-0 z-50">
      {/* Top strip (optional) */}
      <div className="hidden md:flex items-center justify-between max-w-7xl mx-auto px-4 py-2 text-sm">
        <nav className="flex gap-6 items-center">
          <a href="/supported-diets" className="hover:underline">Supported Diets</a>
          <a href="/pricing" className="hover:underline">Pricing</a>
          <a href="/for-professionals" className="hover:underline">For Professionals</a>
        </nav>
        <div className="flex items-center gap-4">
          <button
            onClick={onSignUp}
            className="px-3 py-1.5 rounded-md text-sm font-medium bg-emerald-600 text-white hover:bg-emerald-700"
          >
            Sign Up
          </button>
          <button onClick={onSignIn} className="text-sm text-gray-700 hover:underline">
            Already a member? Sign in
          </button>
        </div>
      </div>

      {/* Main nav */}
      <div className="border-t border-gray-100">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between h-16 items-center">
            {/* Left: logo + primary links */}
            <div className="flex items-center gap-6">
              <a href="/" className="flex items-center gap-3">
                <img src={logoSrc} alt="logo" className="h-8 w-auto" />
                <span className="hidden sm:inline font-semibold text-lg">BiteBot</span>
              </a>

              <nav className="hidden lg:flex items-center gap-4">
                <div className="relative">
                  <button
                    onClick={() => setDietsOpen(!dietsOpen)}
                    className="px-3 py-2 rounded-md hover:bg-gray-50 text-sm font-medium flex items-center gap-2"
                  >
                    Preferred Diet
                    <svg className="h-4 w-4" viewBox="0 0 20 20" fill="currentColor">
                      <path fillRule="evenodd" d="M5.23 7.21a.75.75 0 011.06.02L10 10.939l3.71-3.71a.75.75 0 111.06 1.06l-4.24 4.24a.75.75 0 01-1.06 0L5.21 8.27a.75.75 0 01.02-1.06z" clipRule="evenodd" />
                    </svg>
                  </button>

                  {dietsOpen && (
                    <div className="absolute mt-2 w-48 bg-white border rounded-md shadow-lg p-2">
                      <a href="/diets/anything" className="block px-3 py-2 rounded hover:bg-gray-50">Anything</a>
                      <a href="/diets/keto" className="block px-3 py-2 rounded hover:bg-gray-50">Keto</a>
                      <a href="/diets/mediterranean" className="block px-3 py-2 rounded hover:bg-gray-50">Mediterranean</a>
                      <a href="/diets/vegan" className="block px-3 py-2 rounded hover:bg-gray-50">Vegan</a>
                    </div>
                  )}
                </div>

                <a href="/calorie-calculator" className="px-3 py-2 rounded-md hover:bg-gray-50 text-sm font-medium">Calorie Calculator</a>
                <a href="/browse-foods" className="px-3 py-2 rounded-md hover:bg-gray-50 text-sm font-medium">Browse Foods</a>
                <a href="/blog" className="px-3 py-2 rounded-md hover:bg-gray-50 text-sm font-medium">Blog</a>
              </nav>
            </div>

            {/* Right: actions & mobile menu button */}
            <div className="flex items-center gap-4">
              <div className="hidden sm:flex items-center gap-3">
                <a href="/apps/ios" className="text-xs hover:underline">Get our iOS app</a>
                <a href="/apps/android" className="text-xs hover:underline">Android</a>
              </div>

              <div className="hidden sm:flex items-center gap-2">
                <a href="/signup" className="px-3 py-2 rounded-md border border-emerald-600 text-emerald-600 text-sm font-medium hover:bg-emerald-50">Create a free account</a>
              </div>

              {/* Mobile menu button */}
              <div className="lg:hidden flex items-center">
                <button
                  onClick={() => setMobileOpen(!mobileOpen)}
                  aria-label="Open menu"
                  className="p-2 rounded-md focus:outline-none focus:ring-2 focus:ring-emerald-500"
                >
                  {mobileOpen ? (
                    <svg className="h-6 w-6" viewBox="0 0 24 24" fill="none" stroke="currentColor">
                      <path strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
                    </svg>
                  ) : (
                    <svg className="h-6 w-6" viewBox="0 0 24 24" fill="none" stroke="currentColor">
                      <path strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" d="M4 6h16M4 12h16M4 18h16" />
                    </svg>
                  )}
                </button>
              </div>
            </div>
          </div>
        </div>

        {/* Mobile menu panel */}
        {mobileOpen && (
          <div className="lg:hidden border-t bg-white">
            <div className="px-4 pt-4 pb-4 space-y-2">
              <a href="/supported-diets" className="block px-2 py-2 rounded hover:bg-gray-50">Supported Diets</a>
              <a href="/pricing" className="block px-2 py-2 rounded hover:bg-gray-50">Pricing</a>
              <a href="/for-professionals" className="block px-2 py-2 rounded hover:bg-gray-50">For Professionals</a>
              <a href="/calorie-calculator" className="block px-2 py-2 rounded hover:bg-gray-50">Calorie Calculator</a>
              <a href="/browse-foods" className="block px-2 py-2 rounded hover:bg-gray-50">Browse Foods</a>

              <div className="pt-2 border-t">
                <button onClick={onSignUp} className="w-full text-center px-3 py-2 rounded-md bg-emerald-600 text-white font-medium">Sign Up</button>
                <button onClick={onSignIn} className="w-full text-center mt-2 px-3 py-2 rounded-md text-sm">Sign in</button>
              </div>
            </div>
          </div>
        )}
      </div>
    </header>
  );
}