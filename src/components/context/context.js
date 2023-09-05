import React, { createContext, useState } from 'react';

const ColorContext = createContext();

const ColorProvider = ({ children }) => {
    const [backgroundColor, setBackgroundColor] = useState('white');

    return (
        <ColorContext.Provider value={{ backgroundColor, setBackgroundColor }}>
            {children}
        </ColorContext.Provider>
    );
};

export { ColorContext, ColorProvider };