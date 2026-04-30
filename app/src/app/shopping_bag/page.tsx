'use client';

import Link from "next/link";
import { useEffect, useState } from "react";

const cartItems = [
  {
    id: 1,
    name: "Classic Black T-Shirt",
    details: "Size: M | Color: Black",
    price: "₹1,299",
    image: "/tshirt.png",
    quantity: 1
  },
  {
    id: 2,
    name: "Royal White Shirt",
    details: "Size: 42 | Color: White",
    price: "₹2,499",
    image: "/shirt.png",
    quantity: 1
  }
];

export default function ShoppingBag() {
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const checkMobile = () => setIsMobile(window.innerWidth < 768);
    checkMobile();
    window.addEventListener('resize', checkMobile);
    return () => window.removeEventListener('resize', checkMobile);
  }, []);

  return (
    <div className="container animate-fade-in" style={{ paddingTop: '48px' }}>
      <div style={{ marginBottom: isMobile ? '32px' : '48px' }}>
        <h1 className="text-h1" style={{ marginBottom: '8px' }}>Shopping Bag</h1>
        <p className="text-body-reg" style={{ color: 'var(--on-surface-variant)' }}>Review your premium selections from our heritage collection.</p>
      </div>

      <div style={{ 
        display: 'grid', 
        gridTemplateColumns: isMobile ? '1fr' : 'repeat(12, 1fr)', 
        gap: isMobile ? '32px' : '48px',
        alignItems: 'start'
      }}>
        
        {/* Cart Items */}
        <div style={{ 
          gridColumn: isMobile ? 'span 1' : 'span 8', 
          display: isMobile ? 'grid' : 'flex', 
          gridTemplateColumns: isMobile ? 'repeat(2, 1fr)' : 'none',
          flexDirection: isMobile ? 'row' : 'column', 
          gap: isMobile ? '16px' : '32px' 
        }}>
          {cartItems.map(item => (
            <div key={item.id} style={{ 
              display: 'flex', 
              flexDirection: 'column', 
              gap: '12px', 
              padding: '12px', 
              background: 'var(--ivory-white)', 
              border: '1px solid var(--border-light)', 
              borderRadius: '12px',
              position: 'relative'
            }} className="cart-item">
              <div style={{ 
                width: '100%', 
                aspectRatio: '1/1', 
                overflow: 'hidden', 
                borderRadius: '8px' 
              }}>
                <img src={item.image} alt={item.name} style={{ width: '100%', height: '100%', objectFit: 'cover' }} />
              </div>
              <div style={{ display: 'flex', flexDirection: 'column', gap: '8px', flexGrow: 1 }}>
                <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start' }}>
                  <h3 className="text-body-sm" style={{ fontWeight: 700, color: 'var(--primary)', fontSize: '13px', lineHeight: 1.2 }}>{item.name}</h3>
                  <button style={{ border: 'none', background: 'transparent', cursor: 'pointer', color: 'var(--on-surface-variant)', padding: 0 }}>
                    <span className="material-symbols-outlined" style={{ fontSize: '18px' }}>close</span>
                  </button>
                </div>
                <p style={{ fontSize: '10px', color: 'var(--on-surface-variant)' }}>{item.details}</p>
                <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginTop: 'auto' }}>
                  <span className="text-body-sm" style={{ fontWeight: 700, color: 'var(--brand-gold)' }}>{item.price}</span>
                  <div style={{ display: 'flex', alignItems: 'center', gap: '8px', background: 'white', borderRadius: '99px', padding: '2px 8px', border: '1px solid var(--border-light)' }}>
                    <span style={{ fontSize: '12px', fontWeight: 600 }}>{item.quantity}</span>
                  </div>
                </div>
              </div>
            </div>
          ))}

          {/* Complete the Look */}
          <div style={{ marginTop: '64px', display: isMobile ? 'none' : 'block' }}>
            <h2 className="text-h3" style={{ marginBottom: '32px' }}>Complete the Look</h2>
            <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '32px' }}>
              <div style={{ cursor: 'pointer' }}>
                <div style={{ aspectRatio: '3/4', overflow: 'hidden', borderRadius: '8px', background: 'var(--surface-container)', marginBottom: '16px', position: 'relative' }}>
                  <img src="/pants.png" alt="Cotton Chinos" style={{ width: '100%', height: '100%', objectFit: 'cover' }} />
                </div>
                <p className="text-label">Cotton Chinos</p>
                <p className="text-body-sm" style={{ color: 'var(--on-surface-variant)' }}>₹3,299</p>
              </div>
              <div style={{ cursor: 'pointer', marginTop: '48px' }}>
                <div style={{ aspectRatio: '3/4', overflow: 'hidden', borderRadius: '8px', background: 'var(--surface-container)', marginBottom: '16px', position: 'relative' }}>
                  <img src="/tshirt.png" alt="Premium Navy T-Shirt" style={{ width: '100%', height: '100%', objectFit: 'cover' }} />
                </div>
                <p className="text-label">Premium Navy T-Shirt</p>
                <p className="text-body-sm" style={{ color: 'var(--on-surface-variant)' }}>₹1,499</p>
              </div>
            </div>
          </div>
        </div>

        {/* Order Summary */}
        <div style={{ gridColumn: isMobile ? 'span 1' : 'span 4' }}>
          <div style={{ 
            position: isMobile ? 'static' : 'sticky', 
            top: '120px', 
            padding: isMobile ? '24px' : '32px', 
            background: 'var(--charcoal-black)', 
            color: 'white', 
            borderRadius: '16px', 
            border: '2px solid var(--gold-luxury)',
            boxShadow: '0 0 30px rgba(212, 175, 55, 0.1)'
          }}>
            <h3 className="text-h3" style={{ color: 'var(--gold-luxury)', marginBottom: '24px' }}>Order Summary</h3>
            <div style={{ display: 'flex', flexDirection: 'column', gap: '16px', marginBottom: '32px' }}>
              <div style={{ display: 'flex', justifyContent: 'space-between' }}>
                <span style={{ color: '#A0A0A0' }}>Subtotal</span>
                <span>₹3,798</span>
              </div>
              <div style={{ display: 'flex', justifyContent: 'space-between' }}>
                <span style={{ color: '#A0A0A0' }}>Shipping</span>
                <span style={{ color: 'var(--gold-luxury)', textTransform: 'uppercase', letterSpacing: '0.1em', fontSize: '10px', fontWeight: 700 }}>Complimentary</span>
              </div>
              <div style={{ display: 'flex', justifyContent: 'space-between' }}>
                <span style={{ color: '#A0A0A0' }}>GST (12%)</span>
                <span>₹455</span>
              </div>
              <div style={{ paddingTop: '16px', marginTop: '16px', borderTop: '1px solid rgba(255,255,255,0.1)', display: 'flex', justifyContent: 'space-between', alignItems: 'flex-end' }}>
                <span className="text-h4">Total</span>
                <span className="text-h2" style={{ color: 'var(--gold-luxury)' }}>₹4,253</span>
              </div>
            </div>
            <div style={{ display: 'flex', flexDirection: 'column', gap: '16px' }}>
              <button className="btn-primary" style={{ width: '100%', padding: '16px', textTransform: 'uppercase', letterSpacing: '0.1em' }}>Secure Checkout</button>
              <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', gap: '8px' }}>
                <span className="material-symbols-outlined" style={{ color: 'var(--gold-luxury)', fontSize: '18px' }}>verified_user</span>
                <span style={{ fontSize: '10px', textTransform: 'uppercase', letterSpacing: '0.2em', color: '#A0A0A0' }}>Guaranteed Safe Checkout</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
