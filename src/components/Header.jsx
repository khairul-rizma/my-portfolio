import React, { useState, useEffect } from 'react'

const Header = () => {
    const [scrolled, setScrolled] = useState(false)
    const [menuOpen, setMenuOpen] = useState(false)

    useEffect(() => {
        const handleScroll = () => setScrolled(window.scrollY > 40)
        window.addEventListener('scroll', handleScroll)
        return () => window.removeEventListener('scroll', handleScroll)
    }, [])

    const navLinks = ['About', 'Skills', 'Projects', 'Contact']

    const scrollTo = (id) => {
        document.getElementById(id.toLowerCase())?.scrollIntoView({ behavior: 'smooth' })
        setMenuOpen(false)
    }

    return (
        <>
            <header style={{
                position: 'fixed',
                top: 0, left: 0, right: 0,
                zIndex: 100,
                transition: 'all 0.4s ease',
                background: scrolled || menuOpen ? 'rgba(8,8,8,0.96)' : 'transparent',
                backdropFilter: scrolled || menuOpen ? 'blur(12px)' : 'none',
                borderBottom: scrolled ? '1px solid rgba(212,175,55,0.15)' : '1px solid transparent',
                padding: '0 5%',
            }}>
                <div style={{
                    maxWidth: '1200px',
                    margin: '0 auto',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'space-between',
                    height: '64px',
                }}>
                    {/* Logo */}
                    <div
                        onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
                        style={{ cursor: 'pointer', display: 'flex', alignItems: 'center', gap: '10px' }}
                    >
                        <div style={{
                            width: '32px', height: '32px',
                            border: '1.5px solid #D4AF37',
                            display: 'flex', alignItems: 'center', justifyContent: 'center',
                            transform: 'rotate(45deg)',
                        }}>
                            <span style={{
                                fontFamily: "'Playfair Display', serif",
                                color: '#D4AF37', fontSize: '13px', fontWeight: '700',
                                transform: 'rotate(-45deg)',
                            }}>P</span>
                        </div>
                        <span style={{
                            fontFamily: "'Playfair Display', serif",
                            color: '#fff', fontSize: '17px', letterSpacing: '0.08em',
                        }}>Portfolio</span>
                    </div>

                    {/* Desktop Nav */}
                    <nav style={{ display: 'flex', gap: '36px', alignItems: 'center' }}
                        className="desktop-nav">
                        {navLinks.map((link) => (
                            <button key={link} onClick={() => scrollTo(link)} style={{
                                background: 'none', border: 'none', color: '#aaa',
                                fontFamily: "'Raleway', sans-serif", fontSize: '11px',
                                letterSpacing: '0.2em', textTransform: 'uppercase',
                                cursor: 'pointer', padding: '4px 0', transition: 'color 0.3s ease',
                            }}
                                onMouseEnter={e => e.target.style.color = '#D4AF37'}
                                onMouseLeave={e => e.target.style.color = '#aaa'}
                            >{link}</button>
                        ))}
                    </nav>

                    {/* Hamburger */}
                    <button
                        onClick={() => setMenuOpen(!menuOpen)}
                        className="hamburger-btn"
                        style={{
                            background: 'none', border: 'none', cursor: 'pointer',
                            display: 'none', flexDirection: 'column',
                            gap: '5px', padding: '4px',
                        }}
                        aria-label="Toggle menu"
                    >
                        <span style={{
                            display: 'block', width: '24px', height: '1.5px',
                            background: menuOpen ? '#D4AF37' : '#fff',
                            transition: 'all 0.3s ease',
                            transform: menuOpen ? 'rotate(45deg) translate(5px, 5px)' : 'none',
                        }} />
                        <span style={{
                            display: 'block', width: '24px', height: '1.5px',
                            background: menuOpen ? '#D4AF37' : '#fff',
                            transition: 'all 0.3s ease',
                            opacity: menuOpen ? 0 : 1,
                        }} />
                        <span style={{
                            display: 'block', width: '24px', height: '1.5px',
                            background: menuOpen ? '#D4AF37' : '#fff',
                            transition: 'all 0.3s ease',
                            transform: menuOpen ? 'rotate(-45deg) translate(5px, -5px)' : 'none',
                        }} />
                    </button>
                </div>

                {/* Mobile Menu */}
                <div style={{
                    maxHeight: menuOpen ? '300px' : '0',
                    overflow: 'hidden',
                    transition: 'max-height 0.4s ease',
                }}>
                    <nav style={{
                        display: 'flex', flexDirection: 'column',
                        padding: menuOpen ? '16px 0 24px' : '0',
                        borderTop: menuOpen ? '1px solid rgba(212,175,55,0.1)' : 'none',
                        gap: '4px',
                    }}>
                        {navLinks.map((link) => (
                            <button key={link} onClick={() => scrollTo(link)} style={{
                                background: 'none', border: 'none', color: '#aaa',
                                fontFamily: "'Raleway', sans-serif", fontSize: '12px',
                                letterSpacing: '0.25em', textTransform: 'uppercase',
                                cursor: 'pointer', padding: '14px 0', textAlign: 'left',
                                borderBottom: '1px solid rgba(255,255,255,0.04)',
                                transition: 'color 0.3s ease',
                            }}
                                onMouseEnter={e => e.target.style.color = '#D4AF37'}
                                onMouseLeave={e => e.target.style.color = '#aaa'}
                            >{link}</button>
                        ))}
                    </nav>
                </div>
            </header>

            <style>{`
        @media (max-width: 768px) {
          .desktop-nav { display: none !important; }
          .hamburger-btn { display: flex !important; }
        }
      `}</style>
        </>
    )
}

export default Header