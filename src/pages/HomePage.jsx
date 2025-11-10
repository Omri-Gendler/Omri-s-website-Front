import { ProjectsList } from '../cmps/ProjectsList'
import { AboutMe } from '../cmps/AboutMe'
import { TechSkills } from '../cmps/TechSkills'
import { ScrollNavigation } from '../cmps/ScrollNavigation'
import { getAssetPath } from '../services/asset.service.js'
import { useEffect } from 'react'

export function HomePage() {
    useEffect(() => {
        // Load LinkedIn badge script
        const script = document.createElement('script')
        script.src = 'https://platform.linkedin.com/badges/js/profile.js'
        script.async = true
        script.defer = true
        script.type = 'text/javascript'
        document.head.appendChild(script)

        // Cleanup function
        return () => {
            const existingScript = document.querySelector('script[src="https://platform.linkedin.com/badges/js/profile.js"]')
            if (existingScript) {
                document.head.removeChild(existingScript)
            }
        }
    }, [])

    useEffect(() => {
        // Smooth scrolling animation on scroll
        const observerOptions = {
            root: null,
            rootMargin: '0px',
            threshold: 0.1
        }

        const observer = new IntersectionObserver((entries) => {
            entries.forEach(entry => {
                if (entry.isIntersecting) {
                    entry.target.classList.add('animate-in')
                }
            })
        }, observerOptions)

        // Observe all sections
        const sections = document.querySelectorAll('.section')
        sections.forEach(section => observer.observe(section))

        // Subtle parallax effect
        const handleScroll = () => {
            const scrolled = window.pageYOffset
            const rate = scrolled * -0.5
            const heroContent = document.querySelector('.hero-content')
            if (heroContent) {
                heroContent.style.transform = `translateY(${rate}px)`
            }
        }

        window.addEventListener('scroll', handleScroll)

        return () => {
            observer.disconnect()
            window.removeEventListener('scroll', handleScroll)
        }
    }, [])

    return (
        <div className="home-page">
            <ScrollNavigation />
            {/* Hero Section - White Background */}
            <section className="section hero-section" id="hero">
                <div className="section-content">
                    <div className="hero-content">
                        <h1 className="hero-title">Omri Gendler</h1>
                        <p className="hero-text">
                            Full-Stack Developer specializing in <span className="tech-highlight">React</span> and <span className="tech-highlight">Node.js</span>
                        </p>
                        <p className="hero-text">
                            Transforming ideas into interactive, efficient, and user-friendly digital experiences through elegant code and thoughtful design.
                        </p>
                        <p className="hero-cta">
                            <strong>Available for opportunities</strong>
                        </p>
                        <div className="contact-buttons">
                            <a href="tel:+972505277818" className="contact-btn phone-btn">
                                <span className="btn-icon">📞</span>
                                <span className="btn-text">+972 50 527 7818</span>
                            </a>
                            <a href="https://wa.me/972505277818" target="_blank" rel="noopener noreferrer" className="contact-btn whatsapp-btn">
                                <span className="btn-icon" style={{height: '20px', width: '20px'}}><img src={getAssetPath('img/whatsapp.svg')} alt="" /></span>
                                <span className="btn-text">WhatsApp</span>
                            </a>
                            <a href="mailto:omrig999@gmail.com" className="contact-btn email-btn">
                                <span className="btn-icon" style={{height: '20px', width: '20px'}}><img src={getAssetPath('img/mail.svg')} alt="" /></span>
                                <span className="btn-text">Email</span>
                            </a>
                            <div className="linkedin-badge-wrapper">
                                <div className="badge-base LI-profile-badge" data-locale="en_US" data-size="small" data-theme="light" data-type="HORIZONTAL" data-vanity="omri-gendler-893014344" data-version="v1">
                                    <a className="badge-base__link LI-simple-link" href="https://il.linkedin.com/in/omri-gendler-893014344?trk=profile-badge"></a>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* Skills Section - Light Gray Background */}
            <section className="section skills-section" id="skills">
                <div className="section-content">
                    <div className="section-header">
                        <h2 className="section-title">Technical Skills</h2>
                        <p className="section-subtitle">Technologies I work with</p>
                    </div>
                    <TechSkills />
                </div>
            </section>

            {/* Projects Section - White Background */}
            <section className="section projects-section" id="projects">
                <div className="section-content">
                    <div className="section-header">
                        <h2 className="section-title">Featured Projects</h2>
                        <p className="section-subtitle">A showcase of my recent work</p>
                    </div>
                    <ProjectsList />
                </div>
            </section>

            {/* About Section - Dark Background */}
            <section className="section about-section" id="about">
                <div className="section-content">
                    <div className="section-header">
                        <h2 className="section-title">About Me</h2>
                        <p className="section-subtitle">Get to know me better</p>
                    </div>
                    <AboutMe />
                </div>
            </section>
        </div>
    )
}

