'use client';

import { useState, useEffect } from 'react';
import Link from 'next/link';
import { navigationData } from '@/data';

export default function Navbar() {
  const { logo, logoAccent, links, authLinks } = navigationData;
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
            {logo}<span>{logoAccent}</span>
          </Link>

          <ul className="navbar-links">
            {links.map((link) => (
              <li key={link.href}>
                {link.isRoute ? (
                  <Link href={link.href}>{link.label}</Link>
                ) : (
                  <a href={link.href}>{link.label}</a>
                )}
              </li>
            ))}
          </ul>

          <div className="navbar-auth">
            <Link href={authLinks.login.href} className="navbar-login">{authLinks.login.label}</Link>
            <Link href={authLinks.signup.href} className="btn btn-primary navbar-signup">{authLinks.signup.label}</Link>
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
        {links.map((link) =>
          link.isRoute ? (
            <Link key={link.href} href={link.href} onClick={closeMobile}>{link.label}</Link>
          ) : (
            <a key={link.href} href={link.href} onClick={closeMobile}>{link.label}</a>
          )
        )}
        <Link href={authLinks.login.href} onClick={closeMobile}>{authLinks.login.label}</Link>
        <Link href={authLinks.signup.href} onClick={closeMobile} className="btn btn-primary">{authLinks.signup.label}</Link>
      </div>
    </>
  );
}
