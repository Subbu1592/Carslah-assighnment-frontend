import CustomRadio from "../../../../lib/CustomRadio";
import styles from "./Subscriptionplan.module.scss";

type JustMatesType = {
  subscriptionRate?: string;
  handleScriptionrateChange?: (data: any) => void;
};
const JustMates = (props: JustMatesType) => {
  const { subscriptionRate = "", handleScriptionrateChange = () => {} } = props;
  return (
    <div className={styles?.justMatesContainer}>
      <CustomRadio
        label="BYO secondary GPS - $5/month"
        checked={subscriptionRate === "5"}
        onChange={() => handleScriptionrateChange("5")}
      />
    </div>
  );
};

export default JustMates;
