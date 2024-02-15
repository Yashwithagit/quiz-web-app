import React from 'react';
import styles from './progressBar.module.css';

export const ScoreProgressBar: React.FC<{ progressValue: number, totalCount: number }> = ({
    progressValue,
    totalCount
}) => {
    const circleWidth = 100;
    const circleRadius = 40;

    // Ensure progressValue and totalCount are valid numbers
    if (isNaN(progressValue) || isNaN(totalCount) || totalCount === 0) {
        return null; // Return null if progressValue or totalCount is not a number, or totalCount is zero
    }

    // Ensure progressValue doesn't exceed totalCount
    const normalizedProgressValue = Math.min(progressValue, totalCount);

    const dashArray = circleRadius * Math.PI * 2;
    const dashOffset = dashArray - (dashArray * (normalizedProgressValue / totalCount));

    return (
        <svg width={circleWidth} height={circleWidth} viewBox={`0 0 ${circleWidth} ${circleWidth}`}>
            <circle cx={circleWidth / 2} cy={circleWidth / 2} strokeWidth='1rem' r={circleRadius} className={styles.circle__container} />
            <circle cx={circleWidth / 2} cy={circleWidth / 2} strokeWidth='0.4rem' r={circleRadius} className={styles.circularProgressbar__container} />
            <circle cx={circleWidth / 2} cy={circleWidth / 2} strokeWidth='0.4rem' r={circleRadius} className={styles.circularProgressbar__innerContainer}
                style={{ strokeDasharray: dashArray, strokeDashoffset: dashOffset }}
                transform={`rotate(-90 ${circleWidth / 2} ${circleWidth / 2})`} />
            <text x='50%' y='50%' dy='0.5rem' textAnchor='middle' className={styles.circularProgressbar__progressValue}>
                {normalizedProgressValue}
                <tspan className={styles.circularProgressbar__totalCount}>/{totalCount}</tspan>
            </text>
        </svg>
    );
};
