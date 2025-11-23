import styles from "./CustomButton.module.scss";

interface CustomButtonProps {
  label: string;
  variant?: "primary" | "secondary" | "outline";
  size?: "sm" | "md" | "lg";
  fullWidth?: boolean;
  disabled?: boolean;
  onClick?: () => void;
  className?: string;
}

const CustomButton = ({
  label,
  variant = "primary",
  size = "md",
  fullWidth = false,
  disabled = false,
  onClick,
  className = "",
}: CustomButtonProps) => {
  return (
    <button
      className={`
        ${styles.button} 
        ${styles[variant]} 
        ${styles[size]} 
        ${fullWidth ? styles.fullWidth : ""} 
        ${className}
      `}
      disabled={disabled}
      onClick={onClick}>
      {label}
    </button>
  );
};

export default CustomButton;
