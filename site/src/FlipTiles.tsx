import { ImageData } from 'images';
import React, { useEffect, useMemo, useRef, useState } from 'react'

const TILE_SIZE = 100;

type FlipTilesProps = {
    flipped: boolean;
    imageData: ImageData;
};

/**
 * Return a deterministic pseudo-random number seeded with the given value.
 * @param seed 
 * @returns 
 */
const mulberry32 = (seed: number) => {
    let t = seed + 0x6D2B79F5;
    t = Math.imul(t ^ t >>> 15, t | 1);
    t ^= t + Math.imul(t ^ t >>> 7, t | 61);
    return ((t ^ t >>> 14) >>> 0) / 4294967296;
}

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

    const tilesGrid = useMemo(() => {
        const cols = Math.ceil(dimensions.width / TILE_SIZE);
        const rows = Math.ceil(dimensions.height / TILE_SIZE);

        const maxDim = rows + cols;

        return Array.from({ length: rows }).map((_, rowIndex) => {
            return Array.from({ length: cols }).map((_, colIndex) => {
                const id = rowIndex * cols + colIndex;
                const bit = Math.floor(mulberry32(id) * 2)
                return {
                    id,
                    bit,
                    bgX: -colIndex * TILE_SIZE,
                    bgY: -rowIndex * TILE_SIZE,
                    delay: ((rowIndex + colIndex) / maxDim) * 500,
                }
            })
        });
    }, [dimensions])

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

        return {
            imageWidth,
            imageHeight,
            shiftX,
            shiftY,
        };
    }, [imageData, dimensions])

    return (
        <div
            className="w-full h-full bg-gray-900 overflow-hidden"
            ref={containerRef}
        >
            <div
                className="flex flex-col overflow-hidden"
                style={{
                    perspective: '1000px',
                }}
            >
                {tilesGrid.map((rowTiles, rowIndex) => (
                    <div key={rowIndex} className="flex flex-row overflow-hidden" style={{ height: TILE_SIZE }}>
                        {rowTiles.map((tile) => (
                            <div
                                key={tile.id}
                                className="relative flex-shrink-0"
                                style={{
                                    width: TILE_SIZE,
                                    height: TILE_SIZE,
                                    transformStyle: 'preserve-3d',
                                    transition: `transform 300ms, opacity 450ms`,
                                    transitionDelay: `${tile.delay}ms`,
                                    transform: flipped ? 'rotateY(90deg) rotateX(90deg)' : 'rotateY(0deg) rotateX(0deg)',
                                    opacity: flipped ? 0 : 1,
                                }}
                            >
                                {/* Front face - Image with bit overlay */}
                                <div
                                    className="absolute inset-0 flex items-center justify-center font-bold border"
                                    style={{
                                        backfaceVisibility: 'hidden',
                                        backgroundImage: `url(${imageData.src})`,
                                        backgroundSize: `${imageWidth}px ${imageHeight}px`,
                                        backgroundPosition: `${tile.bgX + shiftX}px ${tile.bgY + shiftY}px`,
                                        backgroundRepeat: 'no-repeat',
                                        color: '#d4d4d4',
                                        borderColor: '#3e3e3e',
                                        textShadow: '0 0 4px rgba(0,0,0,0.8), 0 0 8px rgba(0,0,0,0.6)',
                                    }}
                                >
                                    {tile.bit}
                                </div>
                            </div>
                        ))}
                    </div>
                ))}
            </div>
        </div>
    )
}
