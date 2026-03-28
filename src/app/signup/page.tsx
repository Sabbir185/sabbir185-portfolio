import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';

export const metadata = {
  title: 'Sign Up | Sabbir Ahmmed',
  description: 'Create a new account.',
};

export default function SignupPage() {
  return (
    <>
      <Navbar />
      <main>
        <section className="section" style={{ paddingTop: '140px', minHeight: '70vh', display: 'flex', alignItems: 'center' }}>
          <div className="container" style={{ maxWidth: '440px' }}>
            <div className="contact-form" style={{ padding: '40px' }}>
              <div style={{ textAlign: 'center', marginBottom: '32px' }}>
                <h1 style={{ fontSize: '1.8rem', fontWeight: 800, marginBottom: '8px', background: 'var(--accent-gradient)', WebkitBackgroundClip: 'text', WebkitTextFillColor: 'transparent' }}>
                  Create Account
                </h1>
                <p style={{ color: 'var(--text-secondary)', fontSize: '14px' }}>
                  Join the community
                </p>
              </div>

              <div className="form-group">
                <label htmlFor="signup-name">Full Name</label>
                <input type="text" id="signup-name" placeholder="John Doe" />
              </div>

              <div className="form-group">
                <label htmlFor="signup-email">Email Address</label>
                <input type="email" id="signup-email" placeholder="you@example.com" />
              </div>

              <div className="form-group">
                <label htmlFor="signup-password">Password</label>
                <input type="password" id="signup-password" placeholder="Create a strong password" />
              </div>

              <button className="btn btn-primary form-submit" id="signup-submit" style={{ marginTop: '8px' }}>
                Sign Up
              </button>

              <p style={{ textAlign: 'center', marginTop: '20px', fontSize: '14px', color: 'var(--text-secondary)' }}>
                Already have an account?{' '}
                <a href="/login" style={{ color: 'var(--accent-primary-light)', textDecoration: 'none', fontWeight: 600 }}>Log In</a>
              </p>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}
