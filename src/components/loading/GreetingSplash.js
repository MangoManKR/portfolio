import React, { useEffect, useState } from 'react';
import { ClipLoader } from 'react-spinners';
import './styles/GreetingSplash.css';

function GreetingSplash() {
    const greetings = [
        "Hello!", "Welcome!", "Howdy!", "안녕하세요!",
        "Bonjour!", "Guten Tag!", "你好!", "!السلام عليكم",
        "xin chào!", "नमस्ते!", "!مرحباً", "Ciao!",
        "こんにちは!", "สวัสดี!", "Halo!", "Olá!",
    ];

    const [renderedGreetings, setRenderedGreetings] = useState([]);
    const [showFixedGreeting, setShowFixedGreeting] = useState(false);

    const getRandomStyle = () => {
        const top = Math.random() * (window.innerHeight - 50);
        const left = Math.random() * (window.innerWidth - 50);
        const fontSize = Math.random() * (36 - 16) + 16;
        const delay = Math.random() * 2;
        return {
            position: 'absolute',
            top: `${top}px`,
            left: `${left}px`,
            fontSize: `${fontSize}px`,
            animationDelay: `${delay}s`,
            animationName: 'pop-up',
            animationDuration: '1s',
            animationFillMode: 'backwards',
        };
    };
    
    const fixedGreetingStyle = {
        position: 'fixed',
        top: '20%',
        left: '30%',
        transform: 'translate(-50%, -50%)',
        textAlign: 'center',
        fontSize: '100px',
        animationName: 'slide-up',
        animationDuration: '2s',
        animationFillMode: 'backwards',
    };

    useEffect(() => {
        const timer = setInterval(() => {
            const newGreeting = greetings[Math.floor(Math.random() * greetings.length)];
            const newSplash = (
                <p key={renderedGreetings.length} style={getRandomStyle()}>
                    {newGreeting}
                </p>
            );
            setRenderedGreetings((prevGreetings) => [...prevGreetings, newSplash]);
        }, 100);

        setTimeout(() => {
            clearInterval(timer);
            setShowFixedGreeting(true);
        }, 3000);

        return () => clearInterval(timer);
    }, [greetings, renderedGreetings]);

    return (
                <div className="greeting-container">
            {!showFixedGreeting && renderedGreetings}
{showFixedGreeting && (
                <p style={fixedGreetingStyle}>안녕하세요!</p>
            )}
        </div>
    );
}

export default GreetingSplash;