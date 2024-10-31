import React, { useState } from 'react';
import './SliderHeader.css';

export const SliderCardHeader = () => {
    const [activeIndex, setActiveIndex] = useState(0);

    const panels = [
        {
            title: 'Explore The World',
            imageUrl: "https://media.istockphoto.com/id/1201022726/es/foto/hombre-elegante-con-gafas-de-sol-y-camisa-blanca-vida-en-la-ciudad.webp?s=2048x2048&w=is&k=20&c=4kMByOYoG8sbNMCkA72j876-zNW5LHch2NDRRB8SISo=",
        },
        {
            title: 'Wild Forest',
            imageUrl: 'https://media.istockphoto.com/id/1369227756/es/foto/ri%C3%A9ndose-de-su-camino-a-trav%C3%A9s-del-centro-comercial.webp?s=2048x2048&w=is&k=20&c=LWBu1eg15XamocFKh2t7iMM9wi0Fyy0LUHsA6qIZtI4=',
    },
        {
            title: 'Sunny Beach',
            imageUrl: 'https://media.istockphoto.com/id/843548582/es/foto/retrato-de-sonriente-hombre-despreocupado-en-azotea.webp?s=2048x2048&w=is&k=20&c=zVAD7_jZ7d7LveP5aH6IsP82X1o1yJLWhRrABnL_HWw=',
        },
        {
            title: 'City on Winter',
            imageUrl: 'https://media.istockphoto.com/id/1059156958/es/foto/sentimientos-puros.webp?s=2048x2048&w=is&k=20&c=tEbIeehSmlGfnGo2YUyGqi3oNhzKfGtpdj05ReVpbxo=',
        },
        {
            title: 'Mountains - Clouds',
            imageUrl: 'https://media.istockphoto.com/id/637540630/es/foto/turista-guapo.webp?s=2048x2048&w=is&k=20&c=PWGL690KLgWSkkAbMR5cBjQSUFwy_FkkTKBL7FZhIN8=',
        }
    ];

    const handlePanelClick = (index) => {
        setActiveIndex(index);
    };

    return (
        <div className="Slider_Header">
            <div className="container">
                {panels.map((panel, index) => (
                    <div
                        
                        key={index}
                        className={`panel ${activeIndex === index ? 'active' : ''}`}
                        style={{ backgroundImage: `url(${panel.imageUrl})` }}
                        onClick={() => handlePanelClick(index)}
                    >
                        <h3>{panel.title}</h3>

                    </div>
                ))}
            </div>
        </div>
    );
};
