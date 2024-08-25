import { ArrowRight, DownloadIcon, HamburgerIcon } from "./svg-icons";

const Icon = (props: any) => {
  const icons: any = {
    ci: {
      hamburger: <HamburgerIcon {...props} />,
    },
    basil: {
      download: <DownloadIcon {...props} />,
    },
    fluent: {
      "arrow-right": <ArrowRight {...props} />,
    },
  };

  const iconParts = props?.icon?.split(":");
  const iconGroup = icons?.[iconParts?.[0]];
  const iconItem = iconGroup?.[iconParts?.[1]];

  return iconItem || null;
};

export default Icon;
