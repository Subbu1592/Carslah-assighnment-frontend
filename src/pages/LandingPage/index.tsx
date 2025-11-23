import { useState } from "react";
import { useAppDispatch, useAppSelector } from "../../store/hooks";
import Devicemanagement from "./components/DeviceManagement";
import LandingPageSidebar from "./components/LandingPageSideBar";
import styles from "./LandingPage.module.scss";
import Footer from "./components/Footer";
import { landingPageSidebarConst } from "../../constants";
import SubscriptionPlan from "./components/SubscriptionPlan";
import NotFound from "./components/NotFound";
import CustomDropDown from "../../lib/CustomDropDown";
import { storage } from "../../utils/localStorageUtil";
import PopUpModalContent from "./components/PopUpModalContent";
import PopUpModalContentDeviceManagement from "./components/PopUpcontentModalDevice";

const initialDeviceCountValue = [
  {
    deviceType: "",
    serialNumber: "",
    bringingYourOwnDevice: false,
    imagePath: "",
  },
  {
    deviceType: "",
    serialNumber: "",
    bringingYourOwnDevice: false,
    imagePath: "",
  },
  {
    deviceType: "",
    serialNumber: "",
    bringingYourOwnDevice: false,
    imagePath: "",
  },
  {
    deviceType: "",
    serialNumber: "",
    bringingYourOwnDevice: false,
    imagePath: "",
  },
];
const LandingPage = () => {
  const name = useAppSelector((state) => state.user.name);
  const dispatch = useAppDispatch();

  const [selectedTab, setSelectedTab] = useState("subscription");
  const [isPlanSelected, setIsPlanSelected] = useState(false);
  const [selectedPlan, setSelectedPlan] = useState("");
  const [subscriptionRate, setSubscriptionRate] = useState("");
  const [open, setOpen] = useState(false);
  const [creditCardDetails, setCreditCardDetails] = useState({
    cardNumber: "",
    expiry: "",
    cvc: "",
  });
  const [deviceManagemantData, setDeviceManagemantData] = useState(
    initialDeviceCountValue
  );
  console.log(selectedTab, "selectedPlan");
  // useing constant method for now
  const stepsCompleted = [
    "location",
    "about",
    "features",
    "rules",
    "pricing",
    "promotion",
    "pictures",
    "insurance",
  ];

  const stepsIncompleted = ["subscription", "device", "easyAccess"];

  const handleTabChange = (selectedValue: any) => {
    setSelectedTab(selectedValue);
  };

  const handlePlanChange = (value: string) => {
    setSelectedPlan?.(value);
  };

  const handleScriptionrateChange = (value: string) => {
    setSubscriptionRate(value);
  };

  const handleCardDetailsChange = (key?: any, value?: any) => {
    setCreditCardDetails({ ...creditCardDetails, [key]: value });
  };

  // const handleDeviceManagementToggle = (key: string, value: any) => {
  //   setDeviceManagemantData((prev) => ({
  //     ...prev,
  //     [key]: value,
  //   }));
  // };
  const handleDeviceManagementToggle = (
    index: number,
    key: string,
    value: any
  ) => {
    setDeviceManagemantData((prev) => {
      const updated = [...prev];
      updated[index] = { ...updated[index], [key]: value };
      return updated;
    });
  };

  // const handleNextTabChange = () => {
  //   const currentIndex = landingPageSidebarConst?.findIndex(
  //     (item) => item.value === selectedTab
  //   );

  //   const nextIndex = currentIndex + 1;

  //   // if next index exists move to next
  //   if (nextIndex < landingPageSidebarConst?.length) {
  //     setSelectedTab(landingPageSidebarConst[nextIndex]?.value);
  //   } else {
  //     console.log("You are on the last tab!");
  //   }
  // };

  const handleSaveChanges = () => {
    storage.set("subscriptionPlan", {
      selectedPlan: selectedPlan,
      subscriptionRate: subscriptionRate,
      creditCardDetails: creditCardDetails,
    });
    setOpen(true);
  };

  const subscriptionData: any = storage.get("subscriptionPlan");

  const renderComponent = {
    subscription: (
      <SubscriptionPlan
        isPlanSelected={isPlanSelected}
        setIsPlanSelected={setIsPlanSelected}
        handlePlanChange={handlePlanChange}
        selectedPlan={selectedPlan}
        subscriptionRate={subscriptionRate}
        handleScriptionrateChange={handleScriptionrateChange}
        handleCardDetailsChange={handleCardDetailsChange}
        creditCardDetails={creditCardDetails}
      />
    ),
    device: (
      <Devicemanagement
        deviceManagemantData={deviceManagemantData}
        handleDeviceManagementToggle={handleDeviceManagementToggle}
      />
    ),
  };

  const popupContent = {
    subscription: (
      <PopUpModalContent
        open={open}
        setOpen={setOpen}
        subscriptionData={subscriptionData}
      />
    ),
    device: (
      <PopUpModalContentDeviceManagement
        open={open}
        setOpen={setOpen}
        devices={deviceManagemantData}
      />
    ),
  };
  return (
    <div className={styles?.wrapper}>
      {/* 1 */}
      <CustomDropDown
        className={styles?.landingPageDropdown}
        value={selectedTab}
        onChange={handleTabChange}
        options={landingPageSidebarConst}
      />
      <div className={styles?.sidebar}>
        <LandingPageSidebar
          selectedTab={selectedTab}
          handleTabChange={handleTabChange}
          stepsCompleted={stepsCompleted}
          stepsIncompleted={stepsIncompleted}
        />
      </div>
      {/* 2 */}
      <div className={styles?.mainContainer}>
        {renderComponent[selectedTab as keyof typeof renderComponent] ?? (
          <NotFound handleTabChange={handleTabChange} />
        )}
      </div>
      <Footer handleNextTabChange={handleSaveChanges} />
      {popupContent?.[selectedTab as keyof typeof popupContent] ?? <NotFound />}
    </div>
  );
};

export default LandingPage;
