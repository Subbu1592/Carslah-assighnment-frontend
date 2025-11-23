import CustomButton from "../../../../lib/CustomButton";
import CustomTypography from "../../../../lib/Typography";
import styles from "./NotFound.module.scss";

type NotFounType = {
  handleTabChange?: (data: any) => void;
};
const NotFound = (props: NotFounType) => {
  const { handleTabChange = () => {} } = props;
  return (
    <div className={styles.wrapper}>
      <div className={styles.card}>
        <CustomTypography variant="h2" align="center" className={styles.title}>
          Oops! Nothing here
        </CustomTypography>

        <CustomTypography
          variant="body"
          align="center"
          className={styles.subtitle}>
          The section you’re trying to view doesn’t exist yet.
        </CustomTypography>

        <CustomButton
          label="Go Back"
          onClick={() => {
            handleTabChange?.("subscription");
          }}
        />
      </div>
    </div>
  );
};

export default NotFound;
