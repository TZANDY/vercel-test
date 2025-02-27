import Link from "next/link";
import { ModeToggle } from "./toggle-theme";
import { SignOutButton } from "./SignOutButton";

export default function NavBarItem() {
  return (
    <div className="flex justify-between items-center p-4 bg-gray-200 dark:bg-gray-900">
      <Link href="/" className="text-xl font-bold">
        Store App
      </Link>
      <ul className="flex gap-4">
        <li>
          <ModeToggle />
        </li>
        <li>
          <SignOutButton />
        </li>
      </ul>
    </div>
  );
}