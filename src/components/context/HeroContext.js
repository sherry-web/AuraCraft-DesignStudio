import React, { createContext, useState } from 'react';

export const HeroContext = createContext();

export const HeroProvider = ({ children }) => {
    const [heroContent, setHeroContent] = useState({
        title: "Welcome to AuraCraft!",
        subtitle: "Empowering your digital presence.",
    });

    return (
        <HeroContext.Provider value={{ heroContent, setHeroContent }}>
            {children}
        </HeroContext.Provider>
    );
};
    