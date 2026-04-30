'use client';

import Link from "next/link";
import { useEffect, useState } from "react";
import { useCart } from "@/context/CartContext";

export default function ShoppingBag() {
  const [isMobile, setIsMobile] = useState(false);
  const { cart, removeFromCart, updateQuantity, cartTotal } = useCart();

  useEffect(() => {
    const checkMobile = () => setIsMobile(window.innerWidth < 768);
    checkMobile();
    window.addEventListener('resize', checkMobile);
    return () => window.removeEventListener('resize', checkMobile);
  }, []);

  const subtotal = cartTotal;
  const shipping = 0; // Complimentary
  const gst = Math.round(subtotal * 0.12);
  const total = subtotal + shipping + gst;

  if (cart.length === 0) {
    return (
      <div className="container animate-fade-in" style={{ paddingTop: '120px', textAlign: 'center' }}>
        <h1 className="text-h1" style={{ marginBottom: '24px', color: '#e8e8e8' }}>Your Bag is Empty😔</h1>
        <p className="text-body-reg" style={{ marginBottom: '40px', color: '#b0b0b0' }}>
          Discover our latest arrivals and find something special.
        </p>
        <Link href="/products" className="btn-primary" style={{ padding: '16px 48px', background: '#D4AF37', color: '#0f0f0f', textDecoration: 'none', borderRadius: '40px', fontWeight: 600, display: 'inline-block', boxShadow: '0 4px 20px rgba(212, 175, 55, 0.3)', textTransform: 'uppercase', letterSpacing: '0.1em' }}>
          Explore Collections
        </Link>
      </div>
    );
  }

  return (
    <div className="container animate-fade-in" style={{ paddingTop: '72px', paddingBottom: '120px' }}>
      <div style={{ marginBottom: isMobile ? '32px' : '48px' }}>
        <h1 className="text-h1" style={{ marginBottom: '8px', color: '#e8e8e8' }}>Shopping Bag</h1>
        <p className="text-body-reg" style={{ color: '#b0b0b0' }}>Review your premium selections from our heritage collection.</p>
      </div>

      <div style={{ 
        display: 'grid', 
        gridTemplateColumns: isMobile ? '1fr' : '1fr 1fr', 
        gap: isMobile ? '32px' : '64px',
        alignItems: 'start'
      }}>
        
        {/* Cart Items - 2 column grid on left half (PC) */}
        <div style={{ 
          display: 'grid', 
          gridTemplateColumns: isMobile ? 'repeat(2, 1fr)' : 'repeat(2, 1fr)', 
          gap: isMobile ? '16px' : '24px' 
        }}>
          {cart.map((item, index) => (
            <div key={`${item.id}-${item.size}-${item.color}`} style={{ 
              display: 'flex', 
              flexDirection: 'column', 
              gap: '12px', 
              padding: '16px', 
              background: '#1a1a1a', 
              border: '2px solid #D4AF37', 
              borderRadius: '16px',
              boxShadow: '0 4px 12px rgba(212, 175, 55, 0.1)',
              position: 'relative',
              transition: 'transform 0.2s ease'
            }} className="cart-item-card">
              <div style={{ 
                width: '100%', 
                aspectRatio: '3/4', 
                overflow: 'hidden', 
                borderRadius: '8px',
                background: '#0f0f0f',
                border: '1px solid #D4AF37'
              }}>
                <img src={item.image} alt={item.name} style={{ width: '100%', height: '100%', objectFit: 'cover' }} />
              </div>
              
              <div style={{ display: 'flex', flexDirection: 'column', gap: '8px', flexGrow: 1 }}>
                <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start' }}>
                  <h3 style={{ fontWeight: 700, fontSize: '14px', lineHeight: 1.2, margin: 0, color: '#e8e8e8' }}>{item.name}</h3>
                  <button 
                    onClick={() => removeFromCart(item.id, item.size, item.color)}
                    style={{ border: 'none', background: 'transparent', cursor: 'pointer', color: '#ff4444', padding: '4px' }}
                  >
                    <span className="material-symbols-outlined" style={{ fontSize: '20px' }}>delete_outline</span>
                  </button>
                </div>
                
                <div style={{ display: 'flex', gap: '8px', flexWrap: 'wrap' }}>
                  <span style={{ fontSize: '10px', background: '#252525', padding: '2px 8px', borderRadius: '4px', fontWeight: 600, color: '#D4AF37', border: '1px solid #D4AF37' }}>{item.size}</span>
                  <span style={{ fontSize: '10px', background: '#252525', padding: '2px 8px', borderRadius: '4px', fontWeight: 600, color: '#D4AF37', border: '1px solid #D4AF37' }}>{item.color}</span>
                </div>

                <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginTop: '8px' }}>
                  <span style={{ fontWeight: 700, color: '#D4AF37', fontSize: '15px' }}>{item.price}</span>
                  
                  {/* Quantity Controls */}
                  <div style={{ 
                    display: 'flex', 
                    alignItems: 'center', 
                    gap: '12px',
                    border: '1px solid #D4AF37',
                    borderRadius: '99px',
                    padding: '2px 8px',
                    background: '#252525'
                  }}>
                    <button 
                      onClick={() => updateQuantity(item.id, item.size, item.color, item.quantity - 1)}
                      style={{ border: 'none', background: 'none', cursor: 'pointer', fontSize: '16px', fontWeight: 'bold', color: '#D4AF37' }}
                    >−</button>
                    <span style={{ fontSize: '12px', fontWeight: 600, minWidth: '16px', textAlign: 'center', color: '#e8e8e8' }}>{item.quantity}</span>
                    <button 
                      onClick={() => updateQuantity(item.id, item.size, item.color, item.quantity + 1)}
                      style={{ border: 'none', background: 'none', cursor: 'pointer', fontSize: '16px', fontWeight: 'bold', color: '#D4AF37' }}
                    >+</button>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Order Summary - Right half (PC) */}
        <div>
          <div style={{ 
            position: isMobile ? 'static' : 'sticky', 
            top: '120px', 
            padding: isMobile ? '24px' : '40px', 
            background: 'var(--charcoal-black)', 
            color: 'white', 
            borderRadius: '24px', 
            border: '1px solid var(--gold-luxury)',
            boxShadow: '0 20px 50px rgba(0,0,0,0.15)'
          }}>
            <h3 className="text-h3" style={{ color: 'var(--gold-luxury)', marginBottom: '32px', letterSpacing: '0.05em' }}>Order Summary</h3>
            
            <div style={{ display: 'flex', flexDirection: 'column', gap: '20px', marginBottom: '40px' }}>
              <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
                <span style={{ color: '#A0A0A0', fontSize: '14px' }}>Subtotal</span>
                <span style={{ fontWeight: 500 }}>₹{subtotal.toLocaleString()}</span>
              </div>
              <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
                <span style={{ color: '#A0A0A0', fontSize: '14px' }}>Shipping</span>
                <span style={{ color: 'var(--gold-luxury)', textTransform: 'uppercase', letterSpacing: '0.1em', fontSize: '11px', fontWeight: 700 }}>Complimentary</span>
              </div>
              <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
                <span style={{ color: '#A0A0A0', fontSize: '14px' }}>GST (12%)</span>
                <span style={{ fontWeight: 500 }}>₹{gst.toLocaleString()}</span>
              </div>
              
              <div style={{ 
                paddingTop: '24px', 
                marginTop: '12px', 
                borderTop: '1px solid rgba(255,255,255,0.1)', 
                display: 'flex', 
                justifyContent: 'space-between', 
                alignItems: 'baseline' 
              }}>
                <span style={{ fontSize: '18px', fontWeight: 600 }}>Total</span>
                <div style={{ textAlign: 'right' }}>
                  <span style={{ fontSize: '32px', fontWeight: 700, color: 'var(--gold-luxury)' }}>₹{total.toLocaleString()}</span>
                  <p style={{ fontSize: '10px', color: '#A0A0A0', margin: 0, textTransform: 'uppercase', letterSpacing: '0.1em' }}>All taxes included</p>
                </div>
              </div>
            </div>

            <div style={{ display: 'flex', flexDirection: 'column', gap: '20px' }}>
              <button className="btn-primary" style={{ 
                width: '100%', 
                padding: '20px', 
                textTransform: 'uppercase', 
                letterSpacing: '0.2em',
                fontSize: '14px',
                fontWeight: 700,
                background: '#D4AF37',
                color: '#0f0f0f',
                borderRadius: '12px',
                border: 'none',
                cursor: 'pointer'
              }}>Proceed to Checkout</button>
              
              <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', gap: '10px', opacity: 0.7 }}>
                <span className="material-symbols-outlined" style={{ color: 'var(--gold-luxury)', fontSize: '20px' }}>shield_lock</span>
                <span style={{ fontSize: '11px', textTransform: 'uppercase', letterSpacing: '0.1em' }}>Secure encrypted payment</span>
              </div>
            </div>
          </div>
          
          <div style={{ marginTop: '32px', padding: '24px', borderRadius: '16px', background: '#1a1a1a', border: '2px solid #D4AF37' }}>
            <h4 style={{ fontSize: '14px', fontWeight: 700, marginBottom: '12px', color: '#D4AF37' }}>Wholesale Inquiries</h4>
            <p style={{ fontSize: '12px', color: '#b0b0b0', lineHeight: 1.5, marginBottom: '16px' }}>
              Ordering for a team or retail store? Our wholesale partners receive exclusive heritage pricing and custom tailoring services.
            </p>
            <a href="https://wa.me/918825481550" target="_blank" style={{ color: '#D4AF37', fontWeight: 600, fontSize: '12px', textDecoration: 'none' }}>Contact Wholesale Team →</a>
          </div>
        </div>
      </div>
    </div>
  );
}
