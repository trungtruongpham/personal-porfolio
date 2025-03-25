import Link from "next/link";
import {
  GitHubIcon,
  LinkedInIcon,
  TwitterIcon,
  EmailIcon,
} from "@/components/ui/icons";
import { Button } from "@/components/ui/button";

const SOCIAL_LINKS = [
  {
    name: "GitHub",
    href: "https://github.com/trungtruongpham",
    icon: GitHubIcon,
  },
  {
    name: "LinkedIn",
    href: "https://linkedin.com/in/truongtpham",
    icon: LinkedInIcon,
  },
  {
    name: "Twitter",
    href: "https://twitter.com/truongtpham",
    icon: TwitterIcon,
  },
  {
    name: "Email",
    href: "mailto:truong@example.com",
    icon: EmailIcon,
  },
];

export function Footer() {
  return (
    <footer className="border-t bg-background">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8 md:py-6 lg:py-8">
        <div className="flex flex-col items-center gap-8 md:flex-row md:justify-between">
          <div className="text-center md:text-left">
            <p className="text-sm leading-loose text-muted-foreground">
              © {new Date().getFullYear()} Truong Pham. All rights reserved.
            </p>
          </div>

          <div className="flex items-center justify-center gap-4">
            {SOCIAL_LINKS.map((link) => (
              <Button
                key={link.name}
                variant="ghost"
                size="icon"
                className="rounded-full h-9 w-9"
                asChild
              >
                <Link
                  href={link.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={link.name}
                >
                  <link.icon className="h-4 w-4" />
                </Link>
              </Button>
            ))}
          </div>

          <div className="text-center md:text-right">
            <p className="text-sm text-muted-foreground">
              Built with{" "}
              <Link
                href="https://nextjs.org"
                target="_blank"
                rel="noopener noreferrer"
                className="font-medium underline underline-offset-4"
              >
                Next.js
              </Link>{" "}
              and{" "}
              <Link
                href="https://ui.shadcn.com"
                target="_blank"
                rel="noopener noreferrer"
                className="font-medium underline underline-offset-4"
              >
                shadcn/ui
              </Link>
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
}
