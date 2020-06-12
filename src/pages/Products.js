import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { fetchProducts, addToCart } from "../store/products/actions";
import { selectProducts } from "../store/products/selectors";
export default function Products() {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchProducts);
  }, [dispatch]);

  const products = useSelector(selectProducts);

  console.log("products", products);
  return (
    <div>
      <h1>Products available:</h1>

      {products ? (
        products.map((product) => {
          return (
            <h2 key={product.id}>
              {product.name}
              <button
                onClick={(e) => {
                  dispatch(addToCart(product.id));
                }}
              >
                add to cart
              </button>
            </h2>
          );
        })
      ) : (
        <p>loading</p>
      )}

      <p></p>
    </div>
  );
}
