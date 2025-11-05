import React from 'react'

export function AboutUs() {
    return (
        <div className="about-page">
            <div className="about-container">
                <div className="about-intro">
                    <p>
                        I'm Omri Gendler, a Full Stack Developer based in Tel Aviv, transitioning from an elite background in the Israeli Intelligence Corps (Unit 8200). My service, which earned me a Commander's Citation for Excellence, involved managing sensitive technical systems and working closely with full-stack developers on a unit website. This experience honed my strong problem-solving skills  and sparked my passion for code.
                        After completing an intensive Full Stack Development program at Coding Academy , I am proficient in JavaScript, React, Node.js, Python, and SQL. I am eager to apply my unique analytical background and leadership experience to build innovative software solutions.
                    </p>
                </div>

                <section className="work-experience">
                    <h2>Work Experience</h2>
                    <div className="experience-list">
                        <div className="experience-item">
                            <div className="experience-period">2025-Present:</div>
                            <div className="experience-content">
                                <h3>Arbitrip</h3>
                                <span className="position">Customer Success</span>
                                <p>Implemented customer feedback loops and improved user onboarding processes.</p>
                            </div>
                        </div>

                        <div className="experience-item">
                            <div className="experience-period">2024-2025:</div>
                            <div className="experience-content">
                                <h3>MisterBit</h3>
                                <span className="position">Full-stack Developer</span>
                                <p>Developed full-stack web apps; Created and maintained internal projects and code examples.</p>
                            </div>
                        </div>

                        <div className="experience-item">
                            <div className="experience-period">2019-2023:</div>
                            <div className="experience-content">
                                <h3>IDF – 8200 - Technology and Maintenance Department</h3>
                                <p>Led a team in the development and maintenance of technological systems.</p>
                            </div>
                        </div>

                    </div>
                </section>

            </div>
        </div>
    )
}