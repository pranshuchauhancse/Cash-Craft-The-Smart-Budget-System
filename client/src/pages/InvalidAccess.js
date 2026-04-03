import { useEffect } from 'react';
import { useLocation, useNavigate } from 'react-router-dom';
import { FaExclamationCircle, FaShieldAlt } from 'react-icons/fa';

const InvalidAccess = () => {
    const navigate = useNavigate();
    const location = useLocation();

    useEffect(() => {
        const timer = setTimeout(() => {
            navigate(location.state?.from || '/', { replace: true });
        }, 2600);

        return () => clearTimeout(timer);
    }, [location.state, navigate]);

    return (
        <div className="landing-page-container" style={{ minHeight: '100vh', display: 'flex', alignItems: 'center', justifyContent: 'center', padding: '120px 20px' }}>
            <div style={{ maxWidth: '560px', width: '100%', textAlign: 'center', background: 'rgba(15, 23, 42, 0.9)', border: '1px solid rgba(249, 115, 22, 0.3)', borderRadius: '28px', padding: '40px 32px', boxShadow: '0 30px 80px rgba(0, 0, 0, 0.6)' }}>
                <div style={{ width: '92px', height: '92px', margin: '0 auto 20px', borderRadius: '28px', display: 'grid', placeItems: 'center', background: 'rgba(249, 115, 22, 0.12)', border: '1px solid rgba(249, 115, 22, 0.22)', boxShadow: '0 0 0 8px rgba(249, 115, 22, 0.06)' }}>
                    <FaShieldAlt style={{ fontSize: '42px', color: '#f97316' }} />
                </div>
                <div style={{ display: 'inline-flex', alignItems: 'center', gap: '10px', marginBottom: '16px', padding: '8px 14px', borderRadius: '999px', background: 'rgba(249, 115, 22, 0.1)', border: '1px solid rgba(249, 115, 22, 0.2)', color: '#fed7aa', fontSize: '12px', fontWeight: 800, letterSpacing: '0.12em', textTransform: 'uppercase' }}>
                    <FaExclamationCircle />
                    Invalid Access
                </div>
                <h1 style={{ color: 'white', fontSize: 'clamp(28px, 4vw, 40px)', fontWeight: 900, letterSpacing: '-1.5px', marginBottom: '14px' }}>Scanning access rights</h1>
                <p style={{ color: '#cbd5e1', fontSize: '16px', lineHeight: 1.7, marginBottom: '24px' }}>
                    Your account does not have permission to open the admin dashboard. The system is verifying access and will return you automatically.
                </p>
                <div style={{ height: '10px', borderRadius: '999px', background: 'rgba(255,255,255,0.06)', overflow: 'hidden', marginBottom: '18px' }}>
                    <div style={{ width: '100%', height: '100%', background: 'linear-gradient(90deg, #f97316, #ea580c)', transformOrigin: 'left center', animation: 'scan-bar 2.2s ease-in-out infinite' }} />
                </div>
                <button type="button" onClick={() => navigate(location.state?.from || '/', { replace: true })} className="btn btn-primary" style={{ minWidth: '180px' }}>
                    Go Back Now
                </button>
            </div>
            <style>{`@keyframes scan-bar { 0% { transform: scaleX(0.15); opacity: 0.4; } 50% { transform: scaleX(1); opacity: 1; } 100% { transform: scaleX(0.15); opacity: 0.4; } }`}</style>
        </div>
    );
};

export default InvalidAccess;