import React, { useState } from 'react';
import FlipTiles from './FlipTiles';
import { images } from './images';

export default function MainPage() {
    const [flipped, setFlipped] = useState(false)
    const [imageData] = useState(() => images[0]);

    console.log('Image dimensions:', imageData.width, imageData.height)

    return (
        <div className="h-screen w-screen flex flex-col overflow-hidden">
            {/* Fixed Header */}
            <header className="bg-gray-800 text-white py-6 px-8 shadow-lg flex items-center justify-between">
                <div>
                    <h1 className="text-3xl font-bold">Stephen Seidel</h1>
                    <p className="text-gray-300 text-lg mt-1">Software Engineer</p>
                </div>
                <button
                    onClick={() => setFlipped(!flipped)}
                    className="px-6 py-3 bg-blue-600 hover:bg-blue-700 text-white rounded-lg font-semibold transition-colors"
                >
                    Flip Tiles
                </button>
            </header>

            {/* FlipTiles fills remaining space */}
            <div className="flex-1 overflow-hidden p-8 bg-gray-900">
                <FlipTiles flipped={flipped} imageData={imageData} />
            </div>
        </div>
    )
}
