import Head from "next/head";
import { Title } from "@/components/Title/Title";
import { getProducts } from "../lib/products";
import Link from "next/link";

export async function getStaticProps() {
  console.log("[HomePage] getStaticProps()");
  const products = await getProducts();
  return {
    props: {
      products,
    },
    revalidate: parseInt(process.env.REVALIDATE_SECONDS),
  };
}

// const products = [
//   {id: 1, title: 'Product 1'},
//   {id: 2, title: 'Product 2'}
// ]

export default function Home({ products }) {
  console.log("[HomePage] render:", products);
  return (
    <>
      <Head>
        <title>Next shop</title>
      </Head>
      <main className="px-6 py-4">
        <Title>Next Shop</Title>
        <ul>
          {products.map((product) => {
            return (
              <Link href={`/products/${product.id}`} key={product.id}>
                <li >{product.title}</li>
              </Link>
            );
          })}
        </ul>
      </main>
    </>
  );
}
