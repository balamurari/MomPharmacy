import React from 'react';
import { ShoppingCart } from 'lucide-react';

function CartButton() {
  return (
    <button className="bg-teal-600 text-white px-4 py-2 rounded-lg flex items-center gap-2 hover:bg-teal-700">
      <ShoppingCart size={20} />
      <span>Cart</span>
    </button>
  );
}

export default CartButton;