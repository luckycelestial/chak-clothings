'use client';

import Link from "next/link";
import { useEffect, useState } from "react";

export default function Home() {
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const checkMobile = () => setIsMobile(window.innerWidth < 768);
    checkMobile();
    window.addEventListener('resize', checkMobile);
    return () => window.removeEventListener('resize', checkMobile);
  }, []);

  return (
    <div className="animate-fade-in">
      {/* Hero Section */}
      {/* Hero Section */}
      <section style={{ 
        display: 'flex', 
        flexDirection: 'column',
        alignItems: 'center', 
        position: 'relative',
        background: '#000', // Black background to match the logo image in the screenshot
        width: '100%'
      }}>
        <div style={{ width: '100%', maxWidth: '600px' }}>
          <img 
            src="/Chak_logo.jpg" 
            alt="CHAK Logo" 
            style={{ width: '100%', height: 'auto', display: 'block' }} 
          />
        </div>
        <div style={{ padding: '20px 24px 60px', textAlign: 'center' }}>
          <Link href="/products" className="btn-primary" style={{ textDecoration: 'none', borderRadius: '24px', padding: '12px 40px', fontSize: '16px', fontWeight: 600 }}>Explore Collections</Link>
        </div>
      </section>

      {/* Featured Collections Bento Grid */}
      <section className="container" style={{ padding: isMobile ? '40px 16px' : '80px 20px' }}>
        <div style={{ 
          display: 'grid', 
          gridTemplateColumns: isMobile ? 'repeat(2, 1fr)' : 'repeat(12, 1fr)', 
          gap: isMobile ? '12px' : '24px'
        }}>
          {/* T-Shirts */}
          <div style={{ 
            gridColumn: isMobile ? 'span 1' : 'span 8', 
            borderRadius: 'var(--radius-lg)', 
            overflow: 'hidden', 
            background: 'var(--ivory-white)',
            border: '1px solid var(--border-light)',
            position: 'relative',
            cursor: 'pointer'
          }}>
            <div style={{ position: 'relative', aspectRatio: isMobile ? '1/1' : '16/9', overflow: 'hidden' }}>
              <img 
                src="/tshirt.png" 
                alt="T-Shirts" 
                style={{ width: '100%', height: '100%', objectFit: 'cover' }}
              />
              <div style={{ position: 'absolute', inset: 0, background: 'linear-gradient(to top, rgba(0,0,0,0.6), transparent)' }}></div>
              <div style={{ position: 'absolute', bottom: 0, left: 0, padding: isMobile ? '12px' : '40px', color: 'white' }}>
                <span className="text-caption" style={{ textTransform: 'uppercase', letterSpacing: '0.1em', color: 'var(--gold-luxury)', marginBottom: '4px', display: 'block', fontWeight: 600, fontSize: '10px' }}>Trending</span>
                <h3 className="text-h3" style={{ fontSize: isMobile ? '14px' : '24px' }}>Premium T-Shirts</h3>
              </div>
            </div>
          </div>

          {/* Shirts */}
          <div style={{ 
            gridColumn: isMobile ? 'span 1' : 'span 4', 
            borderRadius: 'var(--radius-lg)', 
            overflow: 'hidden', 
            background: 'var(--ivory-white)',
            border: '1px solid var(--border-light)',
            position: 'relative',
            cursor: 'pointer'
          }}>
            <div style={{ position: 'relative', height: '100%', minHeight: isMobile ? '150px' : '300px' }}>
              <img 
                src="/shirt.png" 
                alt="Shirts" 
                style={{ width: '100%', height: '100%', objectFit: 'cover' }}
              />
              <div style={{ position: 'absolute', inset: 0, background: 'rgba(0,0,0,0.3)' }}></div>
              <div style={{ position: 'absolute', top: '50%', left: '50%', transform: 'translate(-50%, -50%)', textAlign: 'center', color: 'white', width: '100%', padding: '0 12px' }}>
                <h3 className="text-h3" style={{ marginBottom: '4px', fontSize: isMobile ? '14px' : '24px' }}>Premium Shirts</h3>
                <p className="text-caption" style={{ textTransform: 'uppercase', letterSpacing: '0.1em', borderBottom: '2px solid var(--gold-luxury)', display: 'inline-block', paddingBottom: '2px', fontWeight: 600, fontSize: '10px' }}>Shop Now</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Pants Grid */}
      <section className="container" style={{ padding: isMobile ? '0 16px 40px' : '0 20px 80px' }}>
        <div style={{ 
          display: 'grid', 
          gridTemplateColumns: isMobile ? 'repeat(2, 1fr)' : 'repeat(4, 1fr)', 
          gap: isMobile ? '12px' : '24px'
        }}>
          {[
            { title: "Cotton Pants", img: "/pants.png" },
            { title: "Chinos", img: "/pants.png" },
          ].map((item, idx) => (
            <div key={idx} style={{ 
              borderRadius: 'var(--radius-lg)', 
              overflow: 'hidden', 
              background: 'var(--ivory-white)',
              border: '1px solid var(--border-light)',
              cursor: 'pointer'
            }}>
              <div style={{ aspectRatio: '1/1', overflow: 'hidden' }}>
                <img src={item.img} alt={item.title} style={{ width: '100%', height: '100%', objectFit: 'cover' }} />
              </div>
              <div style={{ padding: '12px' }}>
                <h4 className="text-h4" style={{ fontSize: '14px' }}>{item.title}</h4>
                <p className="text-caption" style={{ color: 'var(--slate-gray)' }}>Explore Details</p>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Value Propositions - Horizontal Scroll */}
      <section style={{ background: 'var(--surface-container)', padding: '40px 0' }}>
        <div className="container">
          <div style={{ 
            display: 'flex', 
            gap: '12px', 
            overflowX: 'auto', 
            padding: '0 16px 16px',
            scrollSnapType: 'x mandatory',
            msOverflowStyle: 'none',
            scrollbarWidth: 'none',
            WebkitOverflowScrolling: 'touch'
          }}>
            {[
              { icon: "workspace_premium", title: "Premium T-Shirts" },
              { icon: "eco", title: "Pure Cotton" },
              { icon: "local_shipping", title: "Pan-India Delivery" }
            ].map((value, index) => (
              <div key={index} style={{ 
                flex: '0 0 160px',
                scrollSnapAlign: 'start',
                padding: '20px',
                background: 'white',
                borderRadius: '16px',
                textAlign: 'center',
                boxShadow: '0 4px 12px rgba(0,0,0,0.05)'
              }}>
                <span className="material-symbols-outlined" style={{ fontSize: '28px', color: 'var(--brand-gold)', marginBottom: '8px' }}>{value.icon}</span>
                <h4 className="text-h4" style={{ fontSize: '12px' }}>{value.title}</h4>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Wholesale Partnership */}
      <section className="section" style={{ padding: '40px 0' }}>
        <div className="container">
          <div style={{ 
            textAlign: 'center', 
            maxWidth: '640px', 
            margin: '0 auto',
            padding: '0 20px' 
          }}>
            <h2 className="text-h2" style={{ marginBottom: '20px', fontSize: isMobile ? '24px' : '32px' }}>Wholesale Partnership</h2>
            <p className="text-body-reg" style={{ color: 'var(--slate-gray)', marginBottom: '32px', lineHeight: '1.6' }}>
              Partner with CHAK to bring premium Tiruppur craftsmanship to your retail space. 
              We offer exclusive wholesale pricing and custom production services for bulk orders.
            </p>
            <div style={{ display: 'flex', justifyContent: 'center' }}>
              <button className="btn-outline" style={{ borderRadius: '24px', padding: '12px 32px', minWidth: '200px' }}>Contact Wholesale Team</button>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
