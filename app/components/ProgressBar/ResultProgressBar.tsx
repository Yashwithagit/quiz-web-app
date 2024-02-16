import React from 'react';
import styles from './progressBar.module.css';

export const ResultProgressBar: React.FC<{ result: number, total: number }> = ({
    result,
    total
}) => {
    const circleWidth = 320;
    const circleRadius = 200;
    const arcAngle = 180; // Angle of the semi-circle
    


    // Calculate rotation angle for black line indicator
    const rotationAngle = arcAngle * (result / total) - 180;

    return (
        <svg width={circleWidth} height={220} viewBox={`0 0 ${circleWidth} ${circleRadius}`} >
        
            {/* Inner circle */}
            <filter id="shadow" x="-50%" y="-50%" width="200%" height="200%">
                <feDropShadow dx="0" dy="0" stdDeviation="5" floodColor="#000000" floodOpacity="0.3" />
            </filter>
            <circle cx={160} cy={120} r={80} fill="#ffffff" filter="url(#shadow)" />
            <circle cx={160} cy={120} r={70} className={styles.circle_inner_text_container} />
            {/* Circle arc */}
            <defs>
                <linearGradient id="strokeGradient" x1="1%" y1="2%" x2="100%" y2="10%">
                    <stop offset="0%" stopColor="#44B77B" />
                    <stop offset="48%" stopColor="#FFD033" />
                    <stop offset="100%" stopColor="#FF3B3F" />
                </linearGradient>
            </defs>
            <circle
                cx={circleWidth / 2}
                cy={130}
                strokeWidth='0.4rem'
                r={130}
                className={styles.resultProgressbar__container}
                stroke="url(#strokeGradient)"
                transform={`rotate(-360 ${circleWidth / 2} ${circleRadius})`}
            />

            {/* percentage result value */}
            <text x='50%' y='65%' dy='0.5rem' textAnchor='middle' className={styles.result_text}>
                {(result / total) * 100} %
            </text>
        </svg>
    );
};
