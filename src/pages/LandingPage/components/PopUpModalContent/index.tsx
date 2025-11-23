import styles from "../../LandingPage.module.scss";
import CustomPopUpModal from "../../../../lib/CustomModal";

type PopUpModalContentType = {
  open?: boolean;
  setOpen?: (data: any) => void;
  subscriptionData?: any;
};
const PopUpModalContent = (props: PopUpModalContentType) => {
  const { open = false, setOpen = () => {}, subscriptionData = {} } = props;
  return (
    <CustomPopUpModal isOpen={open} onClose={() => setOpen(false)}>
      <div className={styles.subscriptionSummary}>
        <h2 className={styles.title}>Your Subscription Summary</h2>
        <p className={styles.desc}>
          Here’s the info retrieved from local storage.
        </p>

        <div className={styles.section}>
          <h3>Selected Plan</h3>
          <p>{subscriptionData?.selectedPlan || "—"}</p>
        </div>

        <div className={styles.section}>
          <h3>Subscription Rate</h3>
          <p>{subscriptionData?.subscriptionRate || "—"}</p>
        </div>

        <div className={styles.section}>
          <h3>Credit Card</h3>
          <p>
            Card Number:{" "}
            {subscriptionData?.creditCardDetails?.cardNumber || "—"}
          </p>
          <p>Expiry: {subscriptionData?.creditCardDetails?.expiry || "—"}</p>
          <p>CVC: ••••</p>
        </div>
      </div>
    </CustomPopUpModal>
  );
};

export default PopUpModalContent;
