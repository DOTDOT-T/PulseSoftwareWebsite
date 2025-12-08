import React from 'react';
import './Footer.css';

export default function Footer() {
  const footerColumns = [
    { title: 'Product', links: ['Features', 'Pricing', 'API'] },
    { title: 'Company', links: ['About', 'Careers', 'Blog'] },
    { title: 'Legal', links: ['Privacy', 'Terms', 'Security'] },
  ];

  return (
    <footer className="footer">
      <div className="footer-container">
        <div className="footer-brand">
          <h3>Pulse Software</h3>
          <p>Building the future of development tools</p>
        </div>
        {footerColumns.map((col, idx) => (
          <div key={idx} className="footer-column">
            <h4>{col.title}</h4>
            <ul>
              {col.links.map((link, i) => (
                <li key={i}>
                  <a href="#">{link}</a>
                </li>
              ))}
            </ul>
          </div>
        ))}
      </div>
      <div className="footer-bottom">
        © 2025 Pulse Software. Designed for creators, built for everyone.
      </div>
    </footer>
  );
}