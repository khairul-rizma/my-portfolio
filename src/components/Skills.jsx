import React, { useEffect, useRef, useState } from 'react'

const Skills = () => {
    const sectionRef = useRef(null)
    const [visible, setVisible] = useState(false)

    useEffect(() => {
        const observer = new IntersectionObserver(
            ([entry]) => { if (entry.isIntersecting) setVisible(true) },
            { threshold: 0.15 }
        )
        if (sectionRef.current) observer.observe(sectionRef.current)
        return () => observer.disconnect()
    }, [])

    const skillGroups = [
        {
            category: 'Frontend Core',
            skills: [
                { name: 'React / Next.js', level: 92 },
                { name: 'TypeScript', level: 85 },
                { name: 'HTML & CSS', level: 96 },
                { name: 'JavaScript ES2024', level: 90 },
            ]
        },
        {
            category: 'Styling & Design',
            skills: [
                { name: 'Tailwind CSS', level: 94 },
                { name: 'Framer Motion', level: 80 },
                { name: 'Figma', level: 75 },
                { name: 'GSAP', level: 72 },
            ]
        },
    ]

    const tools = [
        'React', 'Next.js', 'TypeScript', 'Tailwind CSS',
        'Vite', 'Git', 'Figma', 'Node.js',
        'REST API', 'GraphQL', 'Jest', 'Vercel',
    ]

    return (
        <section
            id="skills"
            ref={sectionRef}
            style={{
                background: '#080808',
                padding: '120px 5%',
                position: 'relative',
                overflow: 'hidden',
            }}
        >
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
                    }}>03. Skills</span>
                </div>

                <h2 style={{
                    fontFamily: "'Playfair Display', serif",
                    fontSize: 'clamp(32px, 4vw, 52px)',
                    fontWeight: '700',
                    color: '#fff',
                    marginBottom: '72px',
                    opacity: visible ? 1 : 0,
                    transition: 'all 0.7s ease 0.1s',
                }}>
                    My Technical <span style={{ color: '#D4AF37', fontStyle: 'italic' }}>Expertise</span>
                </h2>

                {/* Skill bars */}
                <div style={{
                    display: 'grid',
                    gridTemplateColumns: '1fr 1fr',
                    gap: '60px',
                    marginBottom: '80px',
                }}>
                    {skillGroups.map((group, gi) => (
                        <div key={gi} style={{
                            opacity: visible ? 1 : 0,
                            transform: visible ? 'translateY(0)' : 'translateY(24px)',
                            transition: `all 0.8s ease ${gi * 0.15}s`,
                        }}>
                            <h3 style={{
                                fontFamily: "'Raleway', sans-serif",
                                fontSize: '11px',
                                letterSpacing: '0.25em',
                                color: '#D4AF37',
                                textTransform: 'uppercase',
                                marginBottom: '32px',
                            }}>{group.category}</h3>

                            {group.skills.map((skill, si) => (
                                <div key={si} style={{ marginBottom: '28px' }}>
                                    <div style={{
                                        display: 'flex',
                                        justifyContent: 'space-between',
                                        marginBottom: '10px',
                                    }}>
                                        <span style={{
                                            fontFamily: "'Raleway', sans-serif",
                                            fontSize: '13px',
                                            color: '#ccc',
                                            letterSpacing: '0.05em',
                                        }}>{skill.name}</span>
                                        <span style={{
                                            fontFamily: "'Raleway', sans-serif",
                                            fontSize: '12px',
                                            color: '#D4AF37',
                                        }}>{skill.level}%</span>
                                    </div>
                                    {/* Track */}
                                    <div style={{
                                        height: '2px',
                                        background: 'rgba(255,255,255,0.06)',
                                        position: 'relative',
                                        overflow: 'hidden',
                                    }}>
                                        <div style={{
                                            height: '100%',
                                            background: 'linear-gradient(90deg, #D4AF37, #F5E17A)',
                                            width: visible ? `${skill.level}%` : '0%',
                                            transition: `width 1.2s cubic-bezier(0.77,0,0.175,1) ${0.4 + si * 0.1 + gi * 0.15}s`,
                                        }} />
                                    </div>
                                </div>
                            ))}
                        </div>
                    ))}
                </div>

                {/* Tech tags */}
                <div style={{
                    borderTop: '1px solid rgba(212,175,55,0.12)',
                    paddingTop: '56px',
                    opacity: visible ? 1 : 0,
                    transition: 'all 0.7s ease 0.5s',
                }}>
                    <p style={{
                        fontFamily: "'Raleway', sans-serif",
                        fontSize: '11px',
                        letterSpacing: '0.25em',
                        color: '#555',
                        textTransform: 'uppercase',
                        marginBottom: '24px',
                    }}>Tools & Technologies</p>
                    <div style={{ display: 'flex', flexWrap: 'wrap', gap: '12px' }}>
                        {tools.map((tool, i) => (
                            <span
                                key={i}
                                style={{
                                    fontFamily: "'Raleway', sans-serif",
                                    fontSize: '12px',
                                    color: '#888',
                                    border: '1px solid rgba(212,175,55,0.2)',
                                    padding: '8px 18px',
                                    letterSpacing: '0.08em',
                                    transition: 'all 0.25s ease',
                                    cursor: 'default',
                                }}
                                onMouseEnter={e => {
                                    e.target.style.color = '#D4AF37'
                                    e.target.style.borderColor = '#D4AF37'
                                    e.target.style.background = 'rgba(212,175,55,0.06)'
                                }}
                                onMouseLeave={e => {
                                    e.target.style.color = '#888'
                                    e.target.style.borderColor = 'rgba(212,175,55,0.2)'
                                    e.target.style.background = 'transparent'
                                }}
                            >
                                {tool}
                            </span>
                        ))}
                    </div>
                </div>
            </div>
        </section>
    )
}

export default Skills