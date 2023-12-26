import {
  INITIAL_SIDE_BAR_WIDTH,
  MIN_SIDE_BAR_WIDTH,
  useSideBarStore,
} from "@/stores/useSideBarStore";
import { useEffect } from "react";
import { useShallow } from "zustand/react/shallow";

export function useSideBar() {
  const {
    showSideBar,
    showOnlyIcons,
    sideBarWidth,
    resizingSideBar,
    setResizingSideBar,
    setShowOnlyIcons,
    setShowSideBar,
    setSideBarWidth,
    toggleSideBar,
    toggleOnlyIcons,
  } = useSideBarStore(useShallow((state) => state));

  useEffect(() => {
    if (sideBarWidth < MIN_SIDE_BAR_WIDTH) {
      setShowOnlyIcons(true);
      setSideBarWidth(INITIAL_SIDE_BAR_WIDTH);
    } else if (sideBarWidth < INITIAL_SIDE_BAR_WIDTH) {
      setSideBarWidth(INITIAL_SIDE_BAR_WIDTH);
    }
  }, [sideBarWidth, setShowOnlyIcons, setSideBarWidth]);

  return {
    showSideBar,
    showOnlyIcons,
    sideBarWidth,
    resizingSideBar,
    setResizingSideBar,
    setShowOnlyIcons,
    setShowSideBar,
    setSideBarWidth,
    toggleSideBar,
    toggleOnlyIcons,
  };
}
