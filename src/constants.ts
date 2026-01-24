import type { Props } from "astro";
import IconMail from "@/assets/icons/IconMail.svg";
import IconGitHub from "@/assets/icons/IconGitHub.svg";
import IconLinkedin from "@/assets/icons/IconLinkedin.svg";
import IconArchive from "@/assets/icons/IconArchive.svg";
import IconDiscordStroke from "@/assets/icons/IconDiscordStroke.svg";

import { SITE } from "@/config";

export interface Social {
  name: string;
  href: string;
  linkTitle: string;
  icon: (_props: Props) => Element;
}

export const SOCIALS: Social[] = [
  {
    name: "GitHub",
    href: "https://github.com/drazenbuljovcic",
    linkTitle: `${SITE.title} on GitHub`,
    icon: IconGitHub,
  },
  {
    name: "Discord",
    href: "https://discord.gg/6NJhCuPG",
    linkTitle: "Discord",
    icon: IconDiscordStroke,
  },
  {
    name: "LinkedIn",
    href: "https://www.linkedin.com/in/drazenbuljovcic/",
    linkTitle: `${SITE.title} on LinkedIn`,
    icon: IconLinkedin,
  },
  {
    name: "Letter",
    href: "https://drive.google.com/file/d/1cBvvH94DmbX1mE5gAA6dtFRyZG2wILQe/view?usp=sharing",
    linkTitle: `Online Presence`,
    icon: IconArchive,
  },
  {
    name: "Mail",
    href: "mailto:drazen.buljovcic@gmail.com",
    linkTitle: `Send an email to ${SITE.title}`,
    icon: IconMail,
  },
] as const;

export const SHARE_LINKS: Social[] = [
  {
    name: "Discord",
    href: "https://wa.me/?text=",
    linkTitle: `Share this post via Discord`,
    icon: IconDiscordStroke,
  },
] as const;
