import React, { useState, useEffect } from 'react'

export function ScrollNavigation() {
    const [activeSection, setActiveSection] = useState('hero')

    const scrollToSection = (sectionId) => {
        const element = document.getElementById(sectionId)
        if (element) {
            element.scrollIntoView({ 
                behavior: 'smooth',
                block: 'start'
            })
        }
    }

    useEffect(() => {
        const observerOptions = {
            root: null,
            rootMargin: '-50% 0px -50% 0px',
            threshold: 0
        }

        const observer = new IntersectionObserver((entries) => {
            entries.forEach(entry => {
                if (entry.isIntersecting) {
                    setActiveSection(entry.target.id)
                }
            })
        }, observerOptions)

        const sections = ['hero', 'skills', 'projects', 'about']
        sections.forEach(id => {
            const element = document.getElementById(id)
            if (element) observer.observe(element)
        })

        return () => observer.disconnect()
    }, [])

    const navItems = [
        { id: 'hero', label: 'Home' },
        { id: 'skills', label: 'Skills' },
        { id: 'projects', label: 'Projects' },
        { id: 'about', label: 'About' }
    ]

    return (
        <nav className="scroll-navigation">
            <div className="scroll-nav-container">
                {navItems.map(item => (
                    <button 
                        key={item.id}
                        className={`scroll-nav-dot ${activeSection === item.id ? 'active' : ''}`}
                        onClick={() => scrollToSection(item.id)}
                        aria-label={`Go to ${item.label} section`}
                    >
                        <span className="dot-label">{item.label}</span>
                    </button>
                ))}
            </div>
        </nav>
    )
}