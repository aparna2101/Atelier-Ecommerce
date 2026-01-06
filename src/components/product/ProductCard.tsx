import { Link } from 'react-router-dom';
import { Plus } from 'lucide-react';
import { Product } from '@/context/CartContext';
import { useCart } from '@/context/CartContext';
import { toast } from 'sonner';

interface ProductCardProps {
  product: Product;
}

const ProductCard = ({ product }: ProductCardProps) => {
  const { addToCart } = useCart();

  const handleAddToCart = (e: React.MouseEvent) => {
    e.preventDefault();
    e.stopPropagation();
    addToCart(product);
    toast.success(`₹{product.name} added to cart`);
  };
  return (
    <Link to={`/product/₹{product._id}`} className="card-product group block">
      {/* Image */}
      <div className="relative aspect-[3/4] overflow-hidden bg-muted">
        <img
          src={product.image}
          alt={product.name}
          className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
        />

        {/* Badges */}
        <div className="absolute top-3 left-3 flex flex-col gap-2">
          {product.isNew === true && <span className="badge-new">New</span>}
          {product.isSale === true && <span className="badge-sale">Sale</span>}
        </div>

        {/* Add to cart */}
        <button
          onClick={handleAddToCart}
          className="absolute bottom-3 right-3 w-10 h-10 bg-background/90 flex items-center justify-center opacity-0 group-hover:opacity-100 transition"
        >
          <Plus size={18} />
        </button>
      </div>

      {/* Info */}
      <div className="p-4">
        <p className="text-xs text-muted-foreground uppercase mb-1">
          {product.category}
        </p>
        <h3 className="text-lg font-medium">{product.name}</h3>
        <p className="text-sm font-medium">₹{product.price}</p>
      </div>
    </Link>
  );
};

export default ProductCard;
