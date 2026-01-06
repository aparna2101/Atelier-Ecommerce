import { useState, useMemo, useEffect } from 'react';
import { Filter } from 'lucide-react';
import Layout from '@/components/layout/Layout';
import ProductCard from '@/components/product/ProductCard';

const Products = () => {
  const [products, setProducts] = useState<any[]>([]);
  const [loading, setLoading] = useState(true);

  const [selectedCategory, setSelectedCategory] = useState('All');
  const [sortBy, setSortBy] = useState('featured');
  const [isFilterOpen, setIsFilterOpen] = useState(false);

  /* =========================
     FETCH PRODUCTS (BACKEND)
  ========================== */
  useEffect(() => {
    fetch('https://atelier-ecommerce.onrender.com/api/products')
      .then((res) => res.json())
      .then((data) => {
        setProducts(data);
        setLoading(false);
      })
      .catch((err) => {
        console.error('Error fetching products:', err);
        setLoading(false);
      });
  }, []);

  /* =========================
     CREATE CATEGORIES (DYNAMIC)
  ========================== */
  const categories = useMemo(() => {
    const unique = new Set(
      products
        .map((p) => p.category)
        .filter(Boolean)
        .map((c) => c.toString())
    );
    return ['All', ...Array.from(unique)];
  }, [products]);

  /* =========================
     FILTER + SORT
  ========================== */
  const filteredProducts = useMemo(() => {
    let filtered = [...products];

    if (selectedCategory !== 'All') {
      filtered = filtered.filter(
        (p) =>
          p.category &&
          p.category.toLowerCase() === selectedCategory.toLowerCase()
      );
    }

    switch (sortBy) {
      case 'price-low':
        filtered.sort((a, b) => a.price - b.price);
        break;
      case 'price-high':
        filtered.sort((a, b) => b.price - a.price);
        break;
      case 'newest':
        filtered.sort(
          (a, b) =>
            new Date(b.createdAt).getTime() -
            new Date(a.createdAt).getTime()
        );
        break;
      default:
        break;
    }

    return filtered;
  }, [products, selectedCategory, sortBy]);

  /* =========================
     LOADING STATE
  ========================== */
  if (loading) {
    return (
      <Layout>
        <div className="container-main py-20 text-center">
          <p className="text-muted-foreground">Loading products…</p>
        </div>
      </Layout>
    );
  }

  return (
    <Layout>
      {/* HEADER */}
      <section className="section-padding pb-8">
        <div className="container-main text-center">
          <h1 className="text-display mb-4">Shop All</h1>
          <p className="text-muted-foreground max-w-lg mx-auto">
            Explore our complete collection of thoughtfully designed pieces
          </p>
        </div>
      </section>

      {/* FILTERS */}
      <section className="border-y border-border">
        <div className="container-main">
          <div className="flex items-center justify-between py-4">
            {/* Mobile Filter */}
            <button
              onClick={() => setIsFilterOpen(!isFilterOpen)}
              className="btn-ghost md:hidden flex items-center gap-2"
            >
              <Filter size={16} />
              Filter
            </button>

            {/* Categories */}
            <div className="hidden md:flex items-center gap-6">
              {categories.map((category) => (
                <button
                  key={category}
                  onClick={() => setSelectedCategory(category)}
                  className={`text-sm font-medium uppercase tracking-wide ${
                    selectedCategory === category
                      ? 'text-foreground'
                      : 'text-muted-foreground hover:text-foreground'
                  }`}
                >
                  {category}
                </button>
              ))}
            </div>

            {/* Sort */}
            <select
              value={sortBy}
              onChange={(e) => setSortBy(e.target.value)}
              className="text-sm font-medium bg-transparent"
            >
              <option value="featured">Featured</option>
              <option value="newest">Newest</option>
              <option value="price-low">Price: Low to High</option>
              <option value="price-high">Price: High to Low</option>
            </select>
          </div>

          {/* Mobile Categories */}
          {isFilterOpen && (
            <div className="md:hidden py-4 flex flex-wrap gap-2">
              {categories.map((category) => (
                <button
                  key={category}
                  onClick={() => {
                    setSelectedCategory(category);
                    setIsFilterOpen(false);
                  }}
                  className={`px-4 py-2 text-sm ${
                    selectedCategory === category
                      ? 'bg-primary text-primary-foreground'
                      : 'bg-secondary'
                  }`}
                >
                  {category}
                </button>
              ))}
            </div>
          )}
        </div>
      </section>

      {/* PRODUCTS GRID */}
      <section className="section-padding pt-8">
        <div className="container-main">
          <p className="text-sm text-muted-foreground mb-8">
            {filteredProducts.length}{' '}
            {filteredProducts.length === 1 ? 'product' : 'products'}
          </p>

          {filteredProducts.length > 0 ? (
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
              {filteredProducts.map((product) => (
                <ProductCard key={product._id} product={product} />
              ))}
            </div>
          ) : (
            <p className="text-center text-muted-foreground">
              No products found.
            </p>
          )}
        </div>
      </section>
    </Layout>
  );
};

export default Products;
