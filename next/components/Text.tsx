import { classNames } from "@/utils";

export type fontFamilys = "lausanne" | "everett";

export type fontColors = "primary" | "green" | "grey" | "black" | "white";
export type fontSizess = "h1" | "h2" | "h3" | "h4" | "p";

const fontFamilies: Record<fontFamilys, string> = {
  lausanne: "font-lausanne",
  everett: " font-everett",
};

const fontSizes: Record<fontSizess, string> = {
  h1: "text-[42px]",
  h2: "text-[32px]",
  h3: "text-[24px]",
  h4: "text-[20px]",
  p: "text-[18px]",
};

const fontColorss: Record<fontColors, string> = {
  primary: "text-primary",
  green: "text-primary",
  grey: "text-grey",
  black: "text-[black]",
  white: "text-[white]",
};

interface Props {
  as?: fontSizess;
  fontColor?: fontColors;
  fontFamily?: "lausanne" | "everett";
  bold?: boolean;
  oblique?: boolean;
  className?: string;
  children: string;
}

export default function Text({
  as = "p",
  fontFamily = "lausanne",
  fontColor = "black",
  oblique,
  bold,
  className,
  children,
}: Props) {
  const T = as;
  return (
    <T
      className={classNames(
        fontSizes[as],
        fontFamilies[fontFamily],
        fontColorss[fontColor],
        bold && "font-bold",
        oblique && "italic",
        className,
      )}
    >
      {children}
    </T>
  );
}
