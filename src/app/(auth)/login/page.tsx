import AppIcon from "@/components/AppIcon";
import LoginPage from "@/modules/auth/login/LoginPage";

const page = () => {
  return (
    <div className="flex min-h-svh w-full items-center justify-center p-6 md:p-10">
      <div className="w-full max-w-sm">
        <AppIcon src="/AppLogo.png" alt="App Icon" width={100} height={100} />
        <LoginPage />
      </div>
    </div>
  );
};

export default page;
