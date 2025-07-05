import { useCart } from '../context/CartContext';
import { useNavigate } from 'react-router-dom';

export default function CartPage() {
  const { cartItems, increaseQuantity, decreaseQuantity, removeFromCart } = useCart();
  const navigate = useNavigate();

  const totalItems = cartItems.reduce((sum, item) => sum + item.quantity, 0);
  const totalCost = cartItems.reduce((sum, item) => sum + item.quantity * item.price, 0);

  if (cartItems.length === 0) {
    return (
      <div style={{ padding: '2rem', textAlign: 'center' }}>
        <h2>Your cart is empty.</h2>
        <button onClick={() => navigate('/products')}>Continue Shopping</button>
      </div>
    );
  }

  return (
    <div style={{ padding: '2rem', maxWidth: '900px', margin: '0 auto' }}>
      <h2>Shopping Cart</h2>
      <p>Total Items: {totalItems}</p>
      <p>Total Cost: ${totalCost.toFixed(2)}</p>

      {cartItems.map(item => (
        <div
          key={item.id}
          style={{
            display: 'flex',
            alignItems: 'center',
            borderBottom: '1px solid #ccc',
            padding: '1rem 0',
          }}
        >
          <img
            src={item.image}
            alt={item.name}
            style={{ width: '80px', height: '80px', objectFit: 'cover', borderRadius: '6px' }}
          />
          <div style={{ flex: 1, marginLeft: '1rem' }}>
            <h4>{item.name}</h4>
            <p>Unit Price: ${item.price.toFixed(2)}</p>
            <p>Total: ${(item.price * item.quantity).toFixed(2)}</p>
          </div>
          <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
            <button onClick={() => decreaseQuantity(item.id)}>-</button>
            <span>{item.quantity}</span>
            <button onClick={() => increaseQuantity(item.id)}>+</button>
            <button
              onClick={() => removeFromCart(item.id)}
              style={{ marginLeft: '1rem', color: 'red', cursor: 'pointer' }}
            >
              Delete
            </button>
          </div>
        </div>
      ))}

      <div style={{ marginTop: '2rem' }}>
        <button onClick={() => navigate('/products')} style={{ marginRight: '1rem' }}>
          Continue Shopping
        </button>
        <button
          onClick={() => alert('Checkout functionality coming soon!')}
          style={{ backgroundColor: '#4CAF50', color: 'white', padding: '0.5rem 1rem' }}
        >
          Checkout
        </button>
      </div>
    </div>
  );
}
