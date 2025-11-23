import CustomButton from "../../../../lib/CustomButton";
import styles from "./Footer.module.scss";

type handleNextTabChangeType = {
  handleNextTabChange?: () => void;
};
const Footer = (props: handleNextTabChangeType) => {
  const { handleNextTabChange = () => {} } = props;
  return (
    <div className={styles.footer}>
      <CustomButton
        className={styles?.footerButton}
        label="Next"
        size="md"
        variant="secondary"
        onClick={handleNextTabChange}
      />
    </div>
  );
};

export default Footer;
