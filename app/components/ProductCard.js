// components/ProductCard.js

import Link from 'next/link';

export default function ProductCard({ product }) {
  return (
    <div className="w-full h-auto bg-white p-4 flex flex-col items-center text-center">
      <div className="w-full h-64 bg-white flex items-center justify-center">
        <img
          src={product.image}
          alt={product.title}
          className="object-contain h-full w-full"
        />
      </div>
      <h2
        className="mt-4 text-lg text-black
       font-bold"
      >
        {product.title}
      </h2>
      <p className="text-black">${product.price}/day</p>
      <a
        href={`/rentals/${product.id}`}
        className="mt-4 px-24 hover:bg-[#22CE88] transition-colors duration-200 hover:text-black font-medium py-2 bg-black text-white rounded"
      >
        Get A Quote
      </a>
    </div>
  );
}
