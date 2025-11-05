import React from "react";
import { useNavigate } from "react-router-dom";


export function ProjectsList() {
    const navigate = useNavigate()

    const projects = [
        {
            id: 1,
            title: "Offbeat",
            description: "My final project for the Fullstack Bootcamp at Coding Academy",
            tech: ["React", "Redux", "Node.js", "MongoDB"],
            status: "Completed",
            link: "https://offbeat-front.onrender.com/",
            image: ["/img/offbeat1.png", "/img/offbeat2.png", "/img/offbeat3.png", "/img/offbeat4.png", "/img/offbeat5.png"]
        },
        {
            id: 2,
            title: "MineSweeper",
            description: "My project recreating the classic Minesweeper game using React for the frontend and Node.js for the backend",
            tech: ["React", "Redux", "Node.js", "MongoDB"],
            status: "Completed",
            link: "https://omri-gendler.github.io/Minesweeper/",
            image: ["/img/minesweeper.png"]
        },
        {
            id: 3,
            title: "Meme Generator",
            description: "My Meme Generator project allowing users to create and share custom memes online",
            tech: ["React", "Redux", "Node.js", "MongoDB"],
            status: "Completed",
            link: "https://omri-gendler.github.io/Meme_Generator/index.html",
            image: ["/img/meme.png"]
        },
        {
            id: 4,
            title: "Miss Bugs",
            description: "My 3rd project for the Fullstack Bootcamp at Coding Academy",
            tech: ["React", "Redux", "Node.js", "MongoDB"],
            status: "Completed",
            link: "https://ex-bugs.onrender.com/",
            image: ["/img/MissBugs1.png", "/img/MissBugs2.png"]
        },
    ]

    const preloadImages = (images) => {
        images.forEach(src => {
            const img = new Image()
            img.src = src
        })
    }

    // Preload first image of each project for faster loading
    React.useEffect(() => {
        projects.forEach(project => {
            if (project.image && project.image.length > 0) {
                preloadImages([project.image[0]])
            }
        })
    }, [])

    const handleProjectClick = (project) => {
        // Open external link in new tab
        window.open(project.link, '_blank', 'noopener,noreferrer');
    }

    return (
        <section className="projects-list">
            <div className="projects-header">
                <h2>Featured Projects</h2>
                <p>Explore my latest work and creative solutions</p>
            </div>

            <div className="projects-grid">
                {projects.map(project => (
                    <button
                        key={project.id}
                        className="project-button"
                        onClick={() => handleProjectClick(project)}
                        aria-label={`View ${project.title} project details`}
                    >
                        <div className="project-image">
                            <div className="project-status" data-status={project.status.toLowerCase()}>
                                {project.status}
                            </div>
                            <div className="image-carousel">
                                <div className="image-track">
                                    {project.image.map((imgSrc, index) => (
                                        <div key={index} className="image-slide">
                                            <img 
                                                src={imgSrc} 
                                                alt={`${project.title} screenshot ${index + 1}`}
                                                loading="eager"
                                                onLoad={(e) => {
                                                    e.target.style.opacity = '1';
                                                    if (index === 0) {
                                                        // Mark as loaded when first image loads
                                                        e.target.closest('.project-image').classList.add('images-loaded');
                                                    }
                                                }}
                                                onError={(e) => {
                                                    console.warn(`Failed to load image: ${imgSrc}`);
                                                    e.target.style.display = 'none';
                                                }}
                                                style={{ opacity: '0', transition: 'opacity 0.5s ease' }}
                                            />
                                        </div>
                                    ))}
                                </div>
                                <div className="carousel-indicators">
                                    {project.image.map((_, index) => (
                                        <div key={index} className="indicator"></div>
                                    ))}
                                </div>
                            </div>
                        </div>

                        <div className="project-content">
                            <h3 className="project-title">{project.title}</h3>
                            <p className="project-description">{project.description}</p>

                            <div className="project-tech">
                                {project.tech.map(tech => (
                                    <span key={tech} className="tech-tag">{tech}</span>
                                ))}
                            </div>
                        </div>

                        <div className="project-arrow">
                            <svg width="24" height="24" viewBox="0 0 24 24" fill="none">
                                <path d="M7 17L17 7M17 7H7M17 7V17" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                            </svg>
                        </div>
                    </button>
                ))}
            </div>
        </section>
    )
}