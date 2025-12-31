import React, { useEffect, useRef, useState } from 'react'

const ROWS = 6
const COLS = 8

// Replace with your actual image URL
const IMAGE_URL = 'https://images.unsplash.com/photo-1506905925346-21bda4d32df4?w=800&h=600&fit=crop'

type FlipTilesProps = {
    flipped: boolean
}

export default function FlipTiles({ flipped }: FlipTilesProps) {
    const containerRef = useRef<HTMLDivElement>(null)
    const [dimensions, setDimensions] = useState({ width: 0, height: 0 })

    useEffect(() => {
        if (!containerRef.current) return
        
        const observer = new ResizeObserver(entries => {
            const { width, height } = entries[0].contentRect
            setDimensions({ width, height })
        })
        
        observer.observe(containerRef.current)
        return () => observer.disconnect()
    }, [])

    const tileWidth = dimensions.width / COLS
    const tileHeight = dimensions.height / ROWS

    const tiles = Array.from({ length: ROWS * COLS }).map((_, i) => {
        const col = i % COLS
        const row = Math.floor(i / COLS)
        return {
            id: i,
            x: col * tileWidth,
            y: row * tileHeight,
            bgX: -col * tileWidth,
            bgY: -row * tileHeight,
            delay: (row + col) * 50, // Diagonal wave effect
        }
    })

    return (
        <div
            className="w-full h-full flex items-center justify-center bg-gray-900"
            ref={containerRef}
        >
            <div
                className="relative w-full h-full"
                style={{
                    perspective: '1000px',
                }}
            >
                {tiles.map((tile) => (
                    <div
                        key={tile.id}
                        className="absolute"
                        style={{
                            width: tileWidth,
                            height: tileHeight,
                            left: tile.x,
                            top: tile.y,
                            transformStyle: 'preserve-3d',
                            transition: `transform 0.6s`,
                            transitionDelay: `${tile.delay}ms`,
                            transform: flipped ? 'rotateY(180deg)' : 'rotateY(0deg)',
                        }}
                    >
                        {/* Front face */}
                        <div
                            className="absolute inset-0 flex items-center justify-center text-white font-bold border border-gray-700"
                            style={{
                                backfaceVisibility: 'hidden',
                                background: `linear-gradient(135deg, #667eea ${(tile.id % 10) * 10}%, #764ba2 100%)`,
                            }}
                        >
                            {tile.id + 1}
                        </div>

                        {/* Back face - Tiled image */}
                        <div
                            className="absolute inset-0"
                            style={{
                                backfaceVisibility: 'hidden',
                                transform: 'rotateY(180deg)',
                                backgroundImage: `url(${IMAGE_URL})`,
                                backgroundSize: `${dimensions.width}px ${dimensions.height}px`,
                                backgroundPosition: `${tile.bgX}px ${tile.bgY}px`,
                                backgroundRepeat: 'no-repeat',
                                width: tileWidth,
                                height: tileHeight,
                            }}
                        />
                    </div>
                ))}
            </div>
        </div>
    )
}
