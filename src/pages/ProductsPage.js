import plants from '../data/plants';
import { useCart } from '../context/CartContext';

export default function ProductsPage() {
  const { addToCart } = useCart();

  const categories = [...new Set(plants.map(p => p.category))];

  return (
    <div style={{ padding: '2rem' }}>
      <h2>All Houseplants</h2>

      {categories.map(category => (
        <div key={category} style={{ marginBottom: '2rem' }}>
          <h3>{category}</h3>
          <div
            style={{
              display: 'grid',
              gridTemplateColumns: 'repeat(auto-fit, minmax(180px, 1fr))',
              gap: '1rem',
              maxWidth: '1000px',
              margin: '0 auto',
            }}
          >
            {plants
              .filter(plant => plant.category === category)
              .map(plant => (
                <div
                  key={plant.id}
                  style={{
                    border: '1px solid #ccc',
                    padding: '1rem',
                    boxSizing: 'border-box',
                    borderRadius: '8px',
                    boxShadow: '0 2px 6px rgba(0,0,0,0.1)',
                    display: 'flex',
                    flexDirection: 'column',
                    alignItems: 'center',
                    backgroundColor: '#fff',
                    maxWidth: '220px',
                    margin: '0 auto',
                  }}
                >
                  <img
                    src={plant.image}
                    alt={plant.name}
                    style={{ width: '100%', height: '150px', objectFit: 'cover', borderRadius: '6px' }}
                  />
                  <h4 style={{ margin: '0.5rem 0' }}>{plant.name}</h4>
                  <p style={{ margin: '0.25rem 0', color: '#555' }}>${plant.price.toFixed(2)}</p>
                  <button
                    onClick={() => addToCart(plant)}
                    style={{
                      marginTop: 'auto',
                      padding: '0.5rem 1rem',
                      backgroundColor: '#4CAF50',
                      color: 'white',
                      border: 'none',
                      borderRadius: '4px',
                      cursor: 'pointer',
                      fontWeight: 'bold',
                      transition: 'background-color 0.3s',
                    }}
                    onMouseEnter={e => (e.target.style.backgroundColor = '#45a049')}
                    onMouseLeave={e => (e.target.style.backgroundColor = '#4CAF50')}
                  >
                    Add to Cart
                  </button>
                </div>
              ))}
          </div>
        </div>
      ))}
    </div>
  );
}
