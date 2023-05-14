// option 1: fetch products on the server side (in getServerSideProps);
import Head from 'next/head'
import { Title } from '@/components/Title/Title';
import { getProducts } from '../lib/products';

export async function getServerSideProps() {
  console.log('[HomePage] getServerSideProps()');
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
      <Title>Next Shop1c</Title>
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
