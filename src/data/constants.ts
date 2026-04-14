import type { AstroComponent as LucideIcon } from "@lucide/astro";
import type { SvgComponent } from "astro/types";
import DerpibooruLogo from "@assets/derpibooru-logo.svg";
import CaraLogo from "@assets/cara-logo.svg";
import XLogo from "simple-icons/icons/x.svg";
import BlueSkyLogo from "simple-icons/icons/bluesky.svg";
import YoutubeLogo from "simple-icons/icons/youtube.svg";
import DeviantArtLogo from "simple-icons/icons/deviantart.svg";
import TumblrLogo from "simple-icons/icons/tumblr.svg";
import TikTokIcon from "simple-icons/icons/tiktok.svg";
import BilibiliLogo from "simple-icons/icons/bilibili.svg";
import RedNoteLogo from "simple-icons/icons/xiaohongshu.svg";

export const owner = {
  name: "MareStare",
  pfp: {
    src: "https://github.com/user-attachments/assets/eca21ca2-4b33-47a6-850c-138b6c676e43",
    alt: "Littlepip side view portrait. She's drinking coffee and looking to the right",
  },
  portrait: {
    src: "https://github.com/user-attachments/assets/57493dc8-a2f1-4f68-884c-8712ea05c315",
    alt:
      "Littlepip side view portrait. She's drinking coffee and looking to the right. " +
      "A little signing bird is flying on the background",
  },
  socials: [
    {
      category: "Blog",
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
          name: "Tumblr",
          icon: TumblrLogo,
          link: "https://www.tumblr.com/blog/mare-stare",
        },
        {
          name: "RedNote",
          icon: RedNoteLogo,
          link: "https://xhslink.com/m/9QfpXwKzvhG",
        },
      ],
    },
    {
      category: "Art",
      socials: [
        {
          name: "Derpibooru",
          icon: DerpibooruLogo,
          link: "https://derpibooru.org/profiles/MareStare",
        },
        {
          name: "DeviantArt",
          icon: DeviantArtLogo,
          link: "https://www.deviantart.com/marestare",
        },
        {
          name: "Cara",
          icon: CaraLogo,
          link: "https://cara.app/mare-stare",
        },
      ],
    },
    {
      category: "Video",
      socials: [
        {
          name: "YouTube",
          icon: YoutubeLogo,
          link: "https://www.youtube.com/@mare_stare",
        },
        {
          name: "TikTok",
          icon: TikTokIcon,
          link: "https://www.tiktok.com/@mare_stare?_r=1&_t=ZS-94WIVpPCnBI",
        },
        {
          name: "Bilibili",
          icon: BilibiliLogo,
          link: "https://space.bilibili.com/3706926550485567",
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
