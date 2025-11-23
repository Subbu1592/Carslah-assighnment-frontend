import CreditCardInput from "../../../../lib/CreditCardInput";
import CustomRadio from "../../../../lib/CustomRadio";
import CustomTypography from "../../../../lib/Typography";
import styles from "./Subscriptionplan.module.scss";

type BestMatesType = {
  subscriptionRate?: string;
  handleScriptionrateChange?: (data: any) => void;
  handleCardDetailsChange?: (key: string, data: string) => void;
  creditCardDetails?: any;
};

const BestMates = (props: BestMatesType) => {
  const {
    subscriptionRate = "",
    handleScriptionrateChange = () => {},
    handleCardDetailsChange = () => {},
    creditCardDetails = {},
  } = props;
  return (
    <div>
      <div className={styles?.goodMatesContainer}>
        <CustomRadio
          label="BYO secondary GPS - $5/month"
          checked={subscriptionRate === "5"}
          onChange={() => handleScriptionrateChange("5")}
        />
        <div className={styles?.bestMatesInsuranceWrapper}>
          <CustomRadio
            label="Between trip insurance"
            checked={subscriptionRate === "tripInsurance"}
            onChange={() => handleScriptionrateChange("tripInsurance")}
          />
          <div className={styles?.commingSoontag}>coming soon</div>
        </div>
      </div>
      <div>
        <CreditCardInput
          cardNumber={creditCardDetails?.cardNumber}
          expiry={creditCardDetails?.expiry}
          cvc={creditCardDetails?.cvc}
          onCardNumberChange={(value) => {
            handleCardDetailsChange?.("cardNumber", value);
          }}
          onExpiryChange={(value) => {
            handleCardDetailsChange?.("expiry", value);
          }}
          onCvcChange={(value) => {
            handleCardDetailsChange?.("cvc", value);
          }}
        />
        <div className={styles?.cardCaptionWrapper}>
          <CustomTypography className={styles?.cardCaption} variant="caption">
            You will not be charged right now. Subscription will only start once
            your listing is published and live.
          </CustomTypography>
        </div>
      </div>
    </div>
  );
};

export default BestMates;
