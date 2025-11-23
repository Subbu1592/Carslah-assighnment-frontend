import { type ReactNode } from "react";
import styles from "./CustomModal.module.scss";

interface CustomPopUpModalProps {
  isOpen: boolean;
  onClose: () => void;
  children: ReactNode;
  closeOnOutsideClick?: boolean;
  showCloseIcon?: boolean;
  width?: string;
}

const CustomPopUpModal = ({
  isOpen,
  onClose,
  children,
  closeOnOutsideClick = true,
  showCloseIcon = true,
  width = "450px",
}: CustomPopUpModalProps) => {
  if (!isOpen) return null;

  const handleOutsideClick = () => {
    if (closeOnOutsideClick) onClose();
  };

  return (
    <div className={styles.overlay} onClick={handleOutsideClick}>
      <div
        className={styles.modal}
        style={{ width }}
        onClick={(e) => e.stopPropagation()}>
        {showCloseIcon && (
          <span className={styles.closeBtn} onClick={onClose}>
            &times;
          </span>
        )}

        <div className={styles.content}>{children}</div>
      </div>
    </div>
  );
};

export default CustomPopUpModal;
