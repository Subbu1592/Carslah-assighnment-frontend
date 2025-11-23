import CustomTypography from "../Typography";
import styles from "./CustomRadio.module.scss";

type CustomRadioProps = {
  label: string;
  checked?: boolean;
  onChange?: () => void;
};

const CustomRadio = ({
  label,
  checked = false,
  onChange = () => {},
}: CustomRadioProps) => {
  return (
    <div
      className={`${styles.radioWrapper} ${checked ? styles.selected : ""}`}
      onClick={onChange}>
      <CustomTypography className={styles?.radioLabel} variant="body">
        {label}
      </CustomTypography>
      <div
        className={`${styles.circle} ${checked ? styles.circleSelected : ""}`}>
        {checked && <div className={styles.innerDot}></div>}
      </div>
    </div>
  );
};

export default CustomRadio;
