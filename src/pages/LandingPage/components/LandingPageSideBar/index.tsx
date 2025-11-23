import { landingPageSidebarConst } from "../../../../constants";
import CustomImage from "../../../../lib/CustomeImage";
import CustomTypography from "../../../../lib/Typography";
import styles from "./LandinPageSideBar.module.scss";

type LandingPageSidebarType = {
  selectedTab?: string;
  handleTabChange?: (data: any) => void;
  stepsCompleted?: string[];
  stepsIncompleted?: string[];
};
const LandingPageSidebar = (props: LandingPageSidebarType) => {
  const {
    selectedTab = "",
    handleTabChange = () => {},
    stepsCompleted = [],
    stepsIncompleted = [],
  } = props;

  return (
    <div className={styles?.sidebarWrapper}>
      {landingPageSidebarConst &&
        landingPageSidebarConst?.map((data) => {
          const isTabSelected = selectedTab === data?.value;
          const isStepsCompleted = stepsCompleted?.includes(data?.value);
          const isStepsIncompleted = stepsIncompleted?.includes(data?.value);
          return (
            <CustomTypography
              onClick={() => handleTabChange?.(data?.value)}
              className={`${styles?.sidebarLabel} ${isTabSelected ? styles["selected--tab"] : ""} ${isStepsIncompleted && !isTabSelected ? [styles["tabs--incomplete"]] : ""}`}
              variant="subtitle">
              {data?.label}
              {isStepsCompleted && (
                <span>
                  <CustomImage
                    src="/assets/circledCheck.svg"
                    width={20}
                    height={20}
                  />
                </span>
              )}
            </CustomTypography>
          );
        })}
    </div>
  );
};

export default LandingPageSidebar;
