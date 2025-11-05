import React from 'react'

export function AboutUs() {
    return (
        <div className="about-page">
            <div className="about-container">
                <div className="about-intro">
                    <p>
                        My name is Carmel Amarilio. I am a Practical Engineer in Electronics and Computer Science with hands-on experience in full-stack development 
                        and professional expertise in DevOps engineering. I'm passionate about coding, automation, and building scalable infrastructure. Currently 
                        working as a coding instructor and DevOps developer. I also served as an officer in the IDF Technology Corps, demonstrating strong problem-solving 
                        abilities, team leadership, and innovative thinking.
                    </p>
                </div>

                <section className="work-experience">
                    <h2>Work Experience</h2>
                    <div className="experience-list">
                        <div className="experience-item">
                            <div className="experience-period">2025-Present:</div>
                            <div className="experience-content">
                                <h3>Develeap</h3>
                                <span className="position">DevOps engineer</span>
                                <p>Implemented CI/CD pipelines, automated deployments, and managed cloud infrastructure.</p>
                            </div>
                        </div>

                        <div className="experience-item">
                            <div className="experience-period">2024-2025:</div>
                            <div className="experience-content">
                                <h3>MisterBit</h3>
                                <span className="position">Coding Instructor & Full-stack Developer</span>
                                <p>Developed full-stack web apps; mentored students; created and maintained internal projects and code examples.</p>
                            </div>
                        </div>

                        <div className="experience-item">
                            <div className="experience-period">2023-2024:</div>
                            <div className="experience-content">
                                <h3>YouML</h3>
                                <span className="position">Frontend Developer internship</span>
                                <p>Built responsive interfaces with React and TypeScript; integrated APIs.</p>
                            </div>
                        </div>

                        <div className="experience-item">
                            <div className="experience-period">2019-2023:</div>
                            <div className="experience-content">
                                <h3>IDF – Captain in the Technology and Support Corps</h3>
                                <p>Head of Technology and Maintenance Department.</p>
                            </div>
                        </div>

                        <div className="experience-item">
                            <div className="experience-period">2017-2019:</div>
                            <div className="experience-content">
                                <h3>Ort Hermelin College – Assistant lecture & Private Tutor</h3>
                                <p>Provided academic support in Mathematics and Programming.</p>
                            </div>
                        </div>
                    </div>
                </section>

                <section className="education">
                    <h2>Education:</h2>
                    <div className="education-list">
                        <div className="education-item">
                            <div className="education-period">2025:</div>
                            <div className="education-content">
                                <h3>Develeap</h3>
                                <span className="degree">DevOps Expert Bootcamp</span>
                            </div>
                        </div>
                    </div>
                </section>
            </div>
        </div>
    )
}