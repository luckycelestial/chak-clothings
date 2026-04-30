'use client';

import { useEffect, useState } from "react";
import Link from "next/link";

const products = [
  {
    id: 1,
    name: "Premium Cotton Crew Tee",
    category: "Heritage Essentials",
    price: "₹1,499",
    image: "/tshirt.png",
    details: [
      "/tshirt.png",
      "/tshirt.png"
    ],
    description: "Our signature crew neck tee is crafted from premium 100% long-staple cotton sourced directly from Tiruppur, Tamil Nadu. Designed for the Indian climate, it offers superior breathability and a structured fit that retains its shape wash after wash."
  }
];

const COLORS = [
  { name: 'Charcoal Black', hex: '#1A1A1A' },
  { name: 'Ivory White', hex: '#F8F7F4' },
  { name: 'Royal Blue', hex: '#1E3A8A' },
  { name: 'Deep Maroon', hex: '#800000' },
  { name: 'Forest Green', hex: '#228B22' },
  { name: 'Mustard Yellow', hex: '#FFDB58' },
  { name: 'Terracotta', hex: '#E2725B' },
  { name: 'Slate Grey', hex: '#708090' },
  { name: 'Olive Green', hex: '#556B2F' },
  { name: 'Midnight Navy', hex: '#191970' },
  { name: 'Sandstone', hex: '#C2B280' },
  { name: 'Rust Orange', hex: '#B7410E' }
];

const SIZES = ['XS', 'S', 'M', 'L', 'XL', 'XXL'];

