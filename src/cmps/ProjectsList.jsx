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
            title: "Miss Bugs",
            description: "My 3rd project for the Fullstack Bootcamp at Coding Academy",
            tech: ["React", "Redux", "Node.js", "MongoDB"],
            status: "Completed",
            link: "https://ex-bugs.onrender.com/",
            image: ["/img/MissBugs1.png", "/img/MissBugs2.png"]
        },
    ]

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
                                            <img src={imgSrc} alt={`${project.title} screenshot ${index + 1}`} />
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