import React, { useEffect, useRef, useState } from 'react'

const Contact = () => {
    const sectionRef = useRef(null)
    const [visible, setVisible] = useState(false)
    const [formState, setFormState] = useState({ name: '', email: '', message: '' })
    const [submitted, setSubmitted] = useState(false)

    useEffect(() => {
        const observer = new IntersectionObserver(
            ([entry]) => { if (entry.isIntersecting) setVisible(true) },
            { threshold: 0.1 }
        )
        if (sectionRef.current) observer.observe(sectionRef.current)
        return () => observer.disconnect()
    }, [])

    const handleSubmit = (e) => {
        e.preventDefault()
        setSubmitted(true)
    }

    const inputStyle = {
        width: '100%', background: 'transparent', border: 'none',
        borderBottom: '1px solid rgba(255,255,255,0.1)',
        padding: '14px 0', color: '#fff',
        fontFamily: "'Raleway', sans-serif", fontSize: '14px',
        outline: 'none', transition: 'border-color 0.3s ease', boxSizing: 'border-box',
    }

    const socials = [
        { label: 'GitHub', href: 'https://github.com/khairul-rizma' },
        { label: 'LinkedIn', href: 'https://www.linkedin.com/in/mohd-khairul-rizma-mohd-mazelan-871082161/' },
        { label: 'Phone Number', href: '+6011-1100 9091' },
    ]

    return (
        <section id="contact" ref={sectionRef} style={{
            background: '#080808', padding: '100px 5% 72px',
            position: 'relative', overflow: 'hidden',
        }}>
            <div style={{ maxWidth: '1200px', margin: '0 auto' }}>
                {/* Label */}
                <div style={{
                    display: 'flex', alignItems: 'center', gap: '16px', marginBottom: '20px',
                    opacity: visible ? 1 : 0, transition: 'all 0.7s ease',
                }}>
                    <div style={{ width: '40px', height: '1px', background: '#D4AF37', flexShrink: 0 }} />
                    <span style={{
                        fontFamily: "'Raleway', sans-serif", fontSize: '11px',
                        letterSpacing: '0.3em', color: '#D4AF37', textTransform: 'uppercase',
                    }}>05. Contact</span>
                </div>

                {/* Two-col → single col on mobile */}
                <div className="contact-grid" style={{
                    display: 'grid', gridTemplateColumns: '1fr 1fr',
                    gap: '80px', alignItems: 'start',
                }}>
                    {/* Left */}
                    <div style={{
                        opacity: visible ? 1 : 0,
                        transform: visible ? 'translateX(0)' : 'translateX(-30px)',
                        transition: 'all 0.9s ease 0.1s',
                    }}>
                        <h2 style={{
                            fontFamily: "'Playfair Display', serif",
                            fontSize: 'clamp(32px, 4vw, 58px)',
                            fontWeight: '700', color: '#fff',
                            lineHeight: 1.1, margin: '0 0 24px',
                        }}>
                            Let's create<br />
                            something <span style={{ color: '#D4AF37', fontStyle: 'italic' }}>great</span>
                        </h2>

                        <p style={{
                            fontFamily: "'Raleway', sans-serif", fontSize: '15px',
                            lineHeight: '1.9', color: '#666',
                            marginBottom: '40px', maxWidth: '400px',
                        }}>
                            I'm currently open to new opportunities. Whether you have a project in mind,
                            a question, or just want to connect — my inbox is always open.
                        </p>

                        <a href="mailto:mohdkhairul9797@gmail.com" style={{
                            fontFamily: "'Playfair Display', serif",
                            fontStyle: 'italic', fontSize: '20px',
                            color: '#D4AF37', textDecoration: 'none',
                            borderBottom: '1px solid rgba(212,175,55,0.3)',
                            paddingBottom: '4px', transition: 'border-color 0.3s',
                            display: 'inline-block', marginBottom: '44px',
                        }}
                            onMouseEnter={e => e.target.style.borderColor = '#D4AF37'}
                            onMouseLeave={e => e.target.style.borderColor = 'rgba(212,175,55,0.3)'}
                        >mohdkhairul9797@gmail.com</a>

                        <div style={{ display: 'flex', gap: '28px', flexWrap: 'wrap' }}>
                            {socials.map((s, i) => (
                                <a key={i} href={s.href} target="_blank" rel="noreferrer" style={{
                                    fontFamily: "'Raleway', sans-serif", fontSize: '11px',
                                    letterSpacing: '0.2em', color: '#555',
                                    textDecoration: 'none', textTransform: 'uppercase',
                                    transition: 'color 0.3s ease',
                                }}
                                    onMouseEnter={e => e.target.style.color = '#D4AF37'}
                                    onMouseLeave={e => e.target.style.color = '#555'}
                                >{s.label}</a>
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
                                padding: '52px 32px',
                                border: '1px solid rgba(212,175,55,0.2)',
                                textAlign: 'center',
                            }}>
                                <div style={{ fontSize: '36px', marginBottom: '16px', color: '#D4AF37' }}>✦</div>
                                <h3 style={{
                                    fontFamily: "'Playfair Display', serif",
                                    fontSize: '22px', color: '#D4AF37', marginBottom: '10px',
                                }}>Message Sent</h3>
                                <p style={{
                                    fontFamily: "'Raleway', sans-serif",
                                    fontSize: '14px', color: '#666',
                                }}>Thank you for reaching out. I'll be in touch shortly.</p>
                            </div>
                        ) : (
                            <form onSubmit={handleSubmit} style={{ display: 'flex', flexDirection: 'column', gap: '32px' }}>
                                {[
                                    { label: 'Your Name', key: 'name', type: 'text' },
                                    { label: 'Email Address', key: 'email', type: 'email' },
                                ].map((field) => (
                                    <div key={field.key}>
                                        <label style={{
                                            fontFamily: "'Raleway', sans-serif", fontSize: '10px',
                                            letterSpacing: '0.25em', color: '#D4AF37',
                                            textTransform: 'uppercase', display: 'block', marginBottom: '8px',
                                        }}>{field.label}</label>
                                        <input
                                            type={field.type} required
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
                                        fontFamily: "'Raleway', sans-serif", fontSize: '10px',
                                        letterSpacing: '0.25em', color: '#D4AF37',
                                        textTransform: 'uppercase', display: 'block', marginBottom: '8px',
                                    }}>Message</label>
                                    <textarea
                                        required rows={5}
                                        value={formState.message}
                                        onChange={e => setFormState(s => ({ ...s, message: e.target.value }))}
                                        style={{ ...inputStyle, resize: 'none' }}
                                        onFocus={e => e.target.style.borderBottomColor = '#D4AF37'}
                                        onBlur={e => e.target.style.borderBottomColor = 'rgba(255,255,255,0.1)'}
                                    />
                                </div>

                                <button type="submit" style={{
                                    alignSelf: 'flex-start',
                                    padding: '15px 40px',
                                    background: '#D4AF37', color: '#080808',
                                    border: 'none',
                                    fontFamily: "'Raleway', sans-serif",
                                    fontWeight: '700', fontSize: '11px',
                                    letterSpacing: '0.2em', textTransform: 'uppercase',
                                    cursor: 'pointer', transition: 'all 0.3s ease',
                                    width: '100%',
                                }}
                                    onMouseEnter={e => { e.target.style.background = '#F5E17A'; e.target.style.transform = 'translateY(-2px)' }}
                                    onMouseLeave={e => { e.target.style.background = '#D4AF37'; e.target.style.transform = 'translateY(0)' }}
                                >Send Message</button>
                            </form>
                        )}
                    </div>
                </div>

                {/* Footer */}
                <div style={{
                    marginTop: '100px', paddingTop: '28px',
                    borderTop: '1px solid rgba(255,255,255,0.05)',
                    display: 'flex', justifyContent: 'space-between',
                    alignItems: 'center', flexWrap: 'wrap', gap: '12px',
                }}>
                    <span style={{
                        fontFamily: "'Raleway', sans-serif", fontSize: '12px', color: '#333',
                    }}>© 2026 Khairul Rizma. All rights reserved.</span>
                    <span style={{
                        fontFamily: "'Playfair Display', serif",
                        fontStyle: 'italic', fontSize: '13px', color: '#444',
                    }}>Keep Building</span>
                </div>
            </div>

            <style>{`
        @media (max-width: 768px) {
          .contact-grid { grid-template-columns: 1fr !important; gap: 52px !important; }
        }
      `}</style>
        </section>
    )
}

export default Contact