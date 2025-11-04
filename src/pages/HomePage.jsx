import { ProjectsList } from '../cmps/ProjectsList'
import { AboutMe } from '../cmps/AboutMe'

export function HomePage() {
    return (
        <div className="home">
            <header className="hero-section">
                <div className="hero-content">
                    <h1>Omri Gendler</h1>
                    <p className="hero-text">
                        Full-Stack Developer specializing in <span className="tech-highlight">React</span> and <span className="tech-highlight">Node.js</span>
                    </p>
                    <p className="hero-text">
                        Transforming ideas into interactive, efficient, and user-friendly digital experiences through elegant code and thoughtful design.
                    </p>
                    <p className="hero-cta">
                        <strong>Available for opportunities</strong>
                    </p>
                </div>
            </header>
            
            <ProjectsList />
            <AboutMe />
        </div>
    )
}

