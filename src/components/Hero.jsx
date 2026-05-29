import React, { useEffect, useRef } from 'react'

const Hero = () => {
    const lineRef = useRef(null)

    useEffect(() => {
        const el = lineRef.current
        if (el) {
            el.style.width = '0%'
            setTimeout(() => {
                el.style.transition = 'width 1.2s cubic-bezier(0.77,0,0.175,1) 0.8s'
                el.style.width = '80px'
            }, 100)
        }
    }, [])

    const scrollToProjects = () => {
        document.getElementById('projects')?.scrollIntoView({ behavior: 'smooth' })
    }

    const scrollToContact = () => {
        document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' })
    }

    return (
        <section
            id="hero"
            style={{
                minHeight: '100vh',
                display: 'flex',
                alignItems: 'center',
                background: '#080808',
                position: 'relative',
                overflow: 'hidden',
                padding: '0 5%',
            }}
        >
            {/* Background grid lines */}
            <div style={{
                position: 'absolute',
                inset: 0,
                backgroundImage: `
          linear-gradient(rgba(212,175,55,0.04) 1px, transparent 1px),
          linear-gradient(90deg, rgba(212,175,55,0.04) 1px, transparent 1px)
        `,
                backgroundSize: '80px 80px',
                pointerEvents: 'none',
            }} />

            {/* Large decorative number */}
            <div style={{
                position: 'absolute',
                right: '5%',
                top: '50%',
                transform: 'translateY(-50%)',
                fontFamily: "'Playfair Display', serif",
                fontSize: 'clamp(160px, 22vw, 320px)',
                fontWeight: '700',
                color: 'rgba(212,175,55,0.04)',
                lineHeight: 1,
                userSelect: 'none',
                letterSpacing: '-0.02em',
            }}>01</div>

            {/* Content */}
            <div style={{
                maxWidth: '1200px',
                margin: '0 auto',
                width: '100%',
                paddingTop: '80px',
            }}>
                {/* Eyebrow */}
                <div style={{
                    display: 'flex',
                    alignItems: 'center',
                    gap: '16px',
                    marginBottom: '32px',
                    animation: 'fadeUp 0.8s ease 0.1s both',
                }}>
                    <div style={{ width: '40px', height: '1px', background: '#D4AF37' }} />
                    <span style={{
                        fontFamily: "'Raleway', sans-serif",
                        fontSize: '11px',
                        letterSpacing: '0.3em',
                        color: '#D4AF37',
                        textTransform: 'uppercase',
                    }}>Frontend Developer</span>
                </div>

                {/* Name */}
                <h1 style={{
                    fontFamily: "'Playfair Display', serif",
                    fontSize: 'clamp(48px, 8vw, 100px)',
                    fontWeight: '700',
                    color: '#fff',
                    lineHeight: 1.05,
                    margin: '0 0 8px',
                    animation: 'fadeUp 0.8s ease 0.25s both',
                    letterSpacing: '-0.01em',
                }}>
                    Khairul Rizma
                </h1>

                {/* Subtitle with gold underline */}
                <div style={{ position: 'relative', display: 'inline-block', marginBottom: '40px' }}>
                    <h2 style={{
                        fontFamily: "'Playfair Display', serif",
                        fontSize: 'clamp(32px, 5vw, 64px)',
                        fontWeight: '400',
                        fontStyle: 'italic',
                        color: '#888',
                        margin: 0,
                        animation: 'fadeUp 0.8s ease 0.4s both',
                        letterSpacing: '0.02em',
                    }}>
                        Technical Support Engineer
                    </h2>
                    <div ref={lineRef} style={{
                        height: '2px',
                        background: 'linear-gradient(90deg, #D4AF37, #F5E17A)',
                        marginTop: '8px',
                        width: '0px',
                    }} />
                </div>

                {/* Description */}
                <p style={{
                    fontFamily: "'Raleway', sans-serif",
                    fontSize: '16px',
                    lineHeight: '1.8',
                    color: '#666',
                    maxWidth: '520px',
                    marginBottom: '52px',
                    animation: 'fadeUp 0.8s ease 0.55s both',
                }}>
                    I build beautiful, performant web interfaces that blend thoughtful design
                    with clean, maintainable code. Turning complex ideas into elegant digital solutions.
                </p>

                {/* CTA Buttons */}
                <div style={{
                    display: 'flex',
                    gap: '20px',
                    flexWrap: 'wrap',
                    animation: 'fadeUp 0.8s ease 0.7s both',
                }}>
                    <button
                        onClick={scrollToProjects}
                        style={{
                            padding: '14px 36px',
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
                        View My Work
                    </button>
                    <button
                        onClick={scrollToContact}
                        style={{
                            padding: '14px 36px',
                            background: 'transparent',
                            color: '#D4AF37',
                            border: '1px solid #D4AF37',
                            fontFamily: "'Raleway', sans-serif",
                            fontWeight: '600',
                            fontSize: '12px',
                            letterSpacing: '0.2em',
                            textTransform: 'uppercase',
                            cursor: 'pointer',
                            transition: 'all 0.3s ease',
                        }}
                        onMouseEnter={e => {
                            e.target.style.background = 'rgba(212,175,55,0.08)'
                            e.target.style.transform = 'translateY(-2px)'
                        }}
                        onMouseLeave={e => {
                            e.target.style.background = 'transparent'
                            e.target.style.transform = 'translateY(0)'
                        }}
                    >
                        Let's Connect
                    </button>
                </div>

                {/* Scroll indicator */}
                <div style={{
                    position: 'absolute',
                    bottom: '40px',
                    left: '50%',
                    transform: 'translateX(-50%)',
                    display: 'flex',
                    flexDirection: 'column',
                    alignItems: 'center',
                    gap: '8px',
                    animation: 'fadeUp 0.8s ease 1s both',
                }}>
                    <span style={{
                        fontFamily: "'Raleway', sans-serif",
                        fontSize: '10px',
                        letterSpacing: '0.25em',
                        color: '#555',
                        textTransform: 'uppercase',
                    }}>Scroll</span>
                    <div style={{
                        width: '1px',
                        height: '48px',
                        background: 'linear-gradient(to bottom, #D4AF37, transparent)',
                        animation: 'scrollPulse 2s ease-in-out infinite',
                    }} />
                </div>
            </div>

            <style>{`
        @keyframes fadeUp {
          from { opacity: 0; transform: translateY(30px); }
          to { opacity: 1; transform: translateY(0); }
        }
        @keyframes scrollPulse {
          0%, 100% { opacity: 0.3; transform: scaleY(1); }
          50% { opacity: 1; transform: scaleY(1.1); }
        }
      `}</style>
        </section>
    )
}

export default Hero