import Image from 'next/image';

export default function Footer() {
  return (
    <footer className="bg-black text-white py-12">
      <div className="container mx-auto grid grid-cols-1 md:grid-cols-3 gap-8">
        {/* Logo and tagline */}
        <div className="flex flex-col items-center md:items-start">
          <Image
            src="/assets/horizontal-logo.png"
            alt="ButterKnife Creative Logo"
            width={200}
            height={60}
          />
          <p className="mt-2 text-gray-400">CREATE MORE.</p>
        </div>

        {/* Services links */}
        <div className="text-center md:text-left">
          <h3 className="text-lg font-bold mb-4">Services</h3>
          <ul>
            <li>
              <a
                href="/services/photography"
                className="hover:text-[#FFDE32] transition-colors"
              >
                Photography
              </a>
            </li>
            <li>
              <a
                href="/services/videography"
                className="hover:text-[#FFDE32] transition-colors"
              >
                Videography
              </a>
            </li>
            <li>
              <a
                href="/services/real-estate"
                className="hover:text-[#FFDE32] transition-colors"
              >
                Real Estate
              </a>
            </li>
          </ul>
        </div>

        {/* Pages links */}
        <div className="text-center md:text-left">
          <h3 className="text-lg font-bold mb-4">Pages</h3>
          <ul>
            <li>
              <a href="/" className="hover:text-[#FFDE32] transition-colors">
                Home
              </a>
            </li>
            <li>
              <a
                href="/portfolio"
                className="hover:text-[#FFDE32] transition-colors"
              >
                Portfolio
              </a>
            </li>
            <li>
              <a
                href="/about"
                className="hover:text-[#FFDE32] transition-colors"
              >
                About
              </a>
            </li>
            <li>
              <a
                href="/team"
                className="hover:text-[#FFDE32] transition-colors"
              >
                Our Team
              </a>
            </li>
          </ul>
        </div>
      </div>
      <div className="w-full flex justify-center my-4">
        <hr className="w-full max-w-screen-lg border-t border-gray-500 border-opacity-50" />
      </div>

      {/* Contact info */}
      <div className="mt-8 text-center md:text-left container mx-auto">
        <p className="text-sm">
          <strong>Phone:</strong> 204-819-0410<br></br>
          <strong>Email:</strong> hello@butterknifecreative.com
        </p>
        <p className="text-sm mt-2">Winnipeg, Manitoba, Canada</p>
        <p className="text-xs mt-2">
          © 2024 ButterKnife Creative Inc. All Rights Reserved.
        </p>
      </div>
    </footer>
  );
}
