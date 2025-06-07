import React from 'react'

interface BadgeProps {
    className?: string
    children: string
}

const Badge: React.FC<BadgeProps> = ({ className, children }) => {
    return (
        <span className={className}>{children}</span>

    )
}

export default Badge
