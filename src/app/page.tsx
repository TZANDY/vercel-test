import NavBarItem from "@/components/app-navbar";
import { Button } from "@/components/ui/button";
import Link from "next/link";

export default function Home() {
  return (
    <>
      <NavBarItem />
      <div className="flex justify-center items-center h-screen">
        <Link href="/dashboard">
          <Button>Go to Dashboard</Button>
        </Link>
      </div>
    </>
  );
}
