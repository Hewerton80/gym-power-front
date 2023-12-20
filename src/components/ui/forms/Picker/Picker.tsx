"use client";
import { Button } from "@/components/ui/buttons/Button";
import { FaChevronDown } from "react-icons/fa";
import * as Popover from "@radix-ui/react-popover";
import { Select, SelectOption } from "@/components/ui/forms/Select";
import { Menu } from "@/components/ui/dataDisplay/Menu";
import { Input } from "@/components/ui/forms/Input";
import { twMerge } from "tailwind-merge";
import slideAndFade from "@/components/sharedStyles/slideAndFade.module.css";
import styled from "./Picker.module.css";
import { useCallback, useMemo, useState } from "react";
import { CloseButton } from "../../buttons/CloseButton";
interface PickerProps {
  value?: string;
  placeholder?: string;
  options?: SelectOption[];
  onChange?: (value: string) => void;
  hideInput?: boolean;
}

export function Picker({
  value,
  options,
  hideInput,
  placeholder = "Selecione",
  onChange,
}: PickerProps) {
  const [open, setOpen] = useState(false);
  const [inputValue, setInputValue] = useState("");

  const optionValuesKeysMapped = useMemo<{ [key: string]: string }>(() => {
    if (!Array.isArray(options)) {
      return {};
    }
    const optionValuesKeysMappedTmp: { [key: string]: string } = {};
    options.forEach((option) => {
      if (option?.value) {
        optionValuesKeysMappedTmp[option.value] = option.label;
      }
    });
    return optionValuesKeysMappedTmp;
  }, [options]);

  const filteredOptions = useMemo<SelectOption[]>(() => {
    if (!Array.isArray(options)) {
      return [];
    }
    if (!inputValue.trim()) {
      return options;
    }
    return options.filter((option) =>
      option?.label.toLowerCase().includes(inputValue.toLowerCase())
    );
  }, [inputValue, options]);

  const onSelectOption = useCallback(
    (value: string) => {
      setOpen(false);
      onChange?.(value);
      setInputValue("");
    },
    [onChange]
  );

  return (
    <Popover.Root open={open} onOpenChange={setOpen}>
      <Popover.Trigger asChild>
        <Button variantStyle="dark-ghost" rightIcon={<FaChevronDown />}>
          {value ? optionValuesKeysMapped[value] : placeholder}
          {value && (
            <CloseButton onClick={() => onChange?.("")} className="ml-4" />
          )}
        </Button>
      </Popover.Trigger>
      <Popover.Portal>
        <Popover.Content sideOffset={4} align="start" asChild>
          <Menu.Root
            className={twMerge(
              "origin-top-left border border-border py-2",
              "dark:border-dark-border dark:bg-dark-body",
              slideAndFade.root
            )}
          >
            {!hideInput && (
              <div className="flex px-2 pb-2 sm:px-4 sm:pb-4">
                <Input
                  value={inputValue}
                  onChange={(e) => setInputValue(e.target.value)}
                  placeholder="Filtrar..."
                />
              </div>
            )}
            <div className="flex">
              <Select
                selectClassName={styled.root}
                options={filteredOptions}
                onChangeSingleOption={(option) =>
                  onSelectOption(option?.value || "")
                }
                isAutocomplite
                menuIsOpen
                controlShouldRenderValue={false}
                hideSelectedOptions={false}
                tabSelectsValue={false}
                backspaceRemovesValue={false}
              />
            </div>
          </Menu.Root>
        </Popover.Content>
      </Popover.Portal>
    </Popover.Root>
  );
}
