import { createContext, useContext, useEffect, useState } from 'react';
import { Unit } from '../../../types';

export interface UnitContextValue {
  unit: Unit;
  setUnit: (unit: Unit) => void;
}

export const UnitContext = createContext<UnitContextValue | undefined>(undefined);

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
  //* v8 ignore next 3 */
  if (!context) {
    throw new Error('useUnit must be used within a UnitProvider');
  }
  return context;
};
