import React from 'react'
import { TechSkills } from '../cmps/TechSkills'

export function SkillsPage() {
    return (
        <div className="skills-page">
            <div className="skills-container">
                <h1>Technical Skills</h1>
                <TechSkills />
            </div>
        </div>
    )
}