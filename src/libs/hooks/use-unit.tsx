import { createContext, useContext, useEffect, useState } from 'react';
import { Unit } from '../../types';

interface UnitContextValue {
  unit: Unit;
  setUnit: (unit: Unit) => void;
}

const UnitContext = createContext<UnitContextValue | undefined>(undefined);

export function UnitProvider({ children }: { children: React.ReactNode }) {
  const [unit, setUnitState] = useState<Unit>('Celsius');

  const setUnit = (newUnit: Unit) => {
    setUnitState(newUnit);
    localStorage.setItem('unit', newUnit);
  };

  useEffect(() => {
    const savedUnit = localStorage.getItem('unit') as Unit;
    if (savedUnit) {
      setUnitState(savedUnit);
    }
  }, []);

  return <UnitContext.Provider value={{ unit, setUnit }}>{children}</UnitContext.Provider>;
}

export const useUnit = (): UnitContextValue => {
  const context = useContext(UnitContext);
  if (!context) {
    throw new Error('useUnit must be used within a UnitProvider');
  }
  return context;
};
