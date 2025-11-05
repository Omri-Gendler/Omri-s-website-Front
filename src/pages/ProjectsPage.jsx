import React from 'react'
import { ProjectsList } from '../cmps/ProjectsList'

export function ProjectsPage() {
    return (
        <div className="projects-page">
            <div className="projects-container">
                <h1>Projects</h1>
                <p>Explore my latest work and creative solutions</p>
                <ProjectsList />
            </div>
        </div>
    )
}