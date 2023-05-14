// option 2: fetch products on the client side (in useEffect);
// from an internal API route
import Head from 'next/head'
import { getProducts } from '../lib/products';
import { useEffect, useState } from 'react';

export default function Home() {

  const [products, setProducts] = useState([]);

  useEffect(() => {
    (async () => {
      const response = await fetch('/api/products');
      const products = await response.json();
      setProducts(products);
    })()
  }, [])
  
  return (
    <>
    <Head>
      <title>Next shop2</title>
    </Head>
      <main>
        Hello world
      </main>
      <ul>
        {products.map((product) => {
          return (
            <li key={product.id}>{product.title}</li>
          )
        })}
      </ul>
    </>
  )
}
