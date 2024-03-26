"use client";

import { useRouter } from "next/navigation";
import { Info, Briefcase, Newspaper, Mail, Home } from "lucide-react";

import { ModeToggle } from "@/components/ui/mode_toggle";
import { Button } from "@/components/ui/button";
import { Logo } from "@/components/ui/logo";

export default function Header() {
  const router = useRouter();

  const buttons = [
    { label: "home", path: "/", icon: <Home className="md:hidden h-5 w-5" /> },
    {
      label: "stories",
      path: "/stories",
      icon: <Newspaper className="md:hidden h-4 w-4" />,
    },
    {
      label: "projects",
      path: "/projects",
      icon: <Briefcase className="md:hidden h-4 w-4" />,
    },
    {
      label: "about",
      path: "/about",
      icon: <Info className="md:hidden h-5 w-5" />,
    },
  ];

  function navigateTo(path: string) {
    router.push(path);
  }

  return (
    <div className="mx-auto my-auto px-4 sm:px-6 md:max-w-5xl xl:px-0">
      <header className="flex items-center justify-between py-10">
        <div className="mr-3">
          <Logo className="w-20 h-20" />
        </div>

        <div className="space-x-3 items-center">
          {buttons.map((button, index) => (
            <Button
              key={index}
              onClick={() => navigateTo(button.path)}
              size="sm"
              className="ml-auto h-8"
            >
              {button.icon}
              <span className="hidden md:block text-sm">{button.label}</span>
            </Button>
          ))}
          <ModeToggle />
        </div>
      </header>
    </div>
  );
}
