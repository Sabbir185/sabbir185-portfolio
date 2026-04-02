import Link from 'next/link';
import { navigationData, footerData } from '@/data';

export default function Footer() {
  const { logo, logoAccent } = navigationData;
  const { brandDescription, socials, columns, copyrightName, copyrightNote } = footerData;
  const currentYear = new Date().getFullYear();

  return (
    <footer className="footer" id="footer">
      <div className="container">
        <div className="footer-top">
          {/* Brand */}
          <div className="footer-brand">
            <Link href="/" className="navbar-logo" style={{ fontSize: '1.8rem' }}>
              {logo}<span>{logoAccent}</span>
            </Link>
            <p>{brandDescription}</p>
            <div className="footer-socials">
              {socials.map((social) => (
                <a
                  key={social.id}
                  href={social.href}
                  target={social.href.startsWith('mailto:') ? undefined : '_blank'}
                  rel={social.href.startsWith('mailto:') ? undefined : 'noopener noreferrer'}
                  className="footer-social"
                  aria-label={social.label}
                  id={social.id}
                >
                  <svg
                    width="18"
                    height="18"
                    viewBox="0 0 24 24"
                    fill={social.usesFill ? 'currentColor' : 'none'}
                    stroke={social.usesFill ? undefined : 'currentColor'}
                    strokeWidth={social.usesFill ? undefined : '2'}
                    dangerouslySetInnerHTML={{ __html: social.svgContent }}
                  />
                </a>
              ))}
            </div>
          </div>

          {/* Columns */}
          {columns.map((column, index) => (
            <div className="footer-column" key={index}>
              <h4>{column.title}</h4>
              {column.links.map((link, i) =>
                link.isRoute ? (
                  <Link key={i} href={link.href}>{link.label}</Link>
                ) : (
                  <a
                    key={i}
                    href={link.href}
                    {...(link.external ? { target: '_blank', rel: 'noopener noreferrer' } : {})}
                  >
                    {link.label}
                  </a>
                )
              )}
            </div>
          ))}
        </div>

        <div className="footer-bottom">
          <p>
            © {currentYear} <a href="/">{copyrightName}</a>. {copyrightNote}
          </p>
        </div>
      </div>
    </footer>
  );
}
