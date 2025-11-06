import { getAssetPath } from '../services/asset.service.js'

export function TechSkills() {
    const skills = [
        { name: 'React', icon: getAssetPath('img/react.svg'), category: 'Frontend' },
        { name: 'Node.js', icon: getAssetPath('img/nodejs-icon.svg'), category: 'Backend' },
        { name: 'Redux', icon: getAssetPath('img/js_redux-icon.svg'), category: 'State Management' },
        { name: 'MongoDB', icon: getAssetPath('img/mongodb-ar21~bgwhite.svg'), category: 'Database' },
        { name: 'JavaScript', icon: getAssetPath('img/javascript-icon.svg'), category: 'Language' },
        { name: 'CSS', icon: getAssetPath('img/w3_css-ar21~old.svg'), category: 'Styling' },
        { name: 'Vite', icon: getAssetPath('img/vite.svg'), category: 'Tooling' },
        { name: 'Express.js', icon: getAssetPath('img/expressjs-icon.svg'), category: 'Backend' },
        { name: 'Git', icon: getAssetPath('img/git.svg'), category: 'Version Control' },
        { name: 'HTML5', icon: getAssetPath('img/html5.svg'), category: 'Markup Language' },
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