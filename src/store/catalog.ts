import { CatalogType } from '@/types/types';
import { create } from 'zustand';

const catalogState = create((set) => ({
  openCatalog: false,
  toggleCatalog: () =>
    set((state: CatalogType) => ({
      openCatalog: !state.openCatalog,
    })),
}));

export default catalogState;
