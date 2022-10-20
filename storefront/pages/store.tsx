import Layout from "@modules/layout/";
import { ReactElement, useEffect, useState } from "react";
import { useAccount } from "@lib/context/account-context";
import { NextPageWithLayout, PrefetchedPageProps } from "types/global";

const Store: NextPageWithLayout<PrefetchedPageProps> = () => {
  const { checkSession } = useAccount();
  const [products, setProducts] = useState([]);

  useEffect(() => {
    checkSession();
  }, [checkSession]);

  /**
   * Uncomment the below code in order to use product fetching
   * Examle of simple product fetching from medusa-admin
   * See docs for thorough guide
   * https://docs.medusajs.com/api/store/
   */

  /* 
  useEffect(() => {
    const fetchProducts = async () => {
      const { products, count, offset } = await medusaClient.products.list({
        limit: 12,
      });
      setProducts(products);
    };

    fetchProducts();
  }, []);
*/

  return (
    <div className="container mx-auto">
      {/* A example component to show when the products have been fetched */}
      {/* <ProductCard products={products} /> */}
      <h1 className="text-gray-600 text-center font-notosans">Showcase the data here after successful User Auth</h1>
    </div>
  );
};

Store.getLayout = (page: ReactElement) => {
  return <Layout>{page}</Layout>;
};

export default Store;