export default function ProductDetail({ params }: { params: { id: string } }) {
  const [isMobile, setIsMobile] = useState(false);
  const [selectedSize, setSelectedSize] = useState('M');
  const [selectedColor, setSelectedColor] = useState(COLORS[0]);
  const product = products[0]; // Fallback for demo

  useEffect(() => {
    const checkMobile = () => setIsMobile(window.innerWidth < 1024);
    checkMobile();
    window.addEventListener('resize', checkMobile);
    return () => window.removeEventListener('resize', checkMobile);
  }, []);

  return (
    <div className="container animate-fade-in" style={{ paddingTop: '80px', paddingBottom: '120px' }}>
      <div style={{ 
        display: 'grid', 
        gridTemplateColumns: isMobile ? '1fr' : 'repeat(12, 1fr)', 
        gap: isMobile ? '32px' : '64px' 
      }}>
        
        {/* Left: Imagery */}
        <div style={{ 
          gridColumn: isMobile ? 'span 1' : 'span 7', 
          display: 'flex', 
          flexDirection: 'column', 
          gap: isMobile ? '16px' : '32px' 
        }}>
          <div style={{ 
            aspectRatio: '3/4', 
            overflow: 'hidden', 
            borderRadius: '12px', 
            background: 'white', 
            border: '1px solid var(--border-light)', 
            boxShadow: '0 10px 40px -10px rgba(0, 0, 0, 0.08)'
          }}>
            <img 
              src={product.image} 
              alt={product.name} 
              style={{ width: '100%', height: '100%', objectFit: 'cover' }}
            />
          </div>
          <div style={{ 
            display: 'grid', 
            gridTemplateColumns: '1fr 1fr', 
            gap: isMobile ? '16px' : '32px' 
          }}>
            {product.details.map((img, i) => (
              <div key={i} style={{ aspectRatio: '1/1', overflow: 'hidden', borderRadius: '12px', background: 'white', border: '1px solid var(--border-light)' }}>
                <img src={img} alt={`Detail ${i}`} style={{ width: '100%', height: '100%', objectFit: 'cover' }} />
              </div>
            ))}
          </div>
        </div>

        {/* Right: Details */}
        <div style={{ 
          gridColumn: isMobile ? 'span 1' : 'span 5', 
          display: 'flex', 
          flexDirection: 'column', 
          gap: isMobile ? '32px' : '40px' 
        }}>
          <div style={{ display: 'flex', flexDirection: 'column', gap: '16px' }}>
            <span className="text-caption" style={{ color: 'var(--warm-bronze)', textTransform: 'uppercase', letterSpacing: '0.2em', fontWeight: 600 }}>{product.category}</span>
            <h1 className="text-h1" style={{ fontSize: isMobile ? '28px' : '40px' }}>{product.name}</h1>
            <div style={{ display: 'flex', alignItems: 'center', gap: '16px' }}>
              <p className="text-h3" style={{ color: 'var(--action-blue)' }}>{product.price}</p>
              <span style={{ background: 'var(--surface-container-high)', padding: '4px 12px', borderRadius: '99px', fontSize: '10px', fontWeight: 600, textTransform: 'uppercase', letterSpacing: '0.1em' }}>In Stock</span>
            </div>
          </div>

          <div style={{ display: 'flex', flexDirection: 'column', gap: '32px' }}>
            {/* Color Selection */}
            <div style={{ display: 'flex', flexDirection: 'column', gap: '16px' }}>
              <span className="text-label" style={{ fontWeight: 600 }}>Color: <span style={{ fontWeight: 400, color: 'var(--on-surface-variant)' }}>{selectedColor.name}</span></span>
              <div style={{ display: 'grid', gridTemplateColumns: 'repeat(6, 1fr)', gap: '12px' }}>
                {COLORS.map(color => (
                  <button 
                    key={color.name}
                    onClick={() => setSelectedColor(color)}
                    style={{ 
                      width: '100%',
                      aspectRatio: '1',
                      borderRadius: '50%',
                      background: color.hex,
                      border: selectedColor.name === color.name ? '2px solid var(--action-blue)' : '1px solid rgba(0,0,0,0.1)',
                      padding: '2px',
                      cursor: 'pointer',
                      transition: 'transform 0.2s',
                      transform: selectedColor.name === color.name ? 'scale(1.1)' : 'scale(1)'
                    }}
                    title={color.name}
                  />
                ))}
              </div>
            </div>

            {/* Size Selection */}
            <div style={{ display: 'flex', flexDirection: 'column', gap: '16px' }}>
              <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
                <span className="text-label" style={{ fontWeight: 600 }}>Select Size</span>
                <Link href="#" className="text-caption" style={{ color: 'var(--action-blue)', textDecoration: 'underline' }}>Size Guide</Link>
              </div>
              <div style={{ display: 'grid', gridTemplateColumns: 'repeat(6, 1fr)', gap: '12px' }}>
                {SIZES.map(size => (
                  <button 
                    key={size} 
                    onClick={() => setSelectedSize(size)}
                    style={{ 
                      padding: '12px 0', 
                      border: size === selectedSize ? '2px solid var(--action-blue)' : '1px solid var(--border-light)', 
                      borderRadius: '8px', 
                      background: size === selectedSize ? 'var(--action-blue)' : 'transparent',
                      color: size === selectedSize ? 'white' : 'var(--on-surface-variant)',
                      fontWeight: 600,
                      cursor: 'pointer',
                      fontSize: '14px'
                    }}
                  >{size}</button>
                ))}
              </div>
            </div>

            <div style={{ display: 'flex', flexDirection: 'column', gap: '16px' }}>
              <div style={{ display: 'flex', gap: '16px' }}>
                <button className="btn-primary" style={{ flex: 1, padding: isMobile ? '16px' : '20px', display: 'flex', alignItems: 'center', justifyContent: 'center', gap: '8px' }}>
                  <span className="material-symbols-outlined">shopping_bag</span>
                  Add to Bag
                </button>
                <button style={{ 
                  width: isMobile ? '56px' : '64px', 
                  height: isMobile ? '56px' : '64px', 
                  border: '1px solid var(--border-light)', 
                  borderRadius: '8px', 
                  display: 'flex', 
                  alignItems: 'center', 
                  justifyContent: 'center',
                  background: 'transparent',
                  cursor: 'pointer'
                }}>
                  <span className="material-symbols-outlined">favorite</span>
                </button>
              </div>
              <button className="btn-gold" style={{ width: '100%', padding: isMobile ? '16px' : '20px', textTransform: 'uppercase', letterSpacing: '0.1em', display: 'flex', alignItems: 'center', justifyContent: 'center', gap: '8px' }}>
                <span className="material-symbols-outlined">magic_button</span>
                Custom Fit Tailoring
              </button>
            </div>
          </div>
        </div>
      </div>

      {/* Product Information - Moved to bottom */}
      <div style={{ 
        marginTop: isMobile ? '48px' : '80px', 
        paddingTop: '48px', 
        borderTop: '1px solid var(--border-light)',
        maxWidth: '800px'
      }}>
        <div style={{ display: 'flex', flexDirection: 'column', gap: '32px' }}>
          <div>
            <h3 className="text-h3" style={{ marginBottom: '16px' }}>Product Description</h3>
            <p className="text-body-lg" style={{ color: 'var(--on-surface-variant)', lineHeight: 1.8, fontSize: isMobile ? '16px' : '18px' }}>{product.description}</p>
          </div>
          
          <div style={{ display: 'grid', gridTemplateColumns: isMobile ? '1fr' : '1fr 1fr', gap: '24px' }}>
            <div style={{ padding: '24px', background: 'var(--ivory-white)', border: '1px solid var(--border-light)', borderRadius: '12px', display: 'flex', alignItems: 'center', gap: '16px' }}>
              <span className="material-symbols-outlined" style={{ color: 'var(--warm-bronze)', fontSize: '32px' }}>architecture</span>
              <div>
                <p className="text-caption" style={{ fontWeight: 600, color: 'var(--dark-grey)', textTransform: 'uppercase', letterSpacing: '0.1em' }}>Fit</p>
                <p className="text-body-lg" style={{ fontWeight: 500 }}>Modern Classic Fit</p>
              </div>
            </div>
            <div style={{ padding: '24px', background: 'var(--ivory-white)', border: '1px solid var(--border-light)', borderRadius: '12px', display: 'flex', alignItems: 'center', gap: '16px' }}>
              <span className="material-symbols-outlined" style={{ color: 'var(--warm-bronze)', fontSize: '32px' }}>eco</span>
              <div>
                <p className="text-caption" style={{ fontWeight: 600, color: 'var(--dark-grey)', textTransform: 'uppercase', letterSpacing: '0.1em' }}>Origin</p>
                <p className="text-body-lg" style={{ fontWeight: 500 }}>100% Tiruppur Cotton</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
