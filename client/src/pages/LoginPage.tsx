import { useState, useContext, FormEvent } from 'react';
import { useNavigate, Link } from 'react-router-dom';
import { useApp } from '../context/AppContext';
import { authService } from '../services/auth.service';

export function LoginPage() {
  const context = useApp();
  const navigate = useNavigate();

  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');
  const [loading, setLoading] = useState(false);

  async function handleSubmit(e: FormEvent) {
    e.preventDefault();
    setError('');
    setLoading(true);

    try {
      const result = await authService.login(email, password);
      context?.loginUser(result.token, result.user);
      navigate('/');
    } catch (err: unknown) {
      const axiosErr = err as { response?: { data?: { error?: { message?: string } } } };
      setError(
        axiosErr?.response?.data?.error?.message || 'Login failed. Please check your credentials.'
      );
    } finally {
      setLoading(false);
    }
  }

  return (
    <div
      style={{
        minHeight: '100vh',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        backgroundColor: '#0f1117',
        fontFamily: 'Inter, system-ui, sans-serif',
      }}
    >
      <div
        style={{
          width: '100%',
          maxWidth: '400px',
          backgroundColor: '#1a1d27',
          borderRadius: '12px',
          padding: '40px',
          boxShadow: '0 4px 32px rgba(0,0,0,0.4)',
          border: '1px solid #2a2d3e',
        }}
      >
        {/* Logo / Title */}
        <div style={{ textAlign: 'center', marginBottom: '32px' }}>
          <h1
            style={{
              fontSize: '24px',
              fontWeight: 700,
              color: '#ffffff',
              margin: 0,
              marginBottom: '8px',
            }}
          >
            AceAcademics
          </h1>
          <p style={{ color: '#8b8fa8', margin: 0, fontSize: '14px' }}>
            Sign in to your account
          </p>
        </div>

        {/* Form */}
        <div onSubmit={handleSubmit as never}>
          <div style={{ marginBottom: '20px' }}>
            <label
              style={{
                display: 'block',
                color: '#c4c7d6',
                fontSize: '13px',
                fontWeight: 500,
                marginBottom: '8px',
              }}
            >
              Email
            </label>
            <input
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
              placeholder="you@example.com"
              style={{
                width: '100%',
                padding: '10px 14px',
                backgroundColor: '#0f1117',
                border: '1px solid #2a2d3e',
                borderRadius: '8px',
                color: '#ffffff',
                fontSize: '14px',
                outline: 'none',
                boxSizing: 'border-box',
              }}
            />
          </div>

          <div style={{ marginBottom: '24px' }}>
            <label
              style={{
                display: 'block',
                color: '#c4c7d6',
                fontSize: '13px',
                fontWeight: 500,
                marginBottom: '8px',
              }}
            >
              Password
            </label>
            <input
              type="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              required
              placeholder="••••••••"
              style={{
                width: '100%',
                padding: '10px 14px',
                backgroundColor: '#0f1117',
                border: '1px solid #2a2d3e',
                borderRadius: '8px',
                color: '#ffffff',
                fontSize: '14px',
                outline: 'none',
                boxSizing: 'border-box',
              }}
            />
          </div>

          {error && (
            <div
              style={{
                backgroundColor: 'rgba(239,68,68,0.12)',
                border: '1px solid rgba(239,68,68,0.4)',
                borderRadius: '8px',
                padding: '10px 14px',
                color: '#f87171',
                fontSize: '13px',
                marginBottom: '20px',
              }}
            >
              {error}
            </div>
          )}

          <button
            onClick={handleSubmit}
            disabled={loading}
            style={{
              width: '100%',
              padding: '11px',
              backgroundColor: loading ? '#3d4166' : '#5b5fcf',
              color: '#ffffff',
              border: 'none',
              borderRadius: '8px',
              fontSize: '14px',
              fontWeight: 600,
              cursor: loading ? 'not-allowed' : 'pointer',
              transition: 'background-color 0.2s',
            }}
          >
            {loading ? 'Signing in…' : 'Sign In'}
          </button>
        </div>

        {/* Footer link */}
        <p
          style={{
            textAlign: 'center',
            marginTop: '24px',
            color: '#8b8fa8',
            fontSize: '13px',
          }}
        >
          Don't have an account?{' '}
          <Link
            to="/register"
            style={{ color: '#818cf8', textDecoration: 'none', fontWeight: 500 }}
          >
            Create one
          </Link>
        </p>
      </div>
    </div>
  );
}