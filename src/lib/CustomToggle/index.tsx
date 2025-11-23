import styles from "./CustomToggle.module.scss";

interface CustomToggleProps {
  label?: string;
  checked: boolean;
  onChange: (value: boolean) => void;
}

const CustomToggle = ({ label, checked, onChange }: CustomToggleProps) => {
  return (
    <div className={styles.wrapper}>
      {label && <span className={styles.label}>{label}</span>}

      <div
        className={`${styles.toggle} ${checked ? styles.on : ""}`}
        onClick={() => onChange(!checked)}>
        <div className={styles.circle}></div>
      </div>
    </div>
  );
};

export default CustomToggle;
