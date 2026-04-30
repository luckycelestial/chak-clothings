'use client';

import { useEffect, useState } from "react";
import Link from "next/link";

const products = [
  {
    id: 1,
    name: "The Signature Bespoke Wool Blazer",
    category: "Autumn Heritage Collection",
    price: "$1,240.00",
    image: "https://lh3.googleusercontent.com/aida-public/AB6AXuBwGoIq97hHvQH0Gy90L21K9ouGCx56cnf-1AuYv3d0NizI9Za1pJlckmpknw_MhXBAmsgAV6Fqy2Og7XfwX2VDoqTGhd5TgDrdBFny74a8oQgaAcW-hBmQS1iVMgpNz-3pBlWmKZpLnxqnHr4Gn-jOFmtnSgMAwckdipLbcnpkG6m0eVtFMswrZONtMlUiE92FRi93GuYZm0ooHavs9BURqo3mhXNoDSbq9VuLtTecjyEKixNXymxqD7V7Rug4guqabhyKTclEQmlh",
    details: [
      "https://lh3.googleusercontent.com/aida-public/AB6AXuBecC9b3AR_j5eqR--w5nIxWu4RW9EvC5idY4BgxmbWg9I2z6dvlk_VUoTKU_d5pcFtlPll6aGmZ3kEHWupm77OYbfLERtUHX12oRLTDT15Usc8yAn0AKyOAk-HfLgcMORx_SOAfG6ZihWCQwJu5LxEdxPGDGCz7rh271hhsraES8O-pjKwp0vgYmqpMyz6DnY5syCLllHdATWDx-1Mz9Z5YSWveyLLWQuNM8gnZ5xoo-4Rpr4jyRlHPrkKxbvWQFtfACcZ5Uk4VoN3",
      "https://lh3.googleusercontent.com/aida-public/AB6AXuCrsXp0siWaIwt9jVJXeU6hL7XAgEkOk4N4N3YNCg1NJ7cMJ2TffQqjTs80EQfG73_s8ercLCDj5O4u1yAaUd3j2wTGnXa5RXre_jMqrlB2WquRN_L50N1-qw7XVWiT-PtorYL9a9tBzQaRm_-mkn5uYkvyoE94aaZ3UCV4Bn3f9KK7HQWRxcaD4Y1cJWLCx9bscpk4iP9ycLkMc1FJwHWUQdiLnTNIj9BSAiW-y-QJ-BTHDwYP2E9N6oeCBSKtPwITkyXF_ze0ywyK"
    ],
    description: "A masterclass in artisanal tailoring. Crafted from super-fine 150s Merino wool, this blazer features a half-canvas construction that molds to your silhouette over time. Finished with genuine horn buttons and functional cuffs."
  }
];

export default function ProductDetail({ params }: { params: { id: string } }) {
  const [isMobile, setIsMobile] = useState(false);
  const product = products[0]; // Fallback for demo

  useEffect(() => {
    const checkMobile = () => setIsMobile(window.innerWidth < 1024);
    checkMobile();
    window.addEventListener('resize', checkMobile);
    return () => window.removeEventListener('resize', checkMobile);
  }, []);

  return (
    <div className="container animate-fade-in" style={{ paddingTop: '40px', paddingBottom: '120px' }}>
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
            background: 'var(--ivory-white)', 
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
              <div key={i} style={{ aspectRatio: '1/1', overflow: 'hidden', borderRadius: '12px', background: 'var(--ivory-white)', border: '1px solid var(--border-light)' }}>
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

          <div style={{ display: 'flex', flexDirection: 'column', gap: '24px' }}>
            <p className="text-body-lg" style={{ color: 'var(--on-surface-variant)', lineHeight: 1.6, fontSize: isMobile ? '16px' : '18px' }}>{product.description}</p>
            
            <div style={{ display: 'grid', gridTemplateColumns: isMobile ? '1fr' : '1fr 1fr', gap: '16px' }}>
              <div style={{ padding: '16px', background: 'var(--ivory-white)', border: '1px solid var(--border-light)', borderRadius: '8px', display: 'flex', alignItems: 'center', gap: '12px' }}>
                <span className="material-symbols-outlined" style={{ color: 'var(--warm-bronze)' }}>architecture</span>
                <div>
                  <p className="text-caption" style={{ fontWeight: 600, color: 'var(--dark-grey)' }}>Fit</p>
                  <p className="text-body-sm">Bespoke Slim</p>
                </div>
              </div>
              <div style={{ padding: '16px', background: 'var(--ivory-white)', border: '1px solid var(--border-light)', borderRadius: '8px', display: 'flex', alignItems: 'center', gap: '12px' }}>
                <span className="material-symbols-outlined" style={{ color: 'var(--warm-bronze)' }}>eco</span>
                <div>
                  <p className="text-caption" style={{ fontWeight: 600, color: 'var(--dark-grey)' }}>Origin</p>
                  <p className="text-body-sm">Italian Wool</p>
                </div>
              </div>
            </div>
          </div>

          <div style={{ display: 'flex', flexDirection: 'column', gap: '32px' }}>
            <div style={{ display: 'flex', flexDirection: 'column', gap: '16px' }}>
              <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
                <span className="text-label" style={{ fontWeight: 600 }}>Select Size</span>
                <Link href="#" className="text-caption" style={{ color: 'var(--action-blue)', textDecoration: 'underline' }}>Size Guide</Link>
              </div>
              <div style={{ display: 'grid', gridTemplateColumns: 'repeat(4, 1fr)', gap: '12px' }}>
                {['48', '50', '52', '54'].map(size => (
                  <button key={size} style={{ 
                    padding: '12px', 
                    border: size === '48' ? '2px solid var(--action-blue)' : '1px solid var(--border-light)', 
                    borderRadius: '8px', 
                    background: 'transparent',
                    color: size === '48' ? 'var(--action-blue)' : 'var(--on-surface-variant)',
                    fontWeight: 600,
                    cursor: 'pointer'
                  }}>{size}</button>
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
                <span className="material-symbols-outlined">star</span>
                Buy Premium Bespoke
              </button>
            </div>
          </div>
        </div>
      </div>

      {/* Member Section */}
      <section style={{ 
        marginTop: isMobile ? '64px' : '96px', 
        padding: isMobile ? '32px' : '64px', 
        background: 'linear-gradient(135deg, #1A1A1A 0%, #2D3436 100%)', 
        borderRadius: '12px', 
        border: '2px solid var(--gold-luxury)',
        boxShadow: '0 0 30px rgba(212, 175, 55, 0.2)',
        color: 'white',
        display: 'flex',
        flexDirection: isMobile ? 'column' : 'row',
        alignItems: isMobile ? 'flex-start' : 'center',
        justifyContent: 'space-between',
        gap: '32px'
      }}>
        <div style={{ display: 'flex', flexDirection: 'column', gap: '16px' }}>
          <h2 className="text-h2" style={{ color: 'var(--gold-luxury)', fontSize: isMobile ? '24px' : '32px' }}>Member Exclusive</h2>
          <p className="text-body-lg" style={{ color: 'var(--soft-grey)', maxWidth: '512px' }}>Unlock complimentary personalized tailoring and early access to limited edition heritage drops.</p>
        </div>
        <button className="btn-primary" style={{ background: 'white', color: 'var(--charcoal-black)', width: isMobile ? '100%' : 'auto' }}>Join The Atelier</button>
      </section>
    </div>
  );
}
