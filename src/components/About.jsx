import React, { useEffect, useRef, useState } from 'react'

const About = () => {
    const sectionRef = useRef(null)
    const [visible, setVisible] = useState(false)

    useEffect(() => {
        const observer = new IntersectionObserver(
            ([entry]) => { if (entry.isIntersecting) setVisible(true) },
            { threshold: 0.2 }
        )
        if (sectionRef.current) observer.observe(sectionRef.current)
        return () => observer.disconnect()
    }, [])

    const stats = [
        { number: '3+', label: 'Years Experience' },
        { number: '20+', label: 'Projects Completed' },
        { number: '10+', label: 'Happy Clients' },
    ]

    return (
        <section
            id="about"
            ref={sectionRef}
            style={{
                background: '#0d0d0d',
                padding: '120px 5%',
                position: 'relative',
                overflow: 'hidden',
            }}
        >
            {/* Decorative text */}
            <div style={{
                position: 'absolute',
                right: '-20px',
                top: '50%',
                transform: 'translateY(-50%) rotate(90deg)',
                fontFamily: "'Playfair Display', serif",
                fontSize: '120px',
                fontWeight: '700',
                color: 'rgba(212,175,55,0.03)',
                letterSpacing: '0.1em',
                userSelect: 'none',
            }}>ABOUT</div>

            <div style={{ maxWidth: '1200px', margin: '0 auto' }}>
                {/* Section label */}
                <div style={{
                    display: 'flex',
                    alignItems: 'center',
                    gap: '16px',
                    marginBottom: '60px',
                    opacity: visible ? 1 : 0,
                    transform: visible ? 'translateY(0)' : 'translateY(20px)',
                    transition: 'all 0.8s ease',
                }}>
                    <div style={{ width: '40px', height: '1px', background: '#D4AF37' }} />
                    <span style={{
                        fontFamily: "'Raleway', sans-serif",
                        fontSize: '11px',
                        letterSpacing: '0.3em',
                        color: '#D4AF37',
                        textTransform: 'uppercase',
                    }}>02. About Me</span>
                </div>

                {/* Two-column layout */}
                <div style={{
                    display: 'grid',
                    gridTemplateColumns: '1fr 1fr',
                    gap: '80px',
                    alignItems: 'start',
                }}>
                    {/* Left col */}
                    <div style={{
                        opacity: visible ? 1 : 0,
                        transform: visible ? 'translateX(0)' : 'translateX(-30px)',
                        transition: 'all 0.9s ease 0.1s',
                    }}>
                        <h2 style={{
                            fontFamily: "'Playfair Display', serif",
                            fontSize: 'clamp(32px, 4vw, 52px)',
                            fontWeight: '700',
                            color: '#fff',
                            lineHeight: 1.15,
                            margin: '0 0 28px',
                        }}>
                            Passionate about<br />
                            <span style={{ color: '#D4AF37', fontStyle: 'italic' }}>beautiful</span> interfaces
                        </h2>

                        <p style={{
                            fontFamily: "'Raleway', sans-serif",
                            fontSize: '15px',
                            lineHeight: '1.9',
                            color: '#777',
                            marginBottom: '20px',
                        }}>
                            I'm a Frontend Developer with a deep passion for crafting interfaces that don't
                            just work — they delight. I believe great software is born at the intersection
                            of thoughtful engineering and refined design sensibility.
                        </p>

                        <p style={{
                            fontFamily: "'Raleway', sans-serif",
                            fontSize: '15px',
                            lineHeight: '1.9',
                            color: '#777',
                            marginBottom: '40px',
                        }}>
                            My approach combines pixel-perfect attention to detail with performance-first
                            thinking. Every component I build is crafted to be accessible, maintainable,
                            and visually compelling.
                        </p>

                        {/* Signature */}
                        <div style={{
                            paddingTop: '24px',
                            borderTop: '1px solid rgba(212,175,55,0.2)',
                        }}>
                            <span style={{
                                fontFamily: "'Playfair Display', serif",
                                fontStyle: 'italic',
                                fontSize: '24px',
                                color: '#D4AF37',
                            }}>Khairul Rizma</span>
                        </div>
                    </div>

                    {/* Right col */}
                    <div style={{
                        opacity: visible ? 1 : 0,
                        transform: visible ? 'translateX(0)' : 'translateX(30px)',
                        transition: 'all 0.9s ease 0.2s',
                    }}>
                        {/* Stats */}
                        <div style={{
                            display: 'grid',
                            gridTemplateColumns: 'repeat(3, 1fr)',
                            gap: '1px',
                            background: 'rgba(212,175,55,0.15)',
                            border: '1px solid rgba(212,175,55,0.15)',
                            marginBottom: '48px',
                        }}>
                            {stats.map((s, i) => (
                                <div key={i} style={{
                                    background: '#0d0d0d',
                                    padding: '32px 20px',
                                    textAlign: 'center',
                                }}>
                                    <div style={{
                                        fontFamily: "'Playfair Display', serif",
                                        fontSize: '40px',
                                        fontWeight: '700',
                                        color: '#D4AF37',
                                        lineHeight: 1,
                                        marginBottom: '8px',
                                    }}>{s.number}</div>
                                    <div style={{
                                        fontFamily: "'Raleway', sans-serif",
                                        fontSize: '11px',
                                        letterSpacing: '0.15em',
                                        color: '#666',
                                        textTransform: 'uppercase',
                                    }}>{s.label}</div>
                                </div>
                            ))}
                        </div>

                        {/* Personal details */}
                        {[
                            { label: 'Role', value: 'Frontend Developer' },
                            { label: 'Location', value: 'Kuala Lumpur, Malaysia' },
                            { label: 'Availability', value: 'Open to Work' },
                            { label: 'Focus', value: 'React • JavaScript • TypeScript • UI/UX' },
                        ].map((item, i) => (
                            <div key={i} style={{
                                display: 'flex',
                                justifyContent: 'space-between',
                                alignItems: 'center',
                                padding: '16px 0',
                                borderBottom: '1px solid rgba(255,255,255,0.05)',
                            }}>
                                <span style={{
                                    fontFamily: "'Raleway', sans-serif",
                                    fontSize: '11px',
                                    letterSpacing: '0.2em',
                                    color: '#555',
                                    textTransform: 'uppercase',
                                }}>{item.label}</span>
                                <span style={{
                                    fontFamily: "'Raleway', sans-serif",
                                    fontSize: '14px',
                                    color: item.label === 'Availability' ? '#4ade80' : '#ccc',
                                }}>{item.value}</span>
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </section>
    )
}

export default About