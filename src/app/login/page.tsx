import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';

export const metadata = {
  title: 'Login | Sabbir Ahmmed',
  description: 'Log in to your account.',
};

export default function LoginPage() {
  return (
    <>
      <Navbar />
      <main>
        <section className="section" style={{ paddingTop: '140px', minHeight: '70vh', display: 'flex', alignItems: 'center' }}>
          <div className="container" style={{ maxWidth: '440px' }}>
            <div className="contact-form" style={{ padding: '40px' }}>
              <div style={{ textAlign: 'center', marginBottom: '32px' }}>
                <h1 style={{ fontSize: '1.8rem', fontWeight: 800, marginBottom: '8px', background: 'var(--accent-gradient)', WebkitBackgroundClip: 'text', WebkitTextFillColor: 'transparent' }}>
                  Welcome Back
                </h1>
                <p style={{ color: 'var(--text-secondary)', fontSize: '14px' }}>
                  Log in to your account
                </p>
              </div>

              <div className="form-group">
                <label htmlFor="login-email">Email Address</label>
                <input type="email" id="login-email" placeholder="you@example.com" />
              </div>

              <div className="form-group">
                <label htmlFor="login-password">Password</label>
                <input type="password" id="login-password" placeholder="Enter your password" />
              </div>

              <button className="btn btn-primary form-submit" id="login-submit" style={{ marginTop: '8px' }}>
                Log In
              </button>

              <p style={{ textAlign: 'center', marginTop: '20px', fontSize: '14px', color: 'var(--text-secondary)' }}>
                Don&apos;t have an account?{' '}
                <a href="/signup" style={{ color: 'var(--accent-primary-light)', textDecoration: 'none', fontWeight: 600 }}>Sign Up</a>
              </p>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}
