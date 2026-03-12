import { create } from 'zustand';

export const useCurrency = create((set) => ({
currency: 'USD',
symbol: '$',
setCurrency: (currency) => set({ currency }),
}));

export default useCurrency;
