import React from 'react'
import { NavLink } from 'react-router-dom'
import { getAssetPath } from '../services/asset.service.js'

export function AppHeader() {
    return (
        <header className="app-header">
            <div className="header-container">
                <div className="logo-section">
                    <div className="profile-img">
                        <div className="profile-placeholder"><img src={getAssetPath('img/omrig.png')} alt="" /></div>
                    </div>
                    <h1 className="name">Omri Gendler</h1>
                </div>
                
                <nav className="main-nav">
                    <NavLink to="/" className={({ isActive }) => isActive ? 'nav-link active' : 'nav-link'}>
                        HOME
                    </NavLink>
                    <NavLink to="/about" className={({ isActive }) => isActive ? 'nav-link active' : 'nav-link'}>
                        ABOUT
                    </NavLink>
                    <NavLink to="/projects" className={({ isActive }) => isActive ? 'nav-link active' : 'nav-link'}>
                        PROJECTS
                    </NavLink>
                    <NavLink to="/skills" className={({ isActive }) => isActive ? 'nav-link active' : 'nav-link'}>
                        SKILLS
                    </NavLink>
                </nav>
            </div>
        </header>
    )
}