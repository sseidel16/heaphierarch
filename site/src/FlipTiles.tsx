import { ImageData } from 'images';
import React, { useEffect, useMemo, useRef, useState } from 'react'
import { fibCode } from './code'

const TILE_SIZE = 100;

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

    const tilesGrid = useMemo(() => {
        const cols = Math.ceil(dimensions.width / TILE_SIZE);
        const rows = Math.ceil(dimensions.height / TILE_SIZE);

        const maxDim = rows + cols;

        return Array.from({ length: rows }).map((_, rowIndex) => {
            return Array.from({ length: cols }).map((_, colIndex) => {
                const id = rowIndex * cols + colIndex;
                return {
                    id,
                    bgX: -colIndex * TILE_SIZE,
                    bgY: -rowIndex * TILE_SIZE,
                    delay: Math.floor(Math.random() * 500),
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
            className="w-full h-full overflow-hidden"
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
                                {/* Front face - Image with ASCII byte overlay */}
                                <div
                                    className="absolute inset-0 flex flex-col items-center justify-center font-mono text-sm border"
                                    style={{
                                        backfaceVisibility: 'hidden',
                                        backgroundImage: `url(${imageData.src})`,
                                        backgroundSize: `${imageWidth}px ${imageHeight}px`,
                                        backgroundPosition: `${tile.bgX + shiftX}px ${tile.bgY + shiftY}px`,
                                        backgroundRepeat: 'no-repeat',
                                        color: 'rgba(180, 180, 180, 0.8)',
                                        borderColor: '#3e3e3e',
                                    }}
                                >
                                    {(() => {
                                        const char = tile.id < fibCode.length ? fibCode[tile.id] : ' ';
                                        const byte = char.charCodeAt(0);
                                        const upperNibble = (byte >> 4).toString(2).padStart(4, '0');
                                        const lowerNibble = (byte & 0xF).toString(2).padStart(4, '0');
                                        return (
                                            <>
                                                <div>{upperNibble}</div>
                                                <div>{lowerNibble}</div>
                                                <div className="mt-1 text-base font-semibold">{char}</div>
                                            </>
                                        );
                                    })()}
                                </div>
                            </div>
                        ))}
                    </div>
                ))}
            </div>
        </div>
    )
}
