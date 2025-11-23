import styles from "./CreditCard.module.scss";
import CustomImage from "../CustomeImage";
import CustomTypography from "../Typography";

interface CreditCardInputProps {
  label?: string;

  cardNumber: string;
  expiry: string;
  cvc: string;

  onCardNumberChange: (value: string) => void;
  onExpiryChange: (value: string) => void;
  onCvcChange: (value: string) => void;

  icon?: string;
}

const CreditCardInput = ({
  label,
  cardNumber,
  expiry,
  cvc,
  onCardNumberChange,
  onExpiryChange,
  onCvcChange,
  icon = "/assets/creditCard.svg",
}: CreditCardInputProps) => {
  const handleCardChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    let value = e.target.value.replace(/\D/g, "").slice(0, 16);
    value = value.replace(/(.{4})/g, "$1 ").trim();
    onCardNumberChange(value);
  };

  const handleExpiryChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    let value = e.target.value.replace(/\D/g, "").slice(0, 4);
    if (value.length >= 3) value = value.slice(0, 2) + "/" + value.slice(2);
    onExpiryChange(value);
  };

  const handleCvcChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    // let value = e.target.value.replace(/\D/g, "").slice(0, 4);
    // if (value.length >= 3) value = value.slice(0, 2) + "/" + value.slice(2);
    onCvcChange(e.target.value);
  };

  return (
    <div className={styles.wrapper}>
      {label && (
        <CustomTypography variant="subtitle" className={styles.label}>
          {label}
        </CustomTypography>
      )}

      <div className={styles.container}>
        <CustomImage
          src={icon}
          width={20}
          height={20}
          className={styles.icon}
        />

        <input
          type="text"
          placeholder="1234 5678 1234 5678"
          className={styles.cardInput}
          value={cardNumber}
          onChange={handleCardChange}
          maxLength={19}
        />

        <input
          type="text"
          placeholder="MM/YY"
          className={styles.expiryInput}
          value={expiry}
          onChange={handleExpiryChange}
          maxLength={5}
        />

        <input
          type="text"
          placeholder="CVC"
          className={styles.cvcInput}
          value={cvc}
          onChange={handleCvcChange}
          maxLength={4}
        />
      </div>
    </div>
  );
};

export default CreditCardInput;
