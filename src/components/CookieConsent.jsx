import React, { useState, useEffect } from 'react';

export default function CookieConsent() {
  const [show, setShow] = useState(false);

  useEffect(() => {
    const consent = localStorage.getItem('cookieConsent');
    if (!consent) {
      setShow(true);
    }
  }, []);

  const handleAccept = () => {
    localStorage.setItem('cookieConsent', 'granted');
    setShow(false);
    if (window.gtag) {
      window.gtag('consent', 'update', {
        'analytics_storage': 'granted',
        'ad_storage': 'granted'
      });
    }
  };

  const handleDecline = () => {
    localStorage.setItem('cookieConsent', 'denied');
    setShow(false);
    if (window.gtag) {
      window.gtag('consent', 'update', {
        'analytics_storage': 'denied',
        'ad_storage': 'denied'
      });
    }
  };

  if (!show) return null;

  return (
    <div style={{
      position: 'fixed',
      bottom: 0,
      left: 0,
      right: 0,
      background: '#111',
      borderTop: '1px solid #333',
      padding: '16px 24px',
      zIndex: 9999,
      display: 'flex',
      flexDirection: 'column',
      gap: '16px',
      boxShadow: '0 -4px 20px rgba(0,0,0,0.5)'
    }} className="md:flex-row md:items-center md:justify-between">
      <div style={{ color: '#ccc', fontSize: '0.875rem', lineHeight: '1.6', maxWidth: '800px' }}>
        Utilizamos cookies para analizar el tráfico del sitio web y mejorar su experiencia. 
        Al hacer clic en "Aceptar", usted consiente nuestro uso de cookies de acuerdo con nuestra configuración de Google Analytics.
      </div>
      <div style={{ display: 'flex', gap: '12px', flexShrink: 0 }}>
        <button 
          onClick={handleDecline}
          style={{
            background: 'transparent',
            color: '#ccc',
            border: '1px solid #555',
            padding: '10px 20px',
            borderRadius: '6px',
            fontSize: '0.875rem',
            fontWeight: '600',
            cursor: 'pointer',
            transition: 'all 0.2s'
          }}
          onMouseEnter={(e) => { e.target.style.color = '#fff'; e.target.style.borderColor = '#888'; }}
          onMouseLeave={(e) => { e.target.style.color = '#ccc'; e.target.style.borderColor = '#555'; }}
        >
          Rechazar
        </button>
        <button 
          onClick={handleAccept}
          style={{
            background: '#F5C518',
            color: '#000',
            border: 'none',
            padding: '10px 20px',
            borderRadius: '6px',
            fontSize: '0.875rem',
            fontWeight: '700',
            cursor: 'pointer',
            transition: 'all 0.2s',
            boxShadow: '0 4px 10px rgba(245, 197, 24, 0.2)'
          }}
          onMouseEnter={(e) => { e.target.style.background = '#d4a800'; e.target.style.transform = 'translateY(-1px)'; }}
          onMouseLeave={(e) => { e.target.style.background = '#F5C518'; e.target.style.transform = 'translateY(0)'; }}
        >
          Aceptar
        </button>
      </div>
    </div>
  );
}