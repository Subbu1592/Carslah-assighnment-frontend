import CustomImageUploader from "../../../../lib/CustomImageUploader";
import CustomInput from "../../../../lib/CustomInput";
import CustomToggle from "../../../../lib/CustomToggle";
import CustomTypography from "../../../../lib/Typography";
import styles from "../SubscriptionPlan/Subscriptionplan.module.scss";
import deviceStyles from "./DeviceManagement.module.scss";

type DevicemanagementType = {
  handleDeviceManagementToggle?: (key: any, value: any, value2: any) => void;
  deviceManagemantData?: any;
};
const Devicemanagement = (props: DevicemanagementType) => {
  const { handleDeviceManagementToggle = () => {}, deviceManagemantData = {} } =
    props;
  return (
    <div className={styles?.subscriptionWrapper}>
      {/* heading */}
      <div className={styles?.subscriptionsection1}>
        <CustomTypography className={styles?.subscriptionHeading} variant="h3">
          Device management
        </CustomTypography>
        <CustomTypography
          className={styles?.subscriptionSubHeading}
          variant="small">
          Add details of the device, if any already installed on your car. If
          none, then continue to next step.
        </CustomTypography>
      </div>
      {/* 1 */}
      {deviceManagemantData.map((device: any, index: number) => {
        return (
          <div
            key={index}
            className={`${styles?.subscriptionsection2} ${deviceStyles?.cardWrapper}`}>
            <CustomTypography variant="subtitle">
              Device {index + 1}
            </CustomTypography>

            <div className={deviceStyles?.deviceWrapper}>
              {/* Left side */}
              <div className={deviceStyles?.inputWrapper}>
                <CustomInput
                  value={device.deviceType}
                  label="Device type"
                  placeholder="Please Enter Device Type"
                  onChange={(e: any) =>
                    handleDeviceManagementToggle(
                      index,
                      "deviceType",
                      e.target.value
                    )
                  }
                />

                {device.bringingYourOwnDevice && (
                  <CustomInput
                    label="Serial number"
                    value={device.serialNumber}
                    placeholder="Enter serial number"
                    onChange={(e: any) =>
                      handleDeviceManagementToggle(
                        index,
                        "serialNumber",
                        e.target.value
                      )
                    }
                  />
                )}
              </div>

              {/* Right side */}
              <div>
                <CustomToggle
                  label="Bringing your own device?"
                  checked={device.bringingYourOwnDevice}
                  onChange={() =>
                    handleDeviceManagementToggle(
                      index,
                      "bringingYourOwnDevice",
                      !device.bringingYourOwnDevice
                    )
                  }
                />

                <div className={styles?.description}>
                  Toggle this on if you're bringing your own device.
                </div>

                {device.bringingYourOwnDevice && (
                  <CustomImageUploader
                    label="Upload an image of the device"
                    onChange={(file: any) =>
                      handleDeviceManagementToggle(
                        index,
                        "imagePath",
                        URL.createObjectURL(file)
                      )
                    }
                  />
                )}
              </div>
            </div>
          </div>
        );
      })}
    </div>
  );
};

export default Devicemanagement;
