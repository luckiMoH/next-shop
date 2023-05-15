import { Title } from "@/components/Title/Title";
import { ApiError } from "@/lib/api";
import { getProduct, getProducts } from "@/lib/products";
import Head from "next/head";

export async function getStaticPaths() {
  const products = await getProducts();
  return {
    paths: products.map((product) => ({
      params: { id: product.id.toString() },
    })),
    fallback: 'blocking',
  };
}

export async function getStaticProps({ params: { id } }) {
    try {
        const product = await getProduct(id);
        return {
          props: { product },
          revalidate: parseInt(process.env.REVALIDATE_SECONDS),
        };
    } catch (err) {
        if (err instanceof ApiError && err.status === 404) {
            return { notFound: true };
        }
        throw err;
        // return { notFound: true };
    }
}

function ProductPage({ product }) {
  return (
    <>
      <Head>
        <title>Next shop</title>
      </Head>
      <main className="px-6 py-4">
        <Title>{product.title}</Title>
        <p>{product.description}</p>
      </main>
    </>
  );
}

export default ProductPage;
