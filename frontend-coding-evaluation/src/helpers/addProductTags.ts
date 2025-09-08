import { ProductTags } from '../enums/ProductTags';
import { Product } from '../types/Product';

export const addProductTags = (products: Product[]): Product[] =>
  products.map((product) => ({
    ...product,
    tags: [ProductTags.NEW, ProductTags.SALE, ProductTags.BESTSELLER, ProductTags.LIMITED, ProductTags.FEATURED]
      .sort(() => Math.random() - 0.5)
      .slice(0, Math.floor(Math.random() * 3) + 1),
  }));
