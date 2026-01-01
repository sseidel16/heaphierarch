import { ImageData } from 'images';
import React, { useEffect, useMemo, useRef, useState } from 'react'
import { trimmedCode } from './code'

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
        rows,
        cols,
        tileSize,
        fontSize,
        charFontSize,
    } = useMemo(() => {
        const area = dimensions.width * dimensions.height;
        const tileDimAim = Math.sqrt(area / trimmedCode.length); // Aim for ~trimmed length tiles
        const tileSize = Math.ceil(dimensions.width / Math.floor(dimensions.width / tileDimAim));

        const cols = Math.ceil(dimensions.width / tileSize);
        const rows = Math.ceil(dimensions.height / tileSize);

        // Calculate font size based on tile size
        const fontSize = Math.floor(tileSize / 6);
        const charFontSize = Math.floor(tileSize / 4);

        return { rows, cols, tileSize, fontSize, charFontSize };
    }, [dimensions]);

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
            focusX: focusX + shiftX,
            focusY: focusY + shiftY,
        };
    }, [imageData, dimensions])

    const tilesGrid = useMemo(() => {
        return Array.from({ length: rows }).map((_, rowIndex) => {
            return Array.from({ length: cols }).map((_, colIndex) => {
                const id = rowIndex * cols + colIndex;
                return {
                    id,
                    delay: Math.floor(Math.random() * 500),
                }
            })
        });
    }, [rows, cols, imageData]);

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
                    <div key={rowIndex} className="flex flex-row overflow-hidden" style={{ height: tileSize }}>
                        {rowTiles.map((tile, colIndex) => (
                            <div
                                key={tile.id}
                                className="relative flex-shrink-0"
                                style={{
                                    width: tileSize,
                                    height: tileSize,
                                    transformStyle: 'preserve-3d',
                                    transition: `transform 300ms, opacity 450ms`,
                                    transitionDelay: `${tile.delay}ms`,
                                    transform: flipped ? 'rotateY(0deg) rotateX(0deg)' : 'rotateY(90deg) rotateX(90deg)',
                                    opacity: flipped ? 1 : 0,
                                }}
                            >
                                {/* Front face - Image with ASCII byte overlay */}
                                <div
                                    className="absolute inset-0 flex flex-col items-center justify-center font-mono border"
                                    style={{
                                        backfaceVisibility: 'hidden',
                                        backgroundImage: `url(${imageData.src})`,
                                        backgroundSize: `${imageWidth}px ${imageHeight}px`,
                                        backgroundPosition: `${-colIndex * tileSize + shiftX}px ${ -rowIndex * tileSize + shiftY}px`,
                                        backgroundRepeat: 'no-repeat',
                                        color: 'rgba(180, 180, 180, 0.8)',
                                        borderColor: '#3e3e3e',
                                        fontSize: `${fontSize}px`,
                                    }}
                                >
                                    {(() => {
                                        const char = tile.id < trimmedCode.length ? trimmedCode[tile.id] : ' ';
                                        const byte = char.charCodeAt(0);
                                        const upperNibble = (byte >> 4).toString(2).padStart(4, '0');
                                        const lowerNibble = (byte & 0xF).toString(2).padStart(4, '0');
                                        return (
                                            <>
                                                <div>{upperNibble}</div>
                                                <div>{lowerNibble}</div>
                                                <div className="font-semibold" style={{ fontSize: `${charFontSize}px`, marginTop: '2px' }}>{char}</div>
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
