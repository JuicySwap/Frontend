import { ContextApi } from "@pancakeswap/localization";
import { FooterLinkType } from "../../../components/Footer/types";

export const footerLinks: (t: ContextApi["t"]) => FooterLinkType[] = (t) => [
  {
    label: t("About"),
    items: [
      {
        // TODO need to add translate and check href
        label: t("Business Contact"),
        href: "https://docs.pancakeswap.finance/contact-us",
      },
      {
        // TODO need to add translate and check href
        label: t("Whitepaper"),
        href: "https://docs.pancakeswap.finance/brand",
      },
      {
        // TODO need to add translate and check href
        label: t("Zealy (Ex Crew3)"),
        href: "https://blog.pancakeswap.finance/",
      },
      // {
      //   label: t("Community"),
      //   href: "https://docs.pancakeswap.finance/contact-us/telegram",
      // },
      // {
      //   label: t("Litepaper"),
      //   href: "https://v2litepaper.pancakeswap.finance/",
      // },
      // {
      //   label: t("Terms Of Service"),
      //   href: "https://pancakeswap.finance/terms-of-service",
      // },
    ],
  },
  {
    label: t("Help"),
    items: [
      {
        label: t("Support"),
        href: "https://docs.pancakeswap.finance/contact-us/customer-support",
      },
      {
        label: t("Guides"),
        href: "https://docs.pancakeswap.finance/get-started",
      },
      {
        label: "Github",
        href: "https://github.com/pancakeswap",
      },
    ],
  },
  // {
  //   label: t("Developers"),
  //   items: [
  //     {
  //       label: "Github",
  //       href: "https://github.com/pancakeswap",
  //     },
  //     {
  //       label: t("Documentation"),
  //       href: "https://docs.pancakeswap.finance",
  //     },
  //     {
  //       label: t("Bug Bounty"),
  //       href: "https://docs.pancakeswap.finance/code/bug-bounty",
  //     },
  //     {
  //       label: t("Audits"),
  //       href: "https://docs.pancakeswap.finance/help/faq#is-pancakeswap-safe-has-pancakeswap-been-audited",
  //     },
  //     {
  //       label: t("Careers"),
  //       href: "https://docs.pancakeswap.finance/hiring/become-a-chef",
  //     },
  //   ],
  // },
];
