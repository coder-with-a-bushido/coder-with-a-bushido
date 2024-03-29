export enum PostType {
  blog = "blog",
  story = "story",
}

export type Site = {
  website: string;
  author: string;
  desc: string;
  title: string;
  ogImage: string;
  postPerPage: number;
};

export type SocialObjects = {
  name: SocialMedia;
  href: string;
  linkTitle: string;
}[];

export type SocialIcons = {
  [social in SocialMedia]: string;
};

export type SocialMedia =
  | "Github"
  | "Facebook"
  | "Instagram"
  | "LinkedIn"
  | "Mail"
  | "Twitter"
  | "Twitch"
  | "YouTube"
  | "WhatsApp"
  | "Snapchat"
  | "Pinterest"
  | "TikTok"
  | "CodePen"
  | "Discord"
  | "GitLab"
  | "Reddit"
  | "Skype"
  | "Steam"
  | "Telegram"
  | "Mastodon";
