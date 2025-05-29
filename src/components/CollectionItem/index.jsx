import styles from "./collectionItem.module.scss";
import { MdOutlineStar } from "react-icons/md";

const CollectionItem = ({
  title,
  price,
  thumbnail,
  rating,
  availabilityStatus,
}) => {
  const isOutOfStock = availabilityStatus?.toLowerCase() === "out of stock";

  return (
    <div className={styles.itemContainer}>
      <img src={thumbnail} loading="lazy" alt="product-pic" />
      <p className={styles.title}>{title}</p>
      <div className={styles.content}>
        <span>{price}</span>
        <span className={styles.rating}>
          {rating}
          <MdOutlineStar color="#f9c300" size={16} />
        </span>
      </div>
      {isOutOfStock ? (
        <span className={styles.outOfStock}>{availabilityStatus}</span>
      ) : null}
    </div>
  );
};

export default CollectionItem;
