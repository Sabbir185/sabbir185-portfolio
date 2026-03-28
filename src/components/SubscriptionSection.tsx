'use client';

import { useState, FormEvent } from 'react';

export default function SubscriptionSection() {
  const [email, setEmail] = useState('');
  const [subscribed, setSubscribed] = useState(false);

  const handleSubscribe = (e: FormEvent) => {
    e.preventDefault();
    // TODO: Integrate with backend API
    setSubscribed(true);
    setEmail('');
    setTimeout(() => setSubscribed(false), 4000);
  };

  return (
    <section className="section subscription" id="subscription">
      <div className="subscription-orb subscription-orb-1"></div>
      <div className="subscription-orb subscription-orb-2"></div>

      <div className="container">
        <div className="subscription-inner">
          <div className="subscription-icon">✉️</div>
          <h3>Stay in the Loop</h3>
          <p>
            Subscribe to my newsletter for the latest blog posts, project updates,
            and tech insights delivered straight to your inbox.
          </p>

          {subscribed ? (
            <div style={{
              padding: '16px 32px',
              background: 'rgba(34, 197, 94, 0.1)',
              border: '1px solid rgba(34, 197, 94, 0.3)',
              borderRadius: 'var(--radius-full)',
              color: '#22c55e',
              fontWeight: 600,
              fontSize: '15px',
              display: 'inline-flex',
              alignItems: 'center',
              gap: '8px',
            }}>
              <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5"><polyline points="20 6 9 17 4 12"/></svg>
              Successfully subscribed! Welcome aboard 🎉
            </div>
          ) : (
            <form className="subscription-form" onSubmit={handleSubscribe} id="subscription-form">
              <input
                type="email"
                className="subscription-input"
                placeholder="Enter your email address"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                required
                id="subscription-email"
              />
              <button type="submit" className="btn btn-primary subscription-btn" id="subscription-submit">
                Subscribe
                <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><line x1="5" y1="12" x2="19" y2="12"/><polyline points="12 5 19 12 12 19"/></svg>
              </button>
            </form>
          )}
        </div>
      </div>
    </section>
  );
}
