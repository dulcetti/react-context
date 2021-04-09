import { createContext, useContext } from 'react';

type FodasseData = {};

const FodasseDefaultValues = {};

export const FodasseContext = createContext<FodasseData>(FodasseDefaultValues);

type FodasseProviderProps = {
  children: React.ReactNode;
};

export const FodasseProvider = ({ children }: FodasseProviderProps) => {
  return <FodasseContext.Provider value={{}}>{children}</FodasseContext.Provider>;
};

export const useFodasse = () => useContext(FodasseContext);
