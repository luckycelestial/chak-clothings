'use client';

import { useEffect, useState, Suspense } from "react";
import Link from "next/link";
import { useSearchParams } from "next/navigation";

const products = [
  {
    id: 1,
    name: "Classic Black T-Shirt",
    category: "T-Shirts",
    price: "₹1,299",
    image: "/tshirt.png",
    isPremium: true
  },
  {
    id: 2,
    name: "Royal White Shirt",
    category: "Shirts",
    price: "₹2,499",
    image: "/shirt.png",
    isPremium: true
  },
  {
    id: 3,
    name: "Olive Cotton Chinos",
    category: "Pants",
    price: "₹3,299",
    image: "/pants.png",
    isPremium: false
  },
  {
    id: 4,
    name: "Premium Navy T-Shirt",
    category: "T-Shirts",
    price: "₹1,499",
    image: "/tshirt.png",
    isPremium: false
  },
  {
    id: 5,
    name: "Slim Fit Cotton Pants",
    category: "Pants",
    price: "₹2,899",
    image: "/pants.png",
    isPremium: false
  },
  {
    id: 6,
    name: "Oxford Formal Shirt",
    category: "Shirts",
    price: "₹2,199",
    image: "/shirt.png",
    isPremium: false
  }
];

function ProductsContent() {
  const [isMobile, setIsMobile] = useState(false);
  const searchParams = useSearchParams();
  const searchQuery = searchParams.get('q')?.toLowerCase() || "";

  useEffect(() => {
    const checkMobile = () => setIsMobile(window.innerWidth < 768);
    checkMobile();
    window.addEventListener('resize', checkMobile);
    return () => window.removeEventListener('resize', checkMobile);
  }, []);

  const filteredProducts = products.filter(product => 
    product.name.toLowerCase().includes(searchQuery) || 
    product.category.toLowerCase().includes(searchQuery)
  );

  return (
    <div className="container animate-fade-in" style={{ paddingTop: '48px', paddingBottom: '160px' }}>
      <div style={{ 
        marginBottom: isMobile ? '32px' : '48px', 
        display: 'flex', 
        flexDirection: isMobile ? 'column' : 'row', 
        alignItems: isMobile ? 'flex-start' : 'flex-end', 
        justifyContent: 'space-between', 
        gap: '24px' 
      }}>
        <div>
          <span style={{ color: 'var(--gold-luxury)', fontSize: '10px', fontWeight: 700, textTransform: 'uppercase', letterSpacing: '0.3em', marginBottom: '8px', display: 'block' }}>Autumn / Winter 24</span>
          <h2 className="text-h2" style={{ fontSize: isMobile ? '24px' : '36px' }}>
            {searchQuery ? `Results for "${searchQuery}"` : "The Collection"}
          </h2>
        </div>
        <div style={{ display: 'flex', alignItems: 'center', gap: '16px', width: isMobile ? '100%' : 'auto', justifyContent: 'space-between' }}>
          <button style={{ 
            display: 'flex', 
            alignItems: 'center', 
            gap: '8px', 
            border: '1px solid var(--border-light)', 
            padding: '8px 16px', 
            borderRadius: '99px', 
            background: 'white',
            fontSize: '12px',
            fontWeight: 700,
            textTransform: 'uppercase',
            letterSpacing: '0.1em',
            cursor: 'pointer'
          }}>
            <span className="material-symbols-outlined" style={{ fontSize: '18px' }}>tune</span>
            <span>Refine</span>
          </button>
          <p className="text-body-sm" style={{ color: 'var(--on-surface-variant)', fontWeight: 500 }}>{filteredProducts.length} Items</p>
        </div>
      </div>

      {filteredProducts.length === 0 ? (
        <div style={{ textAlign: 'center', padding: '80px 0' }}>
          <p className="text-h3" style={{ color: 'var(--medium-grey)' }}>No items found matching your search.</p>
          <Link href="/products" style={{ color: 'var(--action-blue)', marginTop: '16px', display: 'inline-block' }}>View all products</Link>
        </div>
      ) : (
        <div style={{ 
          display: 'grid', 
          gridTemplateColumns: isMobile ? 'repeat(2, 1fr)' : 'repeat(3, 1fr)', 
          gap: isMobile ? '16px' : '32px' 
        }}>
          {filteredProducts.map((product) => (
          <Link href={`/products/${product.id}`} key={product.id} style={{ textDecoration: 'none', color: 'inherit' }}>
            <div className="group" style={{ cursor: 'pointer' }}>
              <div style={{ 
                position: 'relative', 
                aspectRatio: '3/4', 
                background: 'var(--surface-container-low)', 
                marginBottom: '12px', 
                borderRadius: '8px', 
                overflow: 'hidden',
                border: product.isPremium ? '1px solid var(--gold-luxury)' : '1px solid var(--border-light)',
              }}>
                <img 
                  src={product.image} 
                  alt={product.name} 
                  style={{ 
                    width: '100%', 
                    height: '100%', 
                    objectFit: 'cover', 
                    transition: 'transform 0.8s cubic-bezier(0.4, 0, 0.2, 1)'
                  }}
                />
                {product.isPremium && (
                  <div style={{ position: 'absolute', top: '10px', left: '10px' }}>
                    <span style={{ 
                      background: 'var(--gold-luxury)', 
                      color: 'var(--charcoal-black)', 
                      fontSize: '8px', 
                      fontWeight: 800, 
                      padding: '3px 8px', 
                      borderRadius: '2px', 
                      textTransform: 'uppercase',
                      letterSpacing: '0.1em'
                    }}>Premium</span>
                  </div>
                )}
              </div>
              <div style={{ display: 'flex', flexDirection: 'column', gap: '2px' }}>
                <p className="text-caption" style={{ color: 'var(--medium-grey)', textTransform: 'uppercase', letterSpacing: '0.1em', fontSize: '10px', fontWeight: 600 }}>{product.category}</p>
                <h3 className="text-body-reg" style={{ fontWeight: 600, fontSize: isMobile ? '13px' : '16px', lineHeight: 1.2 }}>{product.name}</h3>
                <p className="text-body-reg" style={{ color: 'var(--charcoal-black)', fontWeight: 700, fontSize: isMobile ? '13px' : '16px', marginTop: '4px' }}>{product.price}</p>
              </div>
            </div>
          </Link>
        ))}
      </div>
      )}
    </div>
  );
}

export default function ProductsPage() {
  return (
    <Suspense fallback={
      <div className="container" style={{ paddingTop: '72px', textAlign: 'center' }}>
        <p className="text-body-reg">Loading collection...</p>
      </div>
    }>
      <ProductsContent />
    </Suspense>
  );
}
