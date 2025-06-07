import React from 'react'

interface ImageProps {
    src: string;
    alt: string;
    className?: string;
    loading?: 'lazy' | 'eager';
}

const Image: React.FC<ImageProps> = ({ src, alt, className, loading }) => {
    return (
        <img src={src} alt={alt} className={className} loading={loading} />
    )
}

export default Image