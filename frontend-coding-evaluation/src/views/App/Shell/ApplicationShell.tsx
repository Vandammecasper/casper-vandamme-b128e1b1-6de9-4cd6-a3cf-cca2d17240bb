import { Search, ShoppingCart, User } from 'lucide-react';
import React, { useState, useEffect } from 'react';

import Cart from '../../../components/Cart/Cart';
import ProductList from '../../../components/ProductList';
import { addProductTags } from '../../../helpers/addProductTags';
import { Product } from '../../../types/Product';

function ApplicationShell() {
  const [products, setProducts] = useState<Product[]>([]);
  const [cart, setCart] = useState<Product[]>([]);
  const [searchTerm, setSearchTerm] = useState('');
  const [cartLimit, setCartLimit] = useState(false);
  const [cartBump, setCartBump] = useState(false);
  const [isLoading, setIsLoading] = useState(false);

  useEffect(() => {
    fetch('https://fakestoreapi.com/products')
      .then((res) => res.json())
      .then((data) => {
        const productsWithTags = addProductTags(data);
        setProducts(productsWithTags);
      });
  }, []);

  const handleSearch = (event: React.ChangeEvent<HTMLInputElement>) => {
    setSearchTerm(event.target.value);
  };

  const addToCart = (product: Product) => {
    if (cart.length > 4) {
      setCartLimit(true);
      setTimeout(() => {
        setCartLimit(false);
      }, 5000);
      return;
    }
    setCart([...cart, product]);
  };

  const removeFromCart = (product: Product) => {
    setCart(cart.filter((item) => item.id !== product.id));
  };

  const addExistingItem = (product: Product) => {
    if (cart.length > 4) {
      setCartLimit(true);
      setTimeout(() => {
        setCartLimit(false);
      }, 5000);
      return;
    }
    setCart([...cart, product]);
  };

  const removeExistingItem = (product: Product) => {
    const index = cart.findIndex((item) => item.id === product.id);
    if (index !== -1) {
      const newCart = [...cart];
      newCart.splice(index, 1);
      setCart(newCart);
    }
  };

  useEffect(() => {
    if (cart.length === 0) return;
    setCartBump(true);
    const timer = setTimeout(() => {
      setCartBump(false);
    }, 500);
    return () => clearTimeout(timer);
  }, [cart.length]);

  const cartTotal = cart.reduce((total, item) => total + item.price, 0);

  return (
    <div className="min-h-screen bg-gray-50">
      {cartLimit && (
        <div className="fixed top-4 left-1/2 transform -translate-x-1/2 bg-red-500 text-white px-4 py-2 rounded-lg shadow">
          Cart limit reached. You can only add up to 5 items.
        </div>
      )}
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
                  value={searchTerm}
                  onChange={handleSearch}
                  className="w-64 pl-10 pr-4 py-2 border border-gray-300 rounded-lg"
                  placeholder="Search products..."
                />
                <Search className="absolute left-3 top-2.5 h-5 w-5 text-gray-400" />
              </div>
              <button className="p-2 hover:bg-gray-100 rounded-full">
                <User className="h-6 w-6" />
              </button>
              <button className="p-2 hover:bg-gray-100 rounded-full relative">
                <ShoppingCart className="h-6 w-6" />
                {cart.length > 0 && (
                  <span
                    className={`absolute -top-1 -right-1 bg-blue-600 text-white text-xs rounded-full h-5 w-5 flex items-center justify-center transition-transform duration-400 ${
                      cartBump ? 'animate-bounce' : ''
                    }`}
                  >
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
            <ProductList products={products} onAddToCart={addToCart} />
          </div>
          <div>
            <Cart
              items={cart}
              total={cartTotal}
              onRemoveFromCart={removeFromCart}
              OnAddExistingItem={addExistingItem}
              onRemoveExistingItem={removeExistingItem}
            />
          </div>
        </div>
      </main>
    </div>
  );
}

export default ApplicationShell;
