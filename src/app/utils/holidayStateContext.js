'use client';

import { createContext, useContext, useState } from 'react';

const HolidayStateContext = createContext();

export function useHolidayState() {
  return useContext(HolidayStateContext);
}

export function HolidayStateProvider({ children }) {
  const [selectedHoliday, setSelectedHoliday] = useState(null);

  return (
    <HolidayStateContext.Provider
      value={{ selectedHoliday, setSelectedHoliday }}
    >
      {children}
    </HolidayStateContext.Provider>
  );
}
