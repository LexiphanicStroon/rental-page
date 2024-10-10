import ProductCard from './components/ProductCard';
import products from './data/products';

import Head from 'next/head';

export default function Home() {
  return (
    <>
      <title>Rental Equipment</title>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4 p-4">
        {products.map((product) => (
          <ProductCard key={product.id} product={product} />
        ))}
      </div>
    </>
  );
}
