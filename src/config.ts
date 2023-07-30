import type { Site, SocialObjects } from "./types";

export const SITE: Site = {
  website: "https://coder-with-a-bushido.in/",
  author: "Karthikeyan S",
  desc: "Technical blog and personal stories of Karthik.",
  title: "coder with a bushido",
  ogImage: "astropaper-og.jpg",
  postPerPage: 8,
};

export const LOCALE = ["en-EN"]; // set to [] to use the environment default

export const SOCIALS: SocialObjects = [
  {
    name: "Mail",
    href: "mailto:karthikeyanssvk@gmail.com",
    linkTitle: `Send an email to ${SITE.title}`,
  },
  {
    name: "Github",
    href: "https://github.com/coder-with-a-bushido",
    linkTitle: ` ${SITE.title} on Github`,
  },
  {
    name: "LinkedIn",
    href: "https://www.linkedin.com/in/karthikeyanssvk",
    linkTitle: `${SITE.title} on LinkedIn`,
  },
  {
    name: "Twitter",
    href: "https://twitter.com/_KarthikeyanS_",
    linkTitle: `${SITE.title} on Twitter`,
  },
  {
    name: "Discord",
    href: "https://discordapp.com/users/184554489041125376",
    linkTitle: `${SITE.title} on Discord`,
  },
  {
    name: "Reddit",
    href: "https://www.reddit.com/user/Psychological_Ad6500",
    linkTitle: `${SITE.title} on Reddit`,
  },
];
