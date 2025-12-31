import { ImageData } from 'images';
import React, { useEffect, useMemo, useRef, useState } from 'react'

const ROWS = 6
const COLS = 8

type FlipTilesProps = {
    flipped: boolean;
    imageData: ImageData;
};

export default function FlipTiles({ flipped, imageData }: FlipTilesProps) {
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
    }, [containerRef]);

    const {
        imageWidth,
        imageHeight,
        shiftX,
        shiftY,
    } = useMemo(() => {
        const scale = Math.max(
            dimensions.width / imageData.width,
            dimensions.height / imageData.height
        );

        const imageWidth = Math.ceil(imageData.width * scale);
        const imageHeight = Math.ceil(imageData.height * scale);

        const focusX = (imageData.focusX ?? (imageData.width / 2)) * scale;
        const focusY = (imageData.focusY ?? (imageData.height / 2)) * scale;

        const minShiftX = imageWidth - dimensions.width;
        const minShiftY = imageHeight - dimensions.height;

        const shiftX = Math.round(Math.min(0, Math.max(dimensions.width / 2 - focusX, -minShiftX)));
        const shiftY = Math.round(Math.min(0, Math.max(dimensions.height / 2 - focusY, -minShiftY)));

        console.log('Container dimensions:', dimensions.width, dimensions.height);
        console.log('Image original dimensions:', imageData.width, imageData.height);
        console.log('Computed image size:', imageWidth, imageHeight);
        console.log('Focus point:', focusX, focusY);
        console.log('Computed shifts:', shiftX, shiftY);

        return {
            imageWidth,
            imageHeight,
            shiftX,
            shiftY,
        };
    }, [imageData, dimensions])

    const tileWidth = dimensions.width / COLS
    const tileHeight = dimensions.height / ROWS

    const rows = Array.from({ length: ROWS }).map((_, rowIndex) => {
        return Array.from({ length: COLS }).map((_, colIndex) => {
            const id = rowIndex * COLS + colIndex
            return {
                id,
                bgX: -colIndex * tileWidth,
                bgY: -rowIndex * tileHeight,
                delay: (rowIndex + colIndex) * 50,
            }
        })
    })

    return (
        <div
            className="w-full h-full bg-gray-900"
            ref={containerRef}
        >
            <div
                className="w-full h-full flex flex-col"
                style={{
                    perspective: '1000px',
                }}
            >
                {rows.map((rowTiles, rowIndex) => (
                    <div key={rowIndex} className="flex flex-row flex-1">
                        {rowTiles.map((tile) => (
                            <div
                                key={tile.id}
                                className="flex-1 relative"
                                style={{
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
                                    className="absolute inset-0 w-full h-full"
                                    style={{
                                        backfaceVisibility: 'hidden',
                                        transform: 'rotateY(180deg)',
                                        backgroundImage: `url(${imageData.src})`,
                                        backgroundSize: `${imageWidth}px ${imageHeight}px`,
                                        backgroundPosition: `${tile.bgX + shiftX}px ${tile.bgY + shiftY}px`,
                                        backgroundRepeat: 'no-repeat',
                                    }}
                                />
                            </div>
                        ))}
                    </div>
                ))}
            </div>
        </div>
    )
}
