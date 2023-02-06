import { create } from "zustand";
import { persist } from "zustand/middleware";

interface props {
  city: string;
  setCity: (name: string) => void;
}

const CitySlice = create(
  persist<props>(
    (set) => ({
      city: "Nicaragua",
      setCity: (name: string) => {
        set(() => ({
          city: name,
        }));
      },
    }),
    {
      name: "weather-app",
    }
  )
);

export default CitySlice;
