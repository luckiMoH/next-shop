// option 2a: fetch products on the client side (in useEffect);
// directly from an external API
import Head from 'next/head'
import { getProducts } from '../lib/products';
import { useEffect, useState } from 'react';

export default function Home() {

  const [products, setProducts] = useState([]);

  useEffect(() => {
    getProducts().then(setProducts);
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
