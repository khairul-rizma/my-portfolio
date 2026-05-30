import React, { useEffect, useRef, useState } from 'react'

const About = () => {
    const sectionRef = useRef(null)
    const [visible, setVisible] = useState(false)

    useEffect(() => {
        const observer = new IntersectionObserver(
            ([entry]) => { if (entry.isIntersecting) setVisible(true) },
            { threshold: 0.1 }
        )
        if (sectionRef.current) observer.observe(sectionRef.current)
        return () => observer.disconnect()
    }, [])

    const stats = [
        { number: '3+', label: 'Years Exp.' },
        { number: '20+', label: 'Projects' },
        { number: '10+', label: 'Clients' },
    ]

    return (
        <section id="about" ref={sectionRef} style={{
            background: '#0d0d0d', padding: '100px 5%',
            position: 'relative', overflow: 'hidden',
        }}>
            <div style={{ maxWidth: '1200px', margin: '0 auto' }}>
                {/* Label */}
                <div style={{
                    display: 'flex', alignItems: 'center', gap: '16px', marginBottom: '52px',
                    opacity: visible ? 1 : 0, transition: 'all 0.8s ease',
                }}>
                    <div style={{ width: '40px', height: '1px', background: '#D4AF37', flexShrink: 0 }} />
                    <span style={{
                        fontFamily: "'Raleway', sans-serif", fontSize: '11px',
                        letterSpacing: '0.3em', color: '#D4AF37', textTransform: 'uppercase',
                    }}>02. About Me</span>
                </div>

                {/* Two-column → stacks on mobile */}
                <div className="about-grid" style={{
                    display: 'grid',
                    gridTemplateColumns: '1fr 1fr',
                    gap: '72px', alignItems: 'start',
                }}>
                    {/* Left */}
                    <div style={{
                        opacity: visible ? 1 : 0,
                        transform: visible ? 'translateX(0)' : 'translateX(-30px)',
                        transition: 'all 0.9s ease 0.1s',
                    }}>
                        <h2 style={{
                            fontFamily: "'Playfair Display', serif",
                            fontSize: 'clamp(28px, 4vw, 52px)',
                            fontWeight: '700', color: '#fff',
                            lineHeight: 1.15, margin: '0 0 24px',
                        }}>
                            Passionate about<br />
                            <span style={{ color: '#D4AF37', fontStyle: 'italic' }}>beautiful</span> interfaces
                        </h2>
                        <p style={{
                            fontFamily: "'Raleway', sans-serif", fontSize: '15px',
                            lineHeight: '1.9', color: '#777', marginBottom: '20px',
                        }}>
                            I'm a Technical Support Engineer & Aspiring Frontend Developer with a deep passion for crafting interfaces that don't
                            just work — they delight. I believe great software is born at the intersection
                            of thoughtful engineering and refined design sensibility.
                        </p>
                        <p style={{
                            fontFamily: "'Raleway', sans-serif", fontSize: '15px',
                            lineHeight: '1.9', color: '#777', marginBottom: '36px',
                        }}>
                            My approach combines pixel-perfect attention to detail with performance-first
                            thinking. Every component I build is crafted to be accessible, maintainable,
                            and visually compelling.
                        </p>
                        <div style={{ paddingTop: '24px', borderTop: '1px solid rgba(212,175,55,0.2)' }}>
                            <span style={{
                                fontFamily: "'Playfair Display', serif",
                                fontStyle: 'italic', fontSize: '22px', color: '#D4AF37',
                            }}>Khairul Rizma</span>
                        </div>
                    </div>

                    {/* Right */}
                    <div style={{
                        opacity: visible ? 1 : 0,
                        transform: visible ? 'translateX(0)' : 'translateX(30px)',
                        transition: 'all 0.9s ease 0.2s',
                    }}>
                        {/* Stats */}
                        <div style={{
                            display: 'grid', gridTemplateColumns: 'repeat(3, 1fr)',
                            gap: '1px', background: 'rgba(212,175,55,0.15)',
                            border: '1px solid rgba(212,175,55,0.15)', marginBottom: '40px',
                        }}>
                            {stats.map((s, i) => (
                                <div key={i} style={{
                                    background: '#0d0d0d', padding: '28px 12px', textAlign: 'center',
                                }}>
                                    <div style={{
                                        fontFamily: "'Playfair Display', serif",
                                        fontSize: 'clamp(28px, 4vw, 40px)',
                                        fontWeight: '700', color: '#D4AF37',
                                        lineHeight: 1, marginBottom: '8px',
                                    }}>{s.number}</div>
                                    <div style={{
                                        fontFamily: "'Raleway', sans-serif",
                                        fontSize: '10px', letterSpacing: '0.1em',
                                        color: '#666', textTransform: 'uppercase',
                                    }}>{s.label}</div>
                                </div>
                            ))}
                        </div>

                        {/* Details */}
                        {[
                            { label: 'Role', value: 'Technical Support Engineer & Aspiring Frontend Developer' },
                            { label: 'Location', value: 'Kuala Lumpur, Malaysia' },
                            { label: 'Availability', value: 'Open for new opportunities' },
                            { label: 'Focus', value: 'Technical Support • Frontend Development • JavaScript • React' },
                        ].map((item, i) => (
                            <div key={i} style={{
                                display: 'flex', justifyContent: 'space-between', alignItems: 'center',
                                padding: '14px 0', borderBottom: '1px solid rgba(255,255,255,0.05)',
                                flexWrap: 'wrap', gap: '8px',
                            }}>
                                <span style={{
                                    fontFamily: "'Raleway', sans-serif", fontSize: '11px',
                                    letterSpacing: '0.2em', color: '#555', textTransform: 'uppercase',
                                }}>{item.label}</span>
                                <span style={{
                                    fontFamily: "'Raleway', sans-serif", fontSize: '13px',
                                    color: item.label === 'Availability' ? '#4ade80' : '#ccc',
                                }}>{item.value}</span>
                            </div>
                        ))}
                    </div>
                </div>
            </div>

            <style>{`
        @media (max-width: 768px) {
          .about-grid { grid-template-columns: 1fr !important; gap: 48px !important; }
        }
      `}</style>
        </section>
    )
}

export default About