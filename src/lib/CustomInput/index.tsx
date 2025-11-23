import React, { type InputHTMLAttributes } from "react";
import styles from "./CustomInput.module.scss";
import CustomTypography from "../Typography";
import CustomImage from "../CustomeImage";

interface CustomInputProps extends InputHTMLAttributes<HTMLInputElement> {
  label?: string;
  error?: string;
  fullWidth?: boolean;
  icon?: React.ReactNode;
}

const CustomInput = ({
  label,
  error,
  fullWidth = true,
  icon,
  className = "",
  ...props
}: CustomInputProps) => {
  return (
    <div
      className={`${styles.inputWrapper} ${fullWidth ? styles.fullWidth : ""}`}>
      {label && (
        <CustomTypography variant="subtitle" className={styles.label}>
          {label}
        </CustomTypography>
      )}

      <div
        className={`${styles.inputContainer} ${
          error ? styles.errorBorder : ""
        }`}>
        <input
          className={`${styles.inputField} ${!icon ? styles?.withoutIcon : ""} ${className}`}
          {...props}
        />

        {icon && (
          <CustomImage
            width={22}
            height={22}
            src={icon}
            className={styles.icon}
          />
        )}
      </div>

      {error && <p className={styles.errorText}>{error}</p>}
    </div>
  );
};

export default CustomInput;
