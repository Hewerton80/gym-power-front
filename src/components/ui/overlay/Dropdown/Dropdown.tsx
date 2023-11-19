// "use client";
// import React, { ReactNode } from "react";
// // import * as Styled from "./Dropdown.styles";
// import * as RadixDropdown from "@radix-ui/react-dropdown-menu";
// import { twMerge } from "tailwind-merge";
// import slideAndFadeANimation from "@/components/helpers/slideAndFade.module.css";
// export interface DropdownProps {
//   children: ReactNode;
// }
// export interface DropdowToogleProps extends GlobalProps {
//   asChild?: boolean;
// }
// export interface DropdowMenuProps extends GlobalProps {}
// export interface DropdowItemProps extends RadixDropdown.DropdownMenuItemProps {
//   asChild?: boolean;
// }

// function Dropdown({ children }: DropdownProps) {
//   return <RadixDropdown.Root modal={false}>{children}</RadixDropdown.Root>;
// }

// function Toogle({ className, children, ...restProps }: DropdowToogleProps) {
//   return (
//     <RadixDropdown.Trigger
//       className={twMerge(
//         // Styled.Toogle({ css }),
//         className
//       )}
//       {...restProps}
//     >
//       {children}
//     </RadixDropdown.Trigger>
//   );
// }

// function Menu({
//   children,
//   className,

//   ...restProps
// }: DropdowMenuProps) {
//   return (
//     <RadixDropdown.Portal>
//       <RadixDropdown.Content
//         className={twMerge(
//           "flex flex-col bg-white rounded-lg border-2 border-primary-100",
//           "shadow-md py-1 animate-duration-200 origin-top-right",
//           slideAndFadeANimation.root,
//           className
//         )}
//         sideOffset={6}
//         alignOffset={8}
//         align="end"
//         role="menu"
//         {...restProps}
//       >
//         {children}
//       </RadixDropdown.Content>
//     </RadixDropdown.Portal>
//   );
// }

// function Item({ children, className, ...restProps }: DropdowItemProps) {
//   return (
//     <RadixDropdown.Item
//       className={twMerge(
//         "flex items-center outline-none px-3 py-1 cursor-pointer",
//         "text-gray-100 font-bold hover:bg-gray-50",
//         className
//       )}
//       role="menuitem"
//       {...restProps}
//     >
//       {children}
//     </RadixDropdown.Item>
//   );
// }

// Dropdown.Toogle = Toogle;
// Dropdown.Menu = Menu;
// Dropdown.Item = Item;

// export { Dropdown };
