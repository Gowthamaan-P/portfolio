"use client";

import { useRouter } from "next/navigation";

import siteMetadata from "@/constants/site-metadata";
import SocialIcon from "@/components/ui/social_icons";
import { Button } from "@/components/ui/button";

export default function Footer() {
  const router = useRouter();

  const socialMediaPlatforms = [
    { kind: "mail", href: `mailto:${siteMetadata.email}`},
    { kind: "github", href: siteMetadata.github},
    { kind: "linkedin", href: siteMetadata.linkedin},
    { kind: "x", href: siteMetadata.x},
  ];

  const buttons = [
    { label: "home", path: "/", onClick: () => navigateTo("/")},
    {
      label: "stories",
      path: "/stories",
      onClick: () => navigateTo("/stories"),
    },
    {
      label: "projects",
      path: "/projects",
      onClick: () => navigateTo("/projects"),
    },
    {
      label: "about",
      path: "/about",
      onClick: () => navigateTo("/about"),
    },
  ];

  function navigateTo(path: string) {
    router.push(path);
  }

  return (
    <footer>
      <div className="mt-16 flex flex-col items-center">
        <div className="mb-3 flex space-x-4">
          {socialMediaPlatforms.map((platform, index) => (
            <SocialIcon
              key={index}
              kind={platform.kind}
              href={platform.href}
            />
          ))}
        </div>
        <div className="mb-2 flex space-x-2 text-sm text-gray-500 dark:text-gray-400">
          <div>{`© ${new Date().getFullYear()}`}</div>
          <div>{` • `}</div>
          <div>{siteMetadata.author}</div>
        </div>
        <div className="mb-8 flex flex-col space-x-2 text-sm text-gray-500 dark:text-gray-400 md:flex-row">
          {buttons.map((button, index) => (
            <Button
              key={index}
              onClick={button.onClick}
              size="sm"
              className="ml-auto h-8"
            >
              <span className="hidden md:block text-sm">{button.label}</span>
            </Button>
          ))}
        </div>
      </div>
    </footer>
  );
}
