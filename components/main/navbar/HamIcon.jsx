import { ModeToggle } from "@/components/mode-toggle";
import { Button } from "@/components/ui/button";
import {
  Sheet,
  SheetContent,
  SheetDescription,
  SheetFooter,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet";

export function HamIcon() {
  return (
    <Sheet>
      <SheetTrigger>
        <svg
          className="block h-7 w-7 dark:stroke-white dark:bg-black"
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
          aria-hidden="true"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={2}
            d="M4 6h16M4 12h16M4 18h16"
          />
        </svg>
      </SheetTrigger>
      <SheetContent side="top">
        <SheetHeader>
          <SheetTitle className="text-center">Menu</SheetTitle>
        </SheetHeader>
        <div className="mt-4">
          <ul className="list-none mx-0 text-base py-1">
            <div className="text-center py-2">
              <Button
                className="w-2/4"
                onClick={() => {
                  location.assign("/signup");
                }}
              >
                Signup
              </Button>
            </div>
            <div className="text-center py-2">
              <Button
                className="w-2/4"
                onClick={() => {
                  location.assign("/login");
                }}
              >
                Login
              </Button>
            </div>
          </ul>
        </div>
        <div className="w-full flex justify-center items-center gap-3 mt-10">
          <p>Dark Mode</p>
          <ModeToggle />
        </div>
        <SheetFooter>
          <div className="w-full mt-7 text-foreground/50">
            <p className="text-center">
              AuthKeeper &copy; {new Date().getFullYear()}. All rights reserved.
            </p>
          </div>
        </SheetFooter>
      </SheetContent>
    </Sheet>
  );
}
