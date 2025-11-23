import CustomImage from "../../../../lib/CustomeImage";
import CustomTypography from "../../../../lib/Typography";
import styles from "./Subscriptionplan.module.scss";

type SubscriptioncardType = {
  label?: string;
  location?: string;
  mileage?: string;
  access?: string;
  amount?: string;
  isFree?: boolean;
  setIsPlanSelected?: (data: any) => void;
  isPlanSelected?: boolean;
  value?: string;
  handlePlanChange?: (data: any) => void;
  selectedPlan?: string;
};
const Subscriptioncard = (props: SubscriptioncardType) => {
  const {
    label = "",
    location = "",
    mileage = "",
    access = "",
    amount = "",
    isFree = false,
    value = "",
    setIsPlanSelected = () => {},
    isPlanSelected = false,
    handlePlanChange = () => {},
    selectedPlan = "",
  } = props;
  const isCardSelected = isPlanSelected && selectedPlan === value;
  return (
    <>
      <div
        className={`${styles?.subscriptioncards} ${isCardSelected ? styles["selected--card"] : ""}`}
        onClick={() => {
          setIsPlanSelected?.(true);
          handlePlanChange?.(value);
        }}>
        <CustomTypography className={styles?.selectPlanHeading} variant="body">
          {label}
        </CustomTypography>
        <CustomTypography
          className={styles?.selectPlanSubHeading}
          variant="caption">
          <CustomImage src="/assets/location.svg" width={14} height={14} />{" "}
          Bring
          {location}
        </CustomTypography>
        <CustomTypography
          className={styles?.selectPlanSubHeading}
          variant="caption">
          <CustomImage src="/assets/meter.svg" width={14} height={14} /> Mileage
          {mileage}
        </CustomTypography>
        <CustomTypography
          className={styles?.selectPlanSubHeading}
          variant="caption">
          <CustomImage src="/assets/lock.svg" width={14} height={14} /> {access}
        </CustomTypography>
        <CustomTypography className={styles?.selectPlanFee} variant="body">
          {amount}
          {!isFree && <span className={styles?.currencyPeriod}>/month</span>}
        </CustomTypography>
      </div>
    </>
  );
};

export default Subscriptioncard;
