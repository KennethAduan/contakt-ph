import AppIcon from "@/components/AppIcon";
import SignUpPage from "@/modules/auth/sign-up/SignUpPage";
import React from "react";

const page = () => {
  return (
    <>
      <AppIcon src="/AppLogo.png" alt="App Icon" width={150} height={150} />
      <SignUpPage />
    </>
  );
};

export default page;
