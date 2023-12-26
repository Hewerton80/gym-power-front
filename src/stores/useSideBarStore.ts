import { create } from "zustand";

export const INITIAL_SIDE_BAR_WIDTH = 214;
export const MIN_SIDE_BAR_WIDTH = INITIAL_SIDE_BAR_WIDTH - 100;

interface State {
  showSideBar: boolean;
  showOnlyIcons: boolean;
  sideBarWidth: number;
  resizingSideBar: boolean;
}

interface Actions {
  setShowSideBar: (showSideBar: boolean) => void;
  setShowOnlyIcons: (showOnlyIcons: boolean) => void;
  setSideBarWidth: (sideBarWidth: number) => void;
  setResizingSideBar: (resizingSideBar: boolean) => void;
  toggleSideBar: () => void;
  toggleOnlyIcons: () => void;
}

export const useSideBarStore = create<State & Actions>((set) => ({
  showSideBar: true,
  showOnlyIcons: false,
  sideBarWidth: INITIAL_SIDE_BAR_WIDTH,
  resizingSideBar: false,

  setShowSideBar: (showSideBar) => set({ showSideBar }),
  setShowOnlyIcons: (showOnlyIcons) => set({ showOnlyIcons }),
  setSideBarWidth: (sideBarWidth) => set({ sideBarWidth }),
  setResizingSideBar: (resizingSideBar) => set({ resizingSideBar }),
  toggleSideBar: () => set((state) => ({ showSideBar: !state.showSideBar })),
  toggleOnlyIcons: () =>
    set((state) => ({ showOnlyIcons: !state.showOnlyIcons })),
}));
