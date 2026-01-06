import { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight } from 'lucide-react';
import Layout from '@/components/layout/Layout';
import ProductCard from '@/components/product/ProductCard';

const Home = () => {
  const [products, setProducts] = useState<any[]>([]);
  const [loading, setLoading] = useState(true);

  // 🔹 Fetch real products from backend
  useEffect(() => {
    fetch('http://localhost:/api/products')
      .then(res => res.json())
      .then(data => {
        setProducts(data);
        setLoading(false);
      })
      .catch(err => {
        console.error('Error fetching products:', err);
        setLoading(false);
      });
  }, []);

  const featuredProducts = products.slice(0, 4);
  const newArrivals = products.slice(0, 3);

  return (
    <Layout>
      {/* Hero Section */}
      <section className="relative min-h-[90vh] flex items-center">
        <div className="absolute inset-0 bg-gradient-to-r from-background via-background/95 to-background/50 z-10" />
        <div
          className="absolute inset-0 bg-cover bg-center"
          style={{
            backgroundImage:
              'url(https://images.unsplash.com/photo-1441984904996-e0b6ba687e04?w=1920&q=80)',
          }}
        />
        <div className="container-main relative z-20">
          <div className="max-w-2xl">
            <h1 className="text-display mb-6">
              Timeless Elegance, Modern Craft
            </h1>
            <p className="text-muted-foreground mb-8">
              Discover our curated collection of essential pieces.
            </p>
            <Link to="/products" className="btn-primary">
              Shop Collection <ArrowRight size={16} className="ml-2" />
            </Link>
          </div>
        </div>
      </section>

      {/* Featured Products */}
      <section className="section-padding">
        <div className="container-main">
          <h2 className="text-heading mb-8">Featured Pieces</h2>

          {loading ? (
            <p className="text-center text-muted-foreground">
              Loading products...
            </p>
          ) : (
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
              {featuredProducts.map(product => (
                <ProductCard key={product._id} product={product} />
              ))}
            </div>
          )}
        </div>
      </section>

      {/* New Arrivals */}
      {!loading && newArrivals.length > 0 && (
        <section className="section-padding">
          <div className="container-main">
            <h2 className="text-heading mb-8">New Arrivals</h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
              {newArrivals.map(product => (
                <ProductCard key={product._id} product={product} />
              ))}
            </div>
          </div>
        </section>
      )}
    </Layout>
  );
};

export default Home;
