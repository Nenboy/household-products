import ProductCard from './ProductCard'; // Adjust if ProductCard uses named export

export default function CategorySection({ title, products, onAddToCart }) {
  return (
    <div className="category-section">
      <h2 className="category-title">{title}</h2>
      <div className="products-grid">
        {products.map((product) => (
          <ProductCard
            key={product.id}
            product={product}
            onAddToCart={onAddToCart}
          />
        ))}
      </div>
    </div>
  );
}
