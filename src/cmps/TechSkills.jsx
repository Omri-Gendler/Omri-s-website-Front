export function TechSkills() {
    const skills = [
        { name: 'React', icon: '/img/react.svg', category: 'Frontend' },
        { name: 'Node.js', icon: '/img/nodejs-icon.svg', category: 'Backend' },
        { name: 'Redux', icon: '/img/js_redux-icon.svg', category: 'State Management' },
        { name: 'MongoDB', icon: '/img/mongodb-ar21~bgwhite.svg', category: 'Database' },
        { name: 'JavaScript', icon: '/img/javascript-icon.svg', category: 'Language' },
        { name: 'CSS', icon: '/img/w3_css-ar21~old.svg', category: 'Styling' },
        { name: 'Vite', icon: '/img/vite.svg', category: 'Tooling' },
        { name: 'Express.js', icon: '/img/expressjs-icon.svg', category: 'Backend' },
        { name: 'Git', icon: '/img/git.svg', category: 'Version Control' },
        { name: 'HTML5', icon: '/img/html5.svg', category: 'Markup Language' },
    ];

    return (
        <section className="tech-skills">
            <div className="tech-container">
                <header className="tech-header">
                    <h2>Technical Expertise</h2>
                    <p>Technologies I work with to create exceptional digital experiences</p>
                </header>
                
                <div className="skills-showcase">
                    {skills.map((skill, index) => (
                        <div 
                            className="skill-item" 
                            key={skill.name}
                            style={{ '--delay': `${index * 0.1}s` }}
                        >
                            <div className="skill-icon">
                                <img 
                                    src={skill.icon} 
                                    alt={`${skill.name} icon`} 
                                    loading="lazy"
                                />
                            </div>
                            <div className="skill-info">
                                <h3 className="skill-name">{skill.name}</h3>
                                <span className="skill-category">{skill.category}</span>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
}