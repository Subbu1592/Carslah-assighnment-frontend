import { subscriptionPlanConst } from "../../../../constants";
import CustomTypography from "../../../../lib/Typography";
import NotFound from "../NotFound";
import BestMates from "./BestMates";
import GoodMates from "./GoodMates";
import JustMates from "./JustMates";
import Subscriptioncard from "./Subscriptioncard";
import styles from "./Subscriptionplan.module.scss";

type SubscriptionPlanType = {
  isPlanSelected?: boolean;
  setIsPlanSelected?: (data: any) => void;
  handlePlanChange?: (data: any) => void;
  selectedPlan?: string;
  subscriptionRate?: string;
  handleScriptionrateChange?: (data: any) => void;
  handleCardDetailsChange?: (data: any) => void;
  creditCardDetails?: any;
};
const SubscriptionPlan = (props: SubscriptionPlanType) => {
  const {
    isPlanSelected = false,
    setIsPlanSelected = () => {},
    handlePlanChange = () => {},
    selectedPlan = "",
    handleScriptionrateChange = () => {},
    subscriptionRate = "",
    handleCardDetailsChange = () => {},
    creditCardDetails = {},
  } = props;

  const renderComponentsAccordingToCard = {
    justMates: (
      <JustMates
        subscriptionRate={subscriptionRate}
        handleScriptionrateChange={handleScriptionrateChange}
      />
    ),
    goodMates: (
      <GoodMates
        subscriptionRate={subscriptionRate}
        handleScriptionrateChange={handleScriptionrateChange}
        handleCardDetailsChange={handleCardDetailsChange}
        creditCardDetails={creditCardDetails}
      />
    ),
    bestMates: (
      <BestMates
        subscriptionRate={subscriptionRate}
        handleScriptionrateChange={handleScriptionrateChange}
        handleCardDetailsChange={handleCardDetailsChange}
        creditCardDetails={creditCardDetails}
      />
    ),
  };
  return (
    <div className={styles?.subscriptionWrapper}>
      {/* 1 */}
      <div className={styles?.subscriptionsection1}>
        <CustomTypography className={styles?.subscriptionHeading} variant="h3">
          Subscription plan
        </CustomTypography>
        <CustomTypography
          className={styles?.subscriptionSubHeading}
          variant="small">
          Select the ideal subscription plan for your listing.
        </CustomTypography>
      </div>
      {/* 2 */}
      <div className={styles?.subscriptionsection2}>
        <CustomTypography className={styles?.selectPlanHeading} variant="body">
          Select your plan
        </CustomTypography>
        <div className={styles?.cardsWrapper}>
          {subscriptionPlanConst &&
            subscriptionPlanConst?.map((data) => {
              const restprops = {
                ...data,
                setIsPlanSelected,
                isPlanSelected,
                selectedPlan,
                handlePlanChange,
              };
              return <Subscriptioncard {...restprops} />;
            })}
        </div>
        {isPlanSelected && (
          <div className={styles?.justMatesWrapper}>
            <CustomTypography
              className={styles?.justMatesHeading}
              variant="body">
              Select add-ons for your subscription
            </CustomTypography>
            {renderComponentsAccordingToCard?.[
              selectedPlan as keyof typeof renderComponentsAccordingToCard
            ] ?? <NotFound />}
          </div>
        )}
      </div>
      {/* 3 */}
      <div className={styles?.subscriptionsection3}>
        <CustomTypography className={styles?.selectPlanHeading} variant="small">
          Learn more about the plans here -
          <span className={styles?.planForMe}>
            {" "}
            What is the right plan for me?
          </span>
        </CustomTypography>
        <CustomTypography className={styles?.selectPlanHeading} variant="small">
          You will be able to switch between plans easily later as well. Speak
          to our host success team if you need any clarifications.
        </CustomTypography>
      </div>
    </div>
  );
};

export default SubscriptionPlan;
