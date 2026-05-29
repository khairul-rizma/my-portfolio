import React, { useEffect, useRef, useState } from 'react'

const projects = [
    {
        number: '01',
        title: 'E-Commerce Platform',
        category: 'React • TypeScript • Tailwind',
        description: 'A full-featured e-commerce experience with dynamic product filtering, cart management, and seamless checkout flow. Optimized for performance with lazy loading and code splitting.',
        tags: ['React', 'TypeScript', 'Stripe', 'Tailwind CSS'],
        link: '#', featured: true,
    },
    {
        number: '02',
        title: 'Dashboard Analytics',
        category: 'React • Recharts • REST API',
        description: 'Interactive data dashboard with real-time charts, filterable tables, and customizable widgets. Built for enterprise clients needing deep data insights.',
        tags: ['React', 'Recharts', 'REST API', 'Shadcn UI'],
        link: '#', featured: false,
    },
    {
        number: '03',
        title: 'Portfolio CMS',
        category: 'Next.js • Sanity • GSAP',
        description: 'A headless CMS-powered portfolio with animated page transitions, content management, and blazing-fast static generation via Next.js.',
        tags: ['Next.js', 'Sanity', 'GSAP', 'Vercel'],
        link: '#', featured: true,
    },
    {
        number: '04',
        title: 'Social Media App',
        category: 'React • Firebase',
        description: 'Mobile-first social platform with real-time messaging, stories, and activity feed. Achieved 98/100 Lighthouse performance score on web.',
        tags: ['React', 'Firebase', 'WebSockets', 'PWA'],
        link: '#', featured: false,
    },
]

const ProjectCard = ({ project, index, visible }) => {
    const [hovered, setHovered] = useState(false)

    return (
        <div
            onMouseEnter={() => setHovered(true)}
            onMouseLeave={() => setHovered(false)}
            style={{
                borderTop: '1px solid rgba(255,255,255,0.06)',
                padding: '40px 0',
                position: 'relative',
                cursor: 'pointer',
                opacity: visible ? 1 : 0,
                transform: visible ? 'translateY(0)' : 'translateY(24px)',
                transition: `opacity 0.8s ease ${index * 0.12}s, transform 0.8s ease ${index * 0.12}s`,
            }}
        >
            {/* Hover bg */}
            <div style={{
                position: 'absolute', inset: '0 -5%',
                background: 'rgba(212,175,55,0.025)',
                opacity: hovered ? 1 : 0, transition: 'opacity 0.3s ease',
                pointerEvents: 'none',
            }} />

            {/* Mobile layout: stacked. Desktop: grid */}
            <div className="project-row" style={{
                display: 'grid',
                gridTemplateColumns: '64px 1fr auto',
                gap: '28px', alignItems: 'start',
            }}>
                {/* Number */}
                <div style={{
                    fontFamily: "'Playfair Display', serif",
                    fontSize: 'clamp(32px, 5vw, 48px)',
                    fontWeight: '700',
                    color: hovered ? '#D4AF37' : 'rgba(255,255,255,0.06)',
                    lineHeight: 1, transition: 'color 0.3s ease',
                }}>{project.number}</div>

                {/* Content */}
                <div>
                    <div style={{ display: 'flex', alignItems: 'center', gap: '12px', marginBottom: '10px', flexWrap: 'wrap' }}>
                        <h3 style={{
                            fontFamily: "'Playfair Display', serif",
                            fontSize: 'clamp(18px, 3vw, 26px)',
                            fontWeight: '700', color: '#fff', margin: 0,
                        }}>{project.title}</h3>
                        {project.featured && (
                            <span style={{
                                fontFamily: "'Raleway', sans-serif", fontSize: '9px',
                                letterSpacing: '0.2em', color: '#080808',
                                background: '#D4AF37', padding: '3px 10px',
                                textTransform: 'uppercase', whiteSpace: 'nowrap',
                            }}>Featured</span>
                        )}
                    </div>

                    <p style={{
                        fontFamily: "'Raleway', sans-serif", fontSize: '11px',
                        letterSpacing: '0.18em', color: '#D4AF37',
                        textTransform: 'uppercase', marginBottom: '14px',
                    }}>{project.category}</p>

                    <p style={{
                        fontFamily: "'Raleway', sans-serif", fontSize: '14px',
                        lineHeight: '1.8', color: '#666',
                        maxWidth: '600px', marginBottom: '20px',
                    }}>{project.description}</p>

                    <div style={{ display: 'flex', gap: '8px', flexWrap: 'wrap' }}>
                        {project.tags.map((tag, ti) => (
                            <span key={ti} style={{
                                fontFamily: "'Raleway', sans-serif", fontSize: '11px',
                                color: '#555', border: '1px solid rgba(255,255,255,0.08)',
                                padding: '4px 10px', letterSpacing: '0.04em',
                            }}>{tag}</span>
                        ))}
                    </div>
                </div>

                {/* Arrow */}
                <div style={{
                    width: '44px', height: '44px',
                    border: '1px solid',
                    borderColor: hovered ? '#D4AF37' : 'rgba(255,255,255,0.1)',
                    display: 'flex', alignItems: 'center', justifyContent: 'center',
                    transition: 'all 0.3s ease',
                    transform: hovered ? 'rotate(-45deg)' : 'rotate(0)',
                    marginTop: '4px', flexShrink: 0,
                }}>
                    <svg width="16" height="16" viewBox="0 0 24 24" fill="none"
                        stroke={hovered ? '#D4AF37' : '#555'} strokeWidth="1.5">
                        <line x1="5" y1="12" x2="19" y2="12" />
                        <polyline points="12 5 19 12 12 19" />
                    </svg>
                </div>
            </div>
        </div>
    )
}

