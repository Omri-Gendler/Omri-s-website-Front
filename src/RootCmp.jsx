import React from 'react'
import { Routes, Route } from 'react-router-dom'

import { HomePage } from './pages/HomePage'
import { AppFooter } from './cmps/AppFooter'

export function RootCmp() {
    return (
        <div className="main-container">
            <main>
                <Routes>
                    <Route path="/" element={<HomePage />} />
                </Routes>
            </main>
            {/* <AppFooter /> */}
        </div>
    )
}


