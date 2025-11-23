import styles from "./Typography.module.scss";

type Variant = "h1" | "h2" | "h3" | "subtitle" | "body" | "small" | "caption";

interface TypographyProps {
  children: React.ReactNode;
  variant?: Variant;
  color?: string;
  className?: string;
  align?: "left" | "center" | "right";
  onClick?: (data: any) => void;
}

const CustomTypography = ({
  children,
  variant = "body",
  color,
  className = "",
  align = "left",
  onClick = () => {},
}: TypographyProps) => {
  return (
    <p
      onClick={onClick}
      className={`${styles[variant]} ${className} ${styles.globalStyle}`}
      style={{ color, textAlign: align }}>
      {children}
    </p>
  );
};

export default CustomTypography;
