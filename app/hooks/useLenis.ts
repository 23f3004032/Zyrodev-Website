'use client';

import { createContext, useContext } from 'react';
import Lenis from 'lenis';

// Create a context to hold the Lenis instance
export const LenisContext = createContext<Lenis | null>(null);

// Custom hook to easily access the Lenis instance
export const useLenis = () => useContext(LenisContext);