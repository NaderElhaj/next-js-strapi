import { ReactNode } from "react";
import { classNames } from "../utils";

export type SectionVariant = "default" | "small" | "full";

export type BgVariant = "white" | "grey";

interface SectionLayoutProps {
  children: ReactNode;
  sectionVariant?: SectionVariant;
  bgVariant?: BgVariant;
  innerClassName?: string;
  className?: string;
}

const containersClass: Record<SectionVariant, string> = {
  default:
    "desktop:col-start-2 desktop:col-span-1  desktop:px-[40px] px-[15px]",
  small: "desktop:col-start-2 desktop:col-span-1  desktop:px-[52px] px-[12px]",
  full: "desktop:col-start-1 desktop:col-span-3 w-full",
};

const bgVariants = {
  white: "bg-[white]",
  grey: "bg-[#EEEEEE]",
};

const SectionLayout = ({
  children,
  sectionVariant = "default",
  bgVariant = "white",
  className,
  innerClassName,
}: SectionLayoutProps) => {
  const sectionClassName = classNames(
    "grid  desktop:grid-cols-[1fr_1320px_1fr] grid-rows-1 grid-cols-1 desktop:px-0",
    bgVariants[bgVariant],
    className,
  );
  const contentClassName = classNames(
    containersClass[sectionVariant],
    innerClassName,
  );

  return (
    <div className={sectionClassName}>
      <div className={contentClassName}>{children}</div>
    </div>
  );
};

export default SectionLayout;