const Projects = () => {
    const sectionRef = useRef(null)
    const [visible, setVisible] = useState(false)

    useEffect(() => {
        const observer = new IntersectionObserver(
            ([entry]) => { if (entry.isIntersecting) setVisible(true) },
            { threshold: 0.05 }
        )
        if (sectionRef.current) observer.observe(sectionRef.current)
        return () => observer.disconnect()
    }, [])

    return (
        <section id="projects" ref={sectionRef} style={{
            background: '#0d0d0d', padding: '100px 5%', position: 'relative',
        }}>
            <div style={{ maxWidth: '1200px', margin: '0 auto' }}>
                <div style={{
                    display: 'flex', alignItems: 'center', gap: '16px', marginBottom: '20px',
                    opacity: visible ? 1 : 0, transition: 'all 0.7s ease',
                }}>
                    <div style={{ width: '40px', height: '1px', background: '#D4AF37', flexShrink: 0 }} />
                    <span style={{
                        fontFamily: "'Raleway', sans-serif", fontSize: '11px',
                        letterSpacing: '0.3em', color: '#D4AF37', textTransform: 'uppercase',
                    }}>04. Projects</span>
                </div>

                <h2 style={{
                    fontFamily: "'Playfair Display', serif",
                    fontSize: 'clamp(28px, 4vw, 52px)',
                    fontWeight: '700', color: '#fff', marginBottom: '56px',
                    opacity: visible ? 1 : 0, transition: 'all 0.7s ease 0.1s',
                }}>
                    Selected <span style={{ color: '#D4AF37', fontStyle: 'italic' }}>Work</span>
                </h2>

                <div>
                    {projects.map((project, i) => (
                        <ProjectCard key={i} project={project} index={i} visible={visible} />
                    ))}
                    <div style={{ borderTop: '1px solid rgba(255,255,255,0.06)' }} />
                </div>
            </div>

            <style>{`
        @media (max-width: 560px) {
          .project-row { grid-template-columns: 48px 1fr !important; }
          .project-row > *:last-child { display: none; }
        }
      `}</style>
        </section>
    )
}

export default Projects