import { ModeToggle } from "@/components/ModeToggle";
import { Button } from "@/components/ui/button";
const Home = () => {
  return (
    <div className="flex flex-col items-center justify-center h-screen">
      <h1 className="text-4xl font-bold">Welcome to Contakt-Ph</h1>
      <Button>Get Started</Button>
      <ModeToggle />
    </div>
  );
};

export default Home;
