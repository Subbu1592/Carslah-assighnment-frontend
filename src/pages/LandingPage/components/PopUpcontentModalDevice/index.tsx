import styles from "../../LandingPage.module.scss";
import CustomPopUpModal from "../../../../lib/CustomModal";
import CustomImage from "../../../../lib/CustomeImage";

type PopUpModalContentType = {
  open?: boolean;
  setOpen?: (data: any) => void;
  devices?: any;
};
const PopUpModalContentDeviceManagement = (props: PopUpModalContentType) => {
  const { open = false, setOpen = () => {}, devices = [] } = props;

  return (
    <CustomPopUpModal isOpen={open} onClose={() => setOpen(false)}>
      <div className={styles.overlay}>
        <div className={styles.modal}>
          <div className={styles.header}>
            <h2>Device Details</h2>
          </div>

          <div className={styles.content}>
            {devices.length === 0 && <p>No device data found.</p>}
            {devices.map((device: any, index: number) => {
              console.log(device?.imagePath, "imagepath");
              return (
                <div key={index} className={styles.deviceCard}>
                  <h3>Device {index + 1}</h3>

                  <div className={styles.row}>
                    <span className={styles.label}>Device Type : </span>
                    <span className={styles.value}>
                      {device.deviceType || "—"}
                    </span>
                  </div>

                  {device.bringingYourOwnDevice && (
                    <div className={styles.row}>
                      <span className={styles.label}>Serial Number : </span>
                      <span className={styles.value}>
                        {device.serialNumber || "—"}
                      </span>
                    </div>
                  )}

                  <div className={styles.row}>
                    <span className={styles.label}>Own Device : </span>
                    <span className={styles.value}>
                      {device.bringingYourOwnDevice ? "Yes" : "No"}
                    </span>
                  </div>

                  {device.imagePath && (
                    <div className={styles.imageWrapper}>
                      <CustomImage src={device.imagePath} alt="Device" />
                    </div>
                  )}
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </CustomPopUpModal>
  );
};

export default PopUpModalContentDeviceManagement;
