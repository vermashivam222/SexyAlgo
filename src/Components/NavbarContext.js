import React, { createContext, useState } from 'react';

export const NavbarContext = createContext();

export const NavbarProvider = ({ children }) => {
  const [backgroundColor, setBackgroundColor] = useState('transparent');

  const updateNavbarColor = (color) => {
    setBackgroundColor(color);
  };

  return (
    <NavbarContext.Provider value={{ backgroundColor, updateNavbarColor }}>
      {children}
    </NavbarContext.Provider>
  );
};