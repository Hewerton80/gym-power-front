import { ProfilePopover } from "@/components/ui/overlay/ProfilePopover";
import { useMemo } from "react";
import { FaBarsStaggered } from "react-icons/fa6";
import { Slot } from "@radix-ui/react-slot";
import { IconButton } from "@/components/ui/buttons/IconButton";
import { FaMoon, FaSun } from "react-icons/fa";
import { useTheme } from "@/hooks/utils/useTheme";
import { useSideBar } from "@/hooks/utils/useSideBar";

export function Header() {
  const { theme, toggleTheme } = useTheme();

  const { toggleSideBar, toggleOnlyIcons } = useSideBar();

  const toogleSideBarButtonElement = useMemo(() => {
    return (
      <span className="items-center justify-center cursor-pointer">
        <FaBarsStaggered className="text-primary dark:text-light text-3xl" />
      </span>
    );
  }, []);

  return (
    <header className="bg-card dark:bg-dark-card/70 h-20 shadow-sm">
      <div className="flex items-center h-full px-4 sm:px-8">
        <Slot className="flex md:hidden" onClick={toggleSideBar}>
          {toogleSideBarButtonElement}
        </Slot>
        <Slot className="hidden md:flex" onClick={toggleOnlyIcons}>
          {toogleSideBarButtonElement}
        </Slot>
        <div className="flex gap-4 items-center ml-auto">
          <IconButton
            variantStyle="primary-ghost"
            icon={theme === "dark" ? <FaMoon /> : <FaSun />}
            onClick={() => toggleTheme()}
          />
          <ProfilePopover />
        </div>
      </div>
    </header>
  );
}
