import React from 'react';

interface CardProps {
    children: React.ReactNode;
}

const Card: React.FC<CardProps> = ({ children }) => {
    const cardStyle = {
        padding: '20px',
        margin: '10px',
        border: '1px solid #ccc',
        borderRadius: '8px',
        boxShadow: '0 2px 4px rgba(0, 0, 0, 0.1)',
        backgroundColor: '#fff',
    };
    return (
        <div style={cardStyle}>
            {children}
        </div>
    );
};

export default Card;