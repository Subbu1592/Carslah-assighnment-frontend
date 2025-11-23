import { useState, useRef, useEffect } from "react";
import styles from "./CustomDropDown.module.scss";

export interface DropdownOption {
  label: string;
  value: string | number;
  icon?: string;
}

interface CustomDropDownProps {
  options: DropdownOption[];
  placeholder?: string;
  value?: string | number;
  onChange?: (value: string | number) => void;
  className?: string;
  disabled?: boolean;
}

const CustomDropDown = ({
  options = [],
  placeholder = "Select...",
  value,
  onChange = () => {},
  className = "",
  disabled = false,
}: CustomDropDownProps) => {
  const [open, setOpen] = useState(false);
  const dropdownRef = useRef<HTMLDivElement | null>(null);

  const handleSelect = (val: string | number) => {
    onChange(val);
    setOpen(false);
  };

  // Close when clicking outside
  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (
        dropdownRef.current &&
        !dropdownRef.current.contains(event.target as Node)
      ) {
        setOpen(false);
      }
    };
    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  const selected = options.find((opt) => opt.value === value);

  return (
    <div
      ref={dropdownRef}
      className={`${styles.dropdownWrapper} ${className} ${
        disabled ? styles.disabled : ""
      }`}>
      {/* Selected Box */}
      <div
        className={styles.dropdownHeader}
        onClick={() => !disabled && setOpen(!open)}>
        <span>{selected ? selected.label : placeholder}</span>

        <img
          className={`${styles.arrow} ${open ? styles.open : ""}`}
          src="/assets/arrowDown.svg"
          width={12}
          height={12}
        />
      </div>

      {/* Dropdown List */}
      {open && (
        <div className={styles.dropdownList}>
          {options.map((item) => (
            <div
              key={item.value}
              className={`${styles.dropdownItem} ${
                value === item.value ? styles.selectedItem : ""
              }`}
              onClick={() => handleSelect(item.value)}>
              {item.icon && (
                <img src={item.icon} width={16} height={16} alt="" />
              )}
              {item.label}
            </div>
          ))}
        </div>
      )}
    </div>
  );
};

export default CustomDropDown;
