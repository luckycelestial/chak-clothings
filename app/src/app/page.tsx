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
    <div className="animate-fade-in" style={{ paddingTop: isMobile ? '100px' : '0' }}>
      {/* Brand Hero - Centered Logo */}
      <section style={{ 
        display: 'flex', 
        flexDirection: 'column', 
        alignItems: 'center', 
        width: '100%',
        background: isMobile ? 'white' : 'radial-gradient(circle at center, #1a1a1a 0%, #000 100%)',
        minHeight: isMobile ? 'auto' : '95vh',
        position: 'relative',
        overflow: 'hidden'
      }}>
        <div style={{ 
          width: '100%', 
          maxWidth: isMobile ? '100%' : '1600px',
          padding: isMobile ? '0' : '40px 0'
        }}>
          <img 
            src="/Chak_logo.jpg" 
            alt="CHAK Logo" 
            style={{ 
              width: '100%', 
              height: 'auto', 
              display: 'block',
              transform: isMobile ? 'none' : 'scale(1.05)',
              transition: 'transform 0.5s ease'
            }} 
          />
        </div>

        {/* Explore Collections Button - Floating Look from Screenshot */}
        <div style={{ 
          width: '100%', 
          padding: isMobile ? '48px 24px' : '0 24px 100px',
          display: 'flex',
          justifyContent: 'center',
          alignItems: 'center',
          marginTop: isMobile ? '0' : '-120px',
          zIndex: 10,
          position: isMobile ? 'relative' : 'absolute',
          bottom: isMobile ? 'auto' : '15vh'
        }}>
          <Link href="/products" className="btn-primary" style={{ 
            textDecoration: 'none', 
            borderRadius: '40px', 
            padding: isMobile ? '14px 48px' : '20px 80px', 
            fontSize: isMobile ? '16px' : '18px', 
            fontWeight: 600,
            background: isMobile ? 'var(--action-blue)' : 'rgba(29, 58, 137, 0.9)',
            color: 'white',
            backdropFilter: isMobile ? 'none' : 'blur(10px)',
            boxShadow: isMobile ? '0 4px 20px rgba(0,0,0,0.3)' : '0 10px 40px rgba(0,0,0,0.5)',
            border: isMobile ? 'none' : '1px solid rgba(255,255,255,0.1)',
            transition: 'all 0.3s ease',
            letterSpacing: '0.05em'
          }}>
            Explore Collections
          </Link>
        </div>
      </section>

      {/* New Arrivals Section */}
      <section className="container" style={{ padding: '20px 20px 40px', background: 'white' }}>
        <h2 className="text-h2" style={{ marginBottom: '24px', fontSize: isMobile ? '22px' : '32px' }}>New Arrivals</h2>
        <div style={{ 
          display: 'grid', 
          gridTemplateColumns: isMobile ? 'repeat(2, 1fr)' : 'repeat(4, 1fr)', 
          gap: isMobile ? '16px' : '32px' 
        }}>
          <div style={{ cursor: 'pointer' }}>
             <div style={{ aspectRatio: '3/4', background: 'white', borderRadius: '12px', overflow: 'hidden', marginBottom: '12px', border: '1px solid var(--border-light)' }}>
                <img src="/tshirt.png" alt="Black T-Shirt" style={{ width: '100%', height: '100%', objectFit: 'cover' }} />
             </div>
             <p className="text-body-sm" style={{ fontWeight: 600, marginBottom: '4px' }}>Premium Black T-Shirt</p>
             <p className="text-body-sm" style={{ opacity: 0.7 }}>₹1,499</p>
          </div>
          <div style={{ cursor: 'pointer' }}>
             <div style={{ aspectRatio: '3/4', background: 'white', borderRadius: '12px', overflow: 'hidden', marginBottom: '12px', border: '1px solid var(--border-light)' }}>
                <img src="/shirt.png" alt="White Shirt" style={{ width: '100%', height: '100%', objectFit: 'cover' }} />
             </div>
             <p className="text-body-sm" style={{ fontWeight: 600, marginBottom: '4px' }}>Crisp White Shirt</p>
             <p className="text-body-sm" style={{ opacity: 0.7 }}>₹2,499</p>
          </div>
          <div style={{ cursor: 'pointer' }}>
             <div style={{ aspectRatio: '3/4', background: 'white', borderRadius: '12px', overflow: 'hidden', marginBottom: '12px', border: '1px solid var(--border-light)' }}>
                <img src="/pants.png" alt="Chinos" style={{ width: '100%', height: '100%', objectFit: 'cover' }} />
             </div>
             <p className="text-body-sm" style={{ fontWeight: 600, marginBottom: '4px' }}>Slim Fit Chinos</p>
             <p className="text-body-sm" style={{ opacity: 0.7 }}>₹3,299</p>
          </div>
          <div style={{ cursor: 'pointer' }}>
             <div style={{ aspectRatio: '3/4', background: 'white', borderRadius: '12px', overflow: 'hidden', marginBottom: '12px', border: '1px solid var(--border-light)' }}>
                <img src="/tshirt.png" alt="Classic Tee" style={{ width: '100%', height: '100%', objectFit: 'cover' }} />
             </div>
             <p className="text-body-sm" style={{ fontWeight: 600, marginBottom: '4px' }}>Classic Crew Tee</p>
             <p className="text-body-sm" style={{ opacity: 0.7 }}>₹1,299</p>
          </div>
        </div>
      </section>

      {/* Value Propositions - Auto Scrolling Marquee */}
      <section style={{ background: 'var(--surface-container)', padding: '60px 0', overflow: 'hidden' }}>
        <div className="marquee-container">
          {[...Array(3)].map((_, i) => (
            <div key={i} style={{ display: 'flex', gap: '20px' }}>
              {[
                { icon: "workspace_premium", title: "Premium T-Shirts", desc: "Long lasting craftsmanship" },
                { icon: "eco", title: "Pure Cotton", desc: "Sourced from Tiruppur" },
                { icon: "local_shipping", title: "Pan-India Delivery", desc: "Fast & Secure shipping" },
                { icon: "history", title: "Heritage Fits", desc: "Classic Indian silhouettes" },
                { icon: "verified", title: "Quality Check", desc: "Multi-point inspection" }
              ].map((value, index) => (
                <div key={index} style={{ 
                  flex: '0 0 280px',
                  padding: '32px 24px',
                  background: 'white',
                  borderRadius: '20px',
                  textAlign: 'center',
                  boxShadow: '0 8px 24px rgba(0,0,0,0.04)',
                  border: '1px solid var(--border-light)'
                }}>
                  <div style={{ 
                    width: '56px', 
                    height: '56px', 
                    background: 'var(--surface-container-low)', 
                    borderRadius: '16px', 
                    display: 'flex', 
                    alignItems: 'center', 
                    justifyContent: 'center',
                    margin: '0 auto 16px',
                    color: 'var(--brand-gold)'
                  }}>
                    <span className="material-symbols-outlined" style={{ fontSize: '32px' }}>{value.icon}</span>
                  </div>
                  <h4 className="text-h4" style={{ fontSize: '16px', marginBottom: '8px' }}>{value.title}</h4>
                  <p className="text-body-sm" style={{ opacity: 0.6 }}>{value.desc}</p>
                </div>
              ))}
            </div>
          ))}
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
              <a 
                href="https://wa.me/918825481550" 
                target="_blank" 
                rel="noopener noreferrer"
                style={{ textDecoration: 'none' }}
              >
                <button className="btn-outline" style={{ borderRadius: '24px', padding: '12px 32px', minWidth: '200px' }}>Contact Wholesale Team</button>
              </a>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
