# 🚗 DriveMate – Host Onboarding Platform

A modern, polished onboarding system that helps car owners seamlessly set up their vehicles on the DriveMate platform.  
Built with reusable components, clean architecture, and a step-based guided user experience.

---

## 📌 Overview

DriveMate simplifies host onboarding with an intuitive interface built for clarity and speed.  
Users can:

- 📍 Navigate through a multi-step onboarding flow  
- 💳 Select subscription plans and add payment details  
- 📱 Manage multiple devices with image uploads and dynamic fields  
- 🧩 Use custom reusable UI components for a consistent user experience  
- 💾 Save progress using local storage  
- 🧭 Move between steps with a sidebar-driven navigation  
- 🎨 Enjoy a fully SCSS-styled, modular UI  

---

## 🚀 Tech Stack

**Frontend**
- React 18
- TypeScript
- SCSS Modules
- Vite (or Next.js if used)
- Redux Toolkit

**Custom UI Components**
- Typography  
- Input  
- Toggle  
- ImageUploader  
- Modal  
- Dropdown  

---

## 🗂 Project Structure



---

## ✨ Key Features

### ✔ Subscription Management
- Choose subscription plans  
- Enter and store credit card details  
- Persist data in local storage  
- Display stored data inside a clean popup modal  

---

### ✔ Device Management
Each device entry supports:

- Device type  
- Serial number  
- “Bringing your own device?” toggle  
- Image upload with preview (`URL.createObjectURL`)  
- Dynamic device support (unlimited devices)  

---

### ✔ Reusable Component Library
The project ships with its own mini UI library:

- `<CustomInput />`
- `<CustomToggle />`
- `<CustomImageUploader />`
- `<CustomTypography />`
- `<CustomDropDown />`
- `<CustomModal />`

Consistent styling, behavior, and SCSS-based theming across the entire app.

---

## 💾 Local Storage Integration

Data (subscription details, device configs, etc.) is cached using a small reusable utility:

```ts
storage.set("subscriptionPlan", {
  selectedPlan,
  subscriptionRate,
  creditCardDetails
});


# Install dependencies
npm install

# Start dev server
npm run dev

# Build for production
npm run build


