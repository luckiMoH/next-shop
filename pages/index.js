// option 1: fetch products on the server side (in getStaticProps);
import Head from 'next/head'
import getProducts from './lib/products';
import { Title } from '@/components/Title/Title';

export async function getStaticProps() {
  console.log('[HomePage] getStaticProps()');
  const products = await getProducts();
  return {
    props: {
      products
    }
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
      <title>Next shop1</title>
    </Head>
      <Title>Next Shop1</Title>
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
