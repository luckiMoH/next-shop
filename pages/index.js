import Head from 'next/head'
import { Title } from '@/components/Title/Title';
import { getProducts } from '../lib/products';

export async function getStaticProps() {
  console.log('[HomePage] getStaticProps()');
  const products = await getProducts();
  return {
    props: {
      products
    },
    revalidate: 5 * 60, // seconds
  };
}

// const products = [
//   {id: 1, title: 'Product 1'},
//   {id: 2, title: 'Product 2'}
// ]

export default function Home({ products }) {
  console.log('[HomePage] render:', products);
  return (
    <>
    <Head>
      <title>Next shop</title>
    </Head>
      <Title>Next Shop</Title>
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
