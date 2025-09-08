import { ProductTags } from '../../enums/ProductTags';
import { Product } from '../../types/Product';

import { styles } from '.';

type ProductListProps = {
  products: Product[];
  onAddToCart: (product: Product) => void;
  tags?: ProductTags[];
};

const ProductList = ({ products, onAddToCart, tags }: ProductListProps) => {
  const filteredProducts = products;

  return (
    <div className={styles.container}>
      {filteredProducts.map((product) => (
        <div className={styles.card.container}>
          <div className={styles.card.image.wrapper}>
            <img src={product.image} alt={product.title} className={styles.card.image.image} />
          </div>
          <div className={styles.card.content}>
            <h3 className={styles.card.title}>{product.title}</h3>
            <p className="mt-1 text-sm text-gray-500">{product.description}</p>
            <div className="mt-4 flex items-center justify-between">
              <p className="text-lg font-medium text-gray-900">${product.price}</p>
              <button onClick={() => onAddToCart(product)} className={styles.card.button}>
                Add to Cart
              </button>
            </div>
            {tags && (
              <div className="mt-2 flex flex-wrap gap-2">
                {tags.map((tag) => (
                  <span key={tag} className="px-2 py-1 text-xs bg-gray-100 rounded">
                    {tag}
                  </span>
                ))}
              </div>
            )}
          </div>
        </div>
      ))}
      {filteredProducts.length === 0 && <p>No products available</p>}
    </div>
  );
};

export default ProductList;
