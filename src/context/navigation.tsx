import { createContext, ReactNode, useState, useEffect } from 'react';

interface NavigationProviderProps {
  children: ReactNode;
}

export interface NavigationProviderValue {
  currentPath: string;
  navigate(to: string): void;
}

export const NavigationContext = createContext<{} | NavigationProviderValue>(
  {}
);

function NavigationProvider({ children }: NavigationProviderProps) {
  const [currentPath, setCurrentPath] = useState<string>(
    window.location.pathname
  );

  useEffect(() => {
    const handler = () => {
      setCurrentPath(window.location.pathname);
    };
    window.addEventListener('popstate', handler);
    return () => window.removeEventListener('popstate', handler);
  }, []);

  const navigate = (to: string) => {
    window.history.pushState({}, '', to);
    setCurrentPath(to);
  };

  return (
    <NavigationContext.Provider value={{ currentPath, navigate }}>
      {children}
    </NavigationContext.Provider>
  );
}

export default NavigationProvider;
