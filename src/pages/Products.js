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
      <ul>
        {products ? (
          products.map((product) => {
            return (
              <li key={product.id}>
                <h2>{product.name}</h2>
                <div className="productpicture">
                  <img src={product.imageUrl} />
                </div>
                <button
                  onClick={(e) => {
                    dispatch(addToCart(product.id));
                  }}
                >
                  add to cart
                </button>
              </li>
            );
          })
        ) : (
          <p>loading</p>
        )}
      </ul>

      <p></p>
    </div>
  );
}
