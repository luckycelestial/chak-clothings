'use client';

import { useState } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";

export default function Navigation() {
  const pathname = usePathname();
  const [isSearchOpen, setIsSearchOpen] = useState(false);
  const [searchQuery, setSearchQuery] = useState("");
  const router = typeof window !== 'undefined' ? require('next/navigation').useRouter() : null;

  const isActive = (path: string) => {
    if (path === "/" && pathname === "/") return true;
    if (path !== "/" && pathname.startsWith(path)) return true;
    return false;
  };

  const handleSearch = (e: React.FormEvent) => {
    e.preventDefault();
    if (searchQuery.trim() && router) {
      router.push(`/products?q=${encodeURIComponent(searchQuery.trim())}`);
      setIsSearchOpen(false);
      setSearchQuery("");
    }
  };

  return (
    <>
      <header className="header" style={{ 
        position: 'absolute', 
        top: 0, 
        left: 0, 
        right: 0, 
        zIndex: 100, 
        background: 'white',
        justifyContent: 'center', 
        boxShadow: 'none', 
        borderBottom: '1px solid rgba(0,0,0,0.05)' 
      }}>
        <Link href="/" className="logo" style={{ fontSize: '24px', letterSpacing: '0.2em', color: 'black', fontWeight: '700' }}>
          CHAK CLOTHINGS
        </Link>
      </header>

      {/* Persistent Search Bar (Toggled) */}
      {isSearchOpen && (
        <div style={{
          position: 'fixed',
          bottom: '100px',
          left: '50%',
          transform: 'translateX(-50%)',
          width: '90%',
          maxWidth: '500px',
          padding: '8px',
          zIndex: 1001,
          animation: 'slideUp 0.3s cubic-bezier(0.4, 0, 0.2, 1)'
        }}>
          <form onSubmit={handleSearch} style={{
            position: 'relative',
            background: 'white',
            borderRadius: '99px',
            boxShadow: '0 10px 40px rgba(0,0,0,0.15)',
            border: '1px solid var(--gold-luxury)',
            overflow: 'hidden'
          }}>
            <input 
              type="text" 
              placeholder="Search our collections..." 
              autoFocus
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              style={{
                width: '100%',
                padding: '16px 56px 16px 24px',
                border: 'none',
                background: 'transparent',
                fontSize: '15px',
                fontWeight: 500,
                color: 'var(--charcoal-black)',
                outline: 'none'
              }}
            />
            <button 
              type="submit"
              style={{
                position: 'absolute',
                right: '12px',
                top: '50%',
                transform: 'translateY(-50%)',
                background: 'var(--action-blue)',
                color: 'white',
                border: 'none',
                width: '36px',
                height: '36px',
                borderRadius: '50%',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                cursor: 'pointer'
              }}
            >
              <span className="material-symbols-outlined" style={{ fontSize: '20px' }}>search</span>
            </button>
          </form>
        </div>
      )}

      <nav className="bottom-nav">
        <Link href="/" className={`nav-item ${isActive('/') ? 'active' : ''}`} onClick={() => setIsSearchOpen(false)}>
          <span className="material-symbols-outlined">home</span>
          <span>Home</span>
        </Link>
        <Link href="/products" className={`nav-item ${isActive('/products') ? 'active' : ''}`} onClick={() => setIsSearchOpen(false)}>
          <span className="material-symbols-outlined">apparel</span>
          <span>Products</span>
        </Link>
        <button 
          onClick={() => setIsSearchOpen(!isSearchOpen)}
          className={`nav-item ${isSearchOpen ? 'active' : ''}`}
          style={{ background: 'none', border: 'none', color: 'inherit', font: 'inherit', cursor: 'pointer' }}
        >
          <span className="material-symbols-outlined">search</span>
          <span>Search</span>
        </button>
        <Link href="/shopping_bag" className={`nav-item ${isActive('/shopping_bag') ? 'active' : ''}`} onClick={() => setIsSearchOpen(false)}>
          <span className="material-symbols-outlined">shopping_cart</span>
          <span>Cart</span>
        </Link>
        <Link href="/my_profile" className={`nav-item ${isActive('/my_profile') ? 'active' : ''}`} onClick={() => setIsSearchOpen(false)}>
          <span className="material-symbols-outlined">person</span>
          <span>Profile</span>
        </Link>
      </nav>

      <style jsx>{`
        @keyframes slideUp {
          from { transform: translate(-50%, 20px); opacity: 0; }
          to { transform: translate(-50%, 0); opacity: 1; }
        }
      `}</style>
    </>
  );
}
