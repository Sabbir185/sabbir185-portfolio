'use client';

import { useState, useEffect } from 'react';
import Link from 'next/link';

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const toggleMobile = () => {
    setMobileOpen(!mobileOpen);
    document.body.style.overflow = !mobileOpen ? 'hidden' : '';
  };

  const closeMobile = () => {
    setMobileOpen(false);
    document.body.style.overflow = '';
  };

  return (
    <>
      <nav className={`navbar ${scrolled ? 'scrolled' : ''}`} id="navbar">
        <div className="navbar-inner">
          <Link href="/" className="navbar-logo">
            Sabbir<span>.dev</span>
          </Link>

          <ul className="navbar-links">
            <li><a href="#about">About Me</a></li>
            <li><Link href="/projects">Projects</Link></li>
            <li><Link href="/blogs">Blogs</Link></li>
          </ul>

          <div className="navbar-auth">
            <Link href="/login" className="navbar-login">Log in</Link>
            <Link href="/signup" className="btn btn-primary navbar-signup">Sign up</Link>
          </div>

          <button
            className={`mobile-toggle ${mobileOpen ? 'active' : ''}`}
            onClick={toggleMobile}
            aria-label="Toggle menu"
            id="mobile-menu-toggle"
          >
            <span></span>
            <span></span>
            <span></span>
          </button>
        </div>
      </nav>

      <div className={`mobile-menu ${mobileOpen ? 'open' : ''}`} id="mobile-menu">
        <a href="#about" onClick={closeMobile}>About Me</a>
        <Link href="/projects" onClick={closeMobile}>Projects</Link>
        <Link href="/blogs" onClick={closeMobile}>Blogs</Link>
        <Link href="/login" onClick={closeMobile}>Log in</Link>
        <Link href="/signup" onClick={closeMobile} className="btn btn-primary">Sign up</Link>
      </div>
    </>
  );
}
