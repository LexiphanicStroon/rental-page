export default function Header() {
  return (
    <header className="bg-black text-white p-4">
      <div className="container mx-auto flex items-center justify-between">
        <div className="flex items-center">
          <a href="">
            <img
              src="/assets/bk-logo.png"
              alt="ButterKnife Creative Logo"
              className="w-[281px] h-[29px]"
            />
          </a>
          {/* <span className="ml-4 font-bold text-xl">BUTTERKNIFE CREATIVE</span> */}
        </div>
        <nav className="hidden md:flex space-x-8 text-[16px]">
          <a href="/" className="hover:text-[#FFDE32] transition-colors">
            Home
          </a>
          <div className="relative group">
            <a href="#" className="hover:text-[#FFDE32] transition-colors">
              Services
            </a>
            {/* Dropdown */}
            <div className="absolute left-0 mt-2 w-48 bg-black text-white opacity-0 group-hover:opacity-100 text-center transition-opacity duration-300">
              <ul className="space-y-2">
                <li>
                  <a
                    href="/photography"
                    className="block px-4 py-1 hover:text-[#FFDE32] transition-colors"
                  >
                    Photography
                  </a>
                </li>
                <li>
                  <a
                    href="/video-production"
                    className="block px-4 py-1 hover:text-[#FFDE32] transition-colors"
                  >
                    Video Production
                  </a>
                </li>
                <li>
                  <a
                    href="/real-estate"
                    className="block px-4 py-1 hover:text-[#FFDE32] transition-colors"
                  >
                    Real Estate
                  </a>
                </li>
                <li>
                  <a
                    href="/livestream"
                    className="block px-4 py-1 hover:text-[#FFDE32] transition-colors"
                  >
                    Livestream
                  </a>
                </li>
                <li>
                  <a
                    href="/social-media"
                    className="block px-4 py-1 hover:text-[#FFDE32] transition-colors"
                  >
                    Social Media Management
                  </a>
                </li>
              </ul>
            </div>
          </div>
          <a
            href="/portfolio"
            className="hover:text-[#FFDE32] transition-colors"
          >
            Portfolio
          </a>
          <div className="relative group">
            <a href="#" className="hover:text-[#FFDE32] transition-colors">
              About
            </a>
            {/* Dropdown */}
            <div className="absolute left-0 mt-2 w-full bg-black text-white opacity-0 group-hover:opacity-100 transition-opacity duration-300 text-center">
              <ul className="space-y-2 py-2 px-4 w-max bg-black">
                <li>
                  <a
                    href="/our-team"
                    className="block hover:text-[#FFDE32] transition-colors"
                  >
                    Our Team
                  </a>
                </li>
                <li>
                  <a
                    href="/blog"
                    className="block hover:text-[#FFDE32] transition-colors"
                  >
                    Blog
                  </a>
                </li>
                <li>
                  <a
                    href="/contact-us"
                    className="block hover:text-[#FFDE32] transition-colors"
                  >
                    Contact Us
                  </a>
                </li>
              </ul>
            </div>
          </div>
        </nav>

        {/* Social Icons */}
        <div className="hidden md:flex space-x-4">
          <a
            href="https://www.instagram.com/yourprofile"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-[#FFDE32] transition-colors"
          >
            <img src="/assets/tiktok.svg" className="h-6 w-6" />
          </a>

          <a
            href="https://www.tiktok.com/@yourprofile"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-[#FFDE32] transition-colors"
          >
            <img src="/assets/IG.svg" className="h-6 w-6" />
          </a>
        </div>

        {/* Contact Button */}
        <a
          href="/contact"
          className="bg-[#fffc00] text-black py-1.5 px-14 rounded-[25px] hover:bg-white text-[14px] font-normal transition-colors"
        >
          CONTACT
        </a>

        {/* Mobile Menu */}
        <div className="md:hidden">
          <button className="text-white">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-6 w-6"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M4 6h16M4 12h16M4 18h16"
              />
            </svg>
          </button>
        </div>
      </div>
    </header>
  );
}
