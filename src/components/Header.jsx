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
        <header
            style={{
                position: 'fixed',
                top: 0,
                left: 0,
                right: 0,
                zIndex: 100,
                transition: 'all 0.4s ease',
                background: scrolled ? 'rgba(8, 8, 8, 0.92)' : 'transparent',
                backdropFilter: scrolled ? 'blur(12px)' : 'none',
                borderBottom: scrolled ? '1px solid rgba(212,175,55,0.15)' : '1px solid transparent',
                padding: '0 5%',
            }}
        >
            <div style={{
                maxWidth: '1200px',
                margin: '0 auto',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'space-between',
                height: '70px',
            }}>
                {/* Logo */}
                <div
                    onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
                    style={{ cursor: 'pointer', display: 'flex', alignItems: 'center', gap: '10px' }}
                >
                    <div style={{
                        width: '36px', height: '36px',
                        border: '1.5px solid #D4AF37',
                        display: 'flex', alignItems: 'center', justifyContent: 'center',
                        transform: 'rotate(45deg)',
                    }}>
                        <span style={{
                            fontFamily: "'Playfair Display', serif",
                            color: '#D4AF37',
                            fontSize: '14px',
                            fontWeight: '700',
                            transform: 'rotate(-45deg)',
                        }}>P</span>
                    </div>
                    <span style={{
                        fontFamily: "'Playfair Display', serif",
                        color: '#fff',
                        fontSize: '18px',
                        letterSpacing: '0.08em',
                    }}>Portfolio</span>
                </div>

                {/* Desktop Nav */}
                <nav style={{ display: 'flex', gap: '40px', alignItems: 'center' }}>
                    {navLinks.map((link) => (
                        <button
                            key={link}
                            onClick={() => scrollTo(link)}
                            style={{
                                background: 'none',
                                border: 'none',
                                color: '#aaa',
                                fontFamily: "'Raleway', sans-serif",
                                fontSize: '12px',
                                letterSpacing: '0.2em',
                                textTransform: 'uppercase',
                                cursor: 'pointer',
                                padding: '4px 0',
                                position: 'relative',
                                transition: 'color 0.3s ease',
                            }}
                            onMouseEnter={e => e.target.style.color = '#D4AF37'}
                            onMouseLeave={e => e.target.style.color = '#aaa'}
                        >
                            {link}
                        </button>
                    ))}
                </nav>
            </div>
        </header>
    )
}

export default Header