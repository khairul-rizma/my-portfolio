import React, { useEffect, useRef, useState } from 'react'

const Contact = () => {
    const sectionRef = useRef(null)
    const [visible, setVisible] = useState(false)
    const [formState, setFormState] = useState({ name: '', email: '', message: '' })
    const [submitted, setSubmitted] = useState(false)

    useEffect(() => {
        const observer = new IntersectionObserver(
            ([entry]) => { if (entry.isIntersecting) setVisible(true) },
            { threshold: 0.15 }
        )
        if (sectionRef.current) observer.observe(sectionRef.current)
        return () => observer.disconnect()
    }, [])

    const handleSubmit = (e) => {
        e.preventDefault()
        setSubmitted(true)
    }

    const inputStyle = {
        width: '100%',
        background: 'transparent',
        border: 'none',
        borderBottom: '1px solid rgba(255,255,255,0.1)',
        padding: '16px 0',
        color: '#fff',
        fontFamily: "'Raleway', sans-serif",
        fontSize: '14px',
        outline: 'none',
        transition: 'border-color 0.3s ease',
        boxSizing: 'border-box',
    }

    const socials = [
        { label: 'GitHub', href: 'https://github.com/khairul-rizma' },
        { label: 'LinkedIn', href: 'https://www.linkedin.com/in/mohd-khairul-rizma-mohd-mazelan-871082161/' },
        { label: 'Twitter', href: 'https://twitter.com/' },
    ]

    return (
        <section
            id="contact"
            ref={sectionRef}
            style={{
                background: '#080808',
                padding: '120px 5% 80px',
                position: 'relative',
                overflow: 'hidden',
            }}
        >
            {/* Decorative bg text */}
            <div style={{
                position: 'absolute',
                left: '-60px',
                bottom: '40px',
                fontFamily: "'Playfair Display', serif",
                fontSize: '180px',
                fontWeight: '700',
                color: 'rgba(212,175,55,0.025)',
                userSelect: 'none',
                lineHeight: 1,
            }}>CONTACT</div>

            <div style={{ maxWidth: '1200px', margin: '0 auto' }}>
                {/* Section label */}
                <div style={{
                    display: 'flex',
                    alignItems: 'center',
                    gap: '16px',
                    marginBottom: '20px',
                    opacity: visible ? 1 : 0,
                    transition: 'all 0.7s ease',
                }}>
                    <div style={{ width: '40px', height: '1px', background: '#D4AF37' }} />
                    <span style={{
                        fontFamily: "'Raleway', sans-serif",
                        fontSize: '11px',
                        letterSpacing: '0.3em',
                        color: '#D4AF37',
                        textTransform: 'uppercase',
                    }}>05. Contact</span>
                </div>

                <div style={{
                    display: 'grid',
                    gridTemplateColumns: '1fr 1fr',
                    gap: '100px',
                    alignItems: 'start',
                }}>
                    {/* Left: CTA text */}
                    <div style={{
                        opacity: visible ? 1 : 0,
                        transform: visible ? 'translateX(0)' : 'translateX(-30px)',
                        transition: 'all 0.9s ease 0.1s',
                    }}>
                        <h2 style={{
                            fontFamily: "'Playfair Display', serif",
                            fontSize: 'clamp(36px, 4vw, 58px)',
                            fontWeight: '700',
                            color: '#fff',
                            lineHeight: 1.1,
                            margin: '0 0 28px',
                        }}>
                            Let's create<br />
                            something <span style={{ color: '#D4AF37', fontStyle: 'italic' }}>great</span>
                        </h2>

                        <p style={{
                            fontFamily: "'Raleway', sans-serif",
                            fontSize: '15px',
                            lineHeight: '1.9',
                            color: '#666',
                            marginBottom: '52px',
                            maxWidth: '400px',
                        }}>
                            I'm currently open to new opportunities. Whether you have a project in mind,
                            a question, or just want to connect — my inbox is always open.
                        </p>

                        {/* Email link */}
                        <a
                            href="mailto:your@email.com"
                            style={{
                                fontFamily: "'Playfair Display', serif",
                                fontStyle: 'italic',
                                fontSize: '22px',
                                color: '#D4AF37',
                                textDecoration: 'none',
                                borderBottom: '1px solid rgba(212,175,55,0.3)',
                                paddingBottom: '4px',
                                transition: 'border-color 0.3s',
                                display: 'inline-block',
                                marginBottom: '52px',
                            }}
                            onMouseEnter={e => e.target.style.borderColor = '#D4AF37'}
                            onMouseLeave={e => e.target.style.borderColor = 'rgba(212,175,55,0.3)'}
                        >
                            mohdkhairul9797@gmail.com
                        </a>

                        {/* Socials */}
                        <div style={{ display: 'flex', gap: '32px' }}>
                            {socials.map((s, i) => (
                                <a
                                    key={i}
                                    href={s.href}
                                    target="_blank"
                                    rel="noreferrer"
                                    style={{
                                        fontFamily: "'Raleway', sans-serif",
                                        fontSize: '11px',
                                        letterSpacing: '0.2em',
                                        color: '#555',
                                        textDecoration: 'none',
                                        textTransform: 'uppercase',
                                        transition: 'color 0.3s ease',
                                    }}
                                    onMouseEnter={e => e.target.style.color = '#D4AF37'}
                                    onMouseLeave={e => e.target.style.color = '#555'}
                                >
                                    {s.label}
                                </a>
                            ))}
                        </div>
                    </div>

                    {/* Right: Form */}
                    <div style={{
                        opacity: visible ? 1 : 0,
                        transform: visible ? 'translateX(0)' : 'translateX(30px)',
                        transition: 'all 0.9s ease 0.2s',
                    }}>
                        {submitted ? (
                            <div style={{
                                padding: '60px 40px',
                                border: '1px solid rgba(212,175,55,0.2)',
                                textAlign: 'center',
                            }}>
                                <div style={{ fontSize: '40px', marginBottom: '16px' }}>✦</div>
                                <h3 style={{
                                    fontFamily: "'Playfair Display', serif",
                                    fontSize: '24px',
                                    color: '#D4AF37',
                                    marginBottom: '12px',
                                }}>Message Sent</h3>
                                <p style={{
                                    fontFamily: "'Raleway', sans-serif",
                                    fontSize: '14px',
                                    color: '#666',
                                }}>Thank you for reaching out. I'll be in touch shortly.</p>
                            </div>
                        ) : (
                            <form onSubmit={handleSubmit} style={{ display: 'flex', flexDirection: 'column', gap: '36px' }}>
                                {[
                                    { label: 'Your Name', key: 'name', type: 'text' },
                                    { label: 'Email Address', key: 'email', type: 'email' },
                                ].map((field) => (
                                    <div key={field.key} style={{ position: 'relative' }}>
                                        <label style={{
                                            fontFamily: "'Raleway', sans-serif",
                                            fontSize: '10px',
                                            letterSpacing: '0.25em',
                                            color: '#D4AF37',
                                            textTransform: 'uppercase',
                                            display: 'block',
                                            marginBottom: '8px',
                                        }}>{field.label}</label>
                                        <input
                                            type={field.type}
                                            required
                                            value={formState[field.key]}
                                            onChange={e => setFormState(s => ({ ...s, [field.key]: e.target.value }))}
                                            style={inputStyle}
                                            onFocus={e => e.target.style.borderBottomColor = '#D4AF37'}
                                            onBlur={e => e.target.style.borderBottomColor = 'rgba(255,255,255,0.1)'}
                                        />
                                    </div>
                                ))}

                                <div>
                                    <label style={{
                                        fontFamily: "'Raleway', sans-serif",
                                        fontSize: '10px',
                                        letterSpacing: '0.25em',
                                        color: '#D4AF37',
                                        textTransform: 'uppercase',
                                        display: 'block',
                                        marginBottom: '8px',
                                    }}>Message</label>
                                    <textarea
                                        required
                                        rows={5}
                                        value={formState.message}
                                        onChange={e => setFormState(s => ({ ...s, message: e.target.value }))}
                                        style={{ ...inputStyle, resize: 'none' }}
                                        onFocus={e => e.target.style.borderBottomColor = '#D4AF37'}
                                        onBlur={e => e.target.style.borderBottomColor = 'rgba(255,255,255,0.1)'}
                                    />
                                </div>

                                <button
                                    type="submit"
                                    style={{
                                        alignSelf: 'flex-start',
                                        padding: '16px 44px',
                                        background: '#D4AF37',
                                        color: '#080808',
                                        border: 'none',
                                        fontFamily: "'Raleway', sans-serif",
                                        fontWeight: '700',
                                        fontSize: '12px',
                                        letterSpacing: '0.2em',
                                        textTransform: 'uppercase',
                                        cursor: 'pointer',
                                        transition: 'all 0.3s ease',
                                    }}
                                    onMouseEnter={e => {
                                        e.target.style.background = '#F5E17A'
                                        e.target.style.transform = 'translateY(-2px)'
                                    }}
                                    onMouseLeave={e => {
                                        e.target.style.background = '#D4AF37'
                                        e.target.style.transform = 'translateY(0)'
                                    }}
                                >
                                    Send Message
                                </button>
                            </form>
                        )}
                    </div>
                </div>

                {/* Footer bottom */}
                <div style={{
                    marginTop: '120px',
                    paddingTop: '32px',
                    borderTop: '1px solid rgba(255,255,255,0.05)',
                    display: 'flex',
                    justifyContent: 'space-between',
                    alignItems: 'center',
                }}>
                    <span style={{
                        fontFamily: "'Raleway', sans-serif",
                        fontSize: '12px',
                        color: '#333',
                    }}>© 2026 Khairul Rizma. All rights reserved.</span>
                    <span style={{
                        fontFamily: "'Playfair Display', serif",
                        fontStyle: 'italic',
                        fontSize: '13px',
                        color: '#444',
                    }}>Crafted with care ✦</span>
                </div>
            </div>
        </section>
    )
}

export default Contact