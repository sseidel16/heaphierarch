import React from 'react'
import { createRoot } from 'react-dom/client'
import './global.css'

function App() {
    return (
        <div className="min-h-screen flex items-center justify-center bg-gray-50">
            <h1 className="text-3xl font-bold">Hello, Heap Hierarch — dummy page</h1>
        </div>
    )
}

const container = document.getElementById('root')
const root = createRoot(container!)
root.render(
    <React.StrictMode>
        <App />
    </React.StrictMode>
)
