import React from "react";
import { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { fetchProducts } from "../redux/productSlice";
import ProductCard from "../components/productCard";

const Shop = () => {
  const disptch = useDispatch();

  const { status, items } = useSelector((state) => state.product);

  console.log(status);

  console.log(items);

  useEffect(() => {
    disptch(fetchProducts());
  }, [disptch]);

  return (
    <div>
      <h1>This is Shop Page</h1>

      {status === "loading" && <p>Loading...</p>}
      {status === "succeeded" &&
        items.map((product) => (
          <ProductCard key={product.id} product={product} />
        ))}
      {status === "failed" && <p>Failed to load products.</p>}
    </div>
  );
};

export default Shop;
