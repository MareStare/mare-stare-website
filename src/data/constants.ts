import type { AstroComponent as LucideIcon } from "@lucide/astro";
import type { SvgComponent } from "astro/types";
import DerpibooruLogo from "@assets/derpibooru-logo.svg";
import XLogo from "simple-icons/icons/x.svg";
import YoutubeLogo from "simple-icons/icons/youtube.svg";

export const ownerName = "MareStare";

/**
 * List of owner's socials. They are logically grouped into categories.
 */
export const socials: SocialCategory[] = [
  {
    category: "Socials",
    socials: [
      {
        name: "Derpibooru",
        icon: DerpibooruLogo,
        link: "https://derpibooru.org/profiles/MareStare",
      },
      {
        name: "X (Twitter)",
        icon: XLogo,
        link: "https://x.com/mare_stare",
      },
      {
        name: "YouTube",
        icon: YoutubeLogo,
        link: "https://www.youtube.com/@mare_stare",
      },
    ],
  },
];

export interface Social {
  name: string;
  icon: SvgComponent | LucideIcon;
  link: string;
}

interface SocialCategory {
  category: string;
  socials: Social[];
}
