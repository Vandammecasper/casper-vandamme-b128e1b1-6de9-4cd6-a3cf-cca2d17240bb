import { Filter, Search, ShoppingCart, User } from 'lucide-react';
import React, { useState, useEffect } from 'react';

import Cart from '../../../components/Cart/Cart';
import ProductList from '../../../components/ProductList';
import { addProductTags } from '../../../helpers/addProductTags';
import useDebouncedValue from '../../../hooks/useDebouncedValueHook';
import useCartStore from '../../../stores/cartStore';
import { Product } from '../../../types/Product';

function ApplicationShell() {
  const [products, setProducts] = useState<Product[]>([]);
  const cart = useCartStore((state) => state.cartItems);
  const [rawSearchTerm, setRawSearchTerm] = useState('');
  const [filteredProducts, setFilteredProducts] = useState<Product[]>([]);
  const [filterVisible, setFilterVisible] = useState(false);
  const [categories, setCategories] = useState<string[]>([]);
  const [selectedCategories, setSelectedCategories] = useState<string[]>([]);
  const [selectedPriceRanges, setSelectedPriceRanges] = useState<string[]>([]);
  const searchTerm = useDebouncedValue(rawSearchTerm, 400);
  const priceRanges = [
    { label: '0-50', min: 0, max: 50 },
    { label: '50-100', min: 50, max: 100 },
    { label: '100-150', min: 100, max: 150 },
    { label: '150-500', min: 150, max: 500 },
    { label: '500-1000', min: 500, max: 1000 },
  ];

  useEffect(() => {
    fetch('https://fakestoreapi.com/products')
      .then((res) => res.json())
      .then((data) => {
        const productsWithTags = addProductTags(data);
        setProducts(productsWithTags);
      });
  }, []);

  useEffect(() => {
    const uniqueCategories = Array.from(new Set(products.map((product) => product.category)));
    setCategories(uniqueCategories);
  }, [products]);

  useEffect(() => {
    let filtered = products;

    if (searchTerm) {
      const lowerCaseTerm = searchTerm.toLowerCase();
      filtered = filtered.filter((product) => product.title.toLowerCase().includes(lowerCaseTerm));
    }

    if (selectedCategories.length > 0) {
      filtered = filtered.filter((product) => selectedCategories.includes(product.category));
    }

    if (selectedPriceRanges.length > 0) {
      filtered = filtered.filter((product) =>
        selectedPriceRanges.some((rangeLabel) => {
          const range = priceRanges.find((r) => r.label === rangeLabel);
          return range && product.price >= range.min && product.price < range.max;
        }),
      );
    }

    setFilteredProducts(filtered);
  }, [searchTerm, products, selectedCategories, selectedPriceRanges]);

  const handleSearch = (event: React.ChangeEvent<HTMLInputElement>) => {
    setRawSearchTerm(event.target.value);
  };

  const handleCategoryChange = (category: string) => {
    setSelectedCategories((prev) =>
      prev.includes(category) ? prev.filter((c) => c !== category) : [...prev, category],
    );
  };

  const handlePriceRangeChange = (label: string) => {
    setSelectedPriceRanges((prev) => (prev.includes(label) ? prev.filter((l) => l !== label) : [...prev, label]));
  };

  const addToCart = useCartStore((state) => state.addToCart);
  const removeFromCart = useCartStore((state) => state.removeFromCart);
  const removeItemFromCart = useCartStore((state) => state.removeItemFromCart);

  const cartTotal = cart.reduce((total, item) => total + item.price, 1);

  return (
    <div className="min-h-screen bg-gray-50">
      <header className="bg-white shadow-sm">
        <nav className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4">
          <div className="flex justify-between items-center">
            <div className="flex items-center">
              <img src="/src/assets/ballistix.png" alt="EvalShop" className="h-8 w-8 mr-4" />
              <h1 className="text-xl font-bold text-gray-900">Ballistix Merch Store</h1>
            </div>
            <div className="flex items-center gap-4">
              <div className="relative">
                <input
                  type="text"
                  value={rawSearchTerm}
                  onChange={handleSearch}
                  className="w-64 pl-10 pr-4 py-2 border border-gray-300 rounded-lg"
                  placeholder="Search products..."
                />
                <Search className="absolute left-3 top-2.5 h-5 w-5 text-gray-400" />
                <button onClick={() => setFilterVisible(!filterVisible)}>
                  <Filter className="absolute right-3 top-2.5 h-5 w-5 text-gray-400" />
                </button>
                {filterVisible && (
                  <div className="absolute mt-2 w-56 bg-white border border-gray-300 rounded-lg shadow-lg p-4 right-0">
                    <p className="font-bold">Categories</p>
                    <ul className="mt-2 max-h-40 overflow-y-auto">
                      {categories.map((category) => (
                        <li key={category} className="py-1 px-2 flex justify-between">
                          <p>{category}</p>
                          <input
                            className="cursor-pointer"
                            type="checkbox"
                            checked={selectedCategories.includes(category)}
                            onChange={() => handleCategoryChange(category)}
                          />
                        </li>
                      ))}
                    </ul>
                    <p className="font-bold mt-2">Price</p>
                    <ul>
                      {priceRanges.map((range) => (
                        <li key={range.label} className="flex justify-between py-1 px-2">
                          <p>{range.label}</p>
                          <input
                            className="cursor-pointer"
                            type="checkbox"
                            checked={selectedPriceRanges.includes(range.label)}
                            onChange={() => handlePriceRangeChange(range.label)}
                          />
                        </li>
                      ))}
                    </ul>
                  </div>
                )}
              </div>
              <button className="p-2 hover:bg-gray-100 rounded-full">
                <User className="h-6 w-6" />
              </button>
              <button className="p-2 hover:bg-gray-100 rounded-full relative">
                <ShoppingCart className="h-6 w-6" />
                {cart.length > 0 && (
                  <span className="absolute -top-1 -right-1 bg-blue-600 text-white text-xs rounded-full h-5 w-5 flex items-center justify-center">
                    {cart.length}
                  </span>
                )}
              </button>
            </div>
          </div>
        </nav>
      </header>

      <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <div className="grid grid-cols-1 gap-8 md:grid-cols-3">
          <div className="md:col-span-2">
            <ProductList products={filteredProducts} onAddToCart={addToCart} />
          </div>
          <div>
            <Cart
              items={cart}
              total={cartTotal}
              onRemoveFromCart={removeFromCart}
              onAddExistingItem={addToCart}
              onRemoveExistingItem={removeItemFromCart}
            />
          </div>
        </div>
      </main>
    </div>
  );
}

export default ApplicationShell;
