import { useRouter } from "next/router";

function ProductPage() {
  const router = useRouter();
  console.log(router.query);
  const { id, productId } = router.query;

  return (
    <div>
      {" "}
      <h1>
        Store: {id} Product {productId} Page
      </h1>
    </div>
  );
}

export default ProductPage;
