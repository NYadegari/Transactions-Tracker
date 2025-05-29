import React, { useEffect, useState } from "react";
import styles from "./collection.module.scss";
import { Link, useParams, useSearchParams } from "react-router-dom";
import CollectionItem from "../../components/CollectionItem";
import { getData } from "../../services/apiClient";

const Collection = () => {
  const [products, setProducts] = useState([]);

  const params = useParams();
  const [searchParams] = useSearchParams();
  const title = searchParams.get("title");

  const fetchProducts = async () => {
    try {
      const data = await getData(`/products/category/${params.category}`);
      setProducts(data.products);
    } catch (error) {
      console.log("error", error);
    }
  };

  useEffect(() => {
    if (params.category) {
      fetchProducts();
    }
  }, [params.category]);

  return (
    <>
      {title && <h1 className={styles.collectionTitle}> {title}</h1>}
      <div className={styles.collectionContainer}>
        {products?.map((item) => (
          <Link to={`${item.id}`}>
            <CollectionItem key={item.id} {...item} />
          </Link>
        ))}
      </div>
    </>
  );
};

export default Collection;
