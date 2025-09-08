import { Trash2, Plus, Minus } from 'lucide-react';

import { Product } from '../../types/Product';

type CartProps = {
  items: Product[];
  total: number;
  onRemoveFromCart: (product: Product) => void;
};

type CartItem = {
  quantity: number;
} & Product;

function Cart({ items, total, onRemoveFromCart }: CartProps) {
  // Group items by id and count quantities
  const cartItems = items.reduce<CartItem[]>((acc, item) => {
    const existingItem = acc.find((i) => i.id === item.id);
    if (existingItem) {
      existingItem.quantity += 1;
      return acc;
    }
    return [...acc, { ...item, quantity: 1 }];
  }, []);

  return (
    <div className="bg-white rounded-lg shadow p-6">
      <h2 className="text-lg font-medium text-gray-900">Shopping Cart</h2>
      <div className="mt-6 space-y-4">
        {cartItems.map((item) => (
          <div key={item.id} className="flex items-center justify-between py-4 border-b">
            <div className="flex items-center">
              <img src={item.image} alt={item.title} className="h-16 w-16 object-contain" />
              <div className="ml-4">
                <h3 className="text-sm font-medium text-gray-900">{item.title}</h3>
                <p className="mt-1 text-sm text-gray-500">${item.price}</p>
                <div className="mt-2 flex items-center gap-2">
                  <button className="p-1 hover:bg-gray-100 rounded">
                    <Minus className="h-4 w-4" />
                  </button>
                  <span className="text-sm font-medium">{item.quantity}</span>
                  <button className="p-1 hover:bg-gray-100 rounded">
                    <Plus className="h-4 w-4" />
                  </button>
                </div>
              </div>
            </div>
            <button className="text-red-600 hover:text-red-800" onClick={() => onRemoveFromCart(item)}>
              <Trash2 className="h-5 w-5" />
            </button>
          </div>
        ))}
      </div>
      <div className="mt-6">
        <div className="flex items-center justify-between">
          <p className="text-sm font-medium text-gray-900">Total</p>
          <p className="text-lg font-medium text-gray-900">${total.toFixed(2)}</p>
        </div>
        <button className="mt-6 w-full bg-blue-600 text-white px-4 py-2 rounded-lg hover:bg-blue-700">Checkout</button>
      </div>
    </div>
  );
}

export default Cart;
