import type { AstroComponent as LucideIcon } from "@lucide/astro";
import type { SvgComponent } from "astro/types";
import DerpibooruLogo from "@assets/derpibooru-logo.svg";
import XLogo from "simple-icons/icons/x.svg";
import BlueSkyLogo from "simple-icons/icons/bluesky.svg";
import YoutubeLogo from "simple-icons/icons/youtube.svg";

export const owner = {
  name: "MareStare",
  pfp: {
    src: "https://github.com/user-attachments/assets/4569fa3a-e728-4688-8650-ad3c1fcd3af3",
    alt: "Cherilee's face with lidded eyes",
  },
  portrait: {
    src: "https://github.com/user-attachments/assets/9026773d-8640-46a2-a50b-462374bc9f8f",
    alt: "Cheerilee's face with the words 'Mare Stare' in her eyes",
  },
  socials: [
    {
      category: "Socials",
      socials: [
        {
          name: "X (Twitter)",
          icon: XLogo,
          link: "https://x.com/mare_stare",
        },
        {
          name: "BlueSky",
          icon: BlueSkyLogo,
          link: "https://bsky.app/profile/mare-stare.com",
        },
        {
          name: "YouTube",
          icon: YoutubeLogo,
          link: "https://www.youtube.com/@mare_stare",
        },
        {
          name: "Derpibooru",
          icon: DerpibooruLogo,
          link: "https://derpibooru.org/profiles/MareStare",
        },
      ],
    },
  ] satisfies SocialCategory[],
};

export interface Social {
  name: string;
  icon: SvgComponent | LucideIcon;
  link: string;
}

interface SocialCategory {
  category: string;
  socials: Social[];
}
