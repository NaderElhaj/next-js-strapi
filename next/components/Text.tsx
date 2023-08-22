import { classNames } from "@/utils";

export type fontFamilys = "lausanne";

export type fontColors = "primary" | "grey" | "black" | "white";
export type fontSizess = "h1" | "h2" | "h3" | "h4" | "p";
export type fontWeights =
  | "thin"
  | "light"
  | "regular"
  | "medium"
  | "demibold"
  | "bold"
  | "extrabold"
  | "heavy";

const fontFamilies: Record<fontFamilys, string> = {
  lausanne: "font-lausanne",
};

const fontVariants: Record<fontWeights, string> = {
  thin: "font-[100]",
  light: "font-[200] ",
  regular: "font-[400] ",
  medium: "font-[500] ",
  demibold: "font-[600] ",
  bold: "font-[700] ",
  extrabold: "font-[800] ",
  heavy: "font-[900]",
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
  grey: "text-grey",
  black: "text-[black]",
  white: "text-[white]",
};

interface Props {
  as?: fontSizess;
  fontColor?: fontColors;
  fontFamily?: fontFamilys;
  fontWeight?: fontWeights;
  oblique?: boolean;
  className?: string;
  children: string;
}

export default function Text({
  as = "p",
  fontFamily = "lausanne",
  fontWeight = "regular",
  fontColor = "black",
  oblique,
  className,
  children,
}: Props) {
  const T = as;
  return (
    <T
      className={classNames(
        fontSizes[as],
        fontVariants[fontWeight],
        fontFamilies[fontFamily],
        fontColorss[fontColor],
        oblique && "italic",
        className,
      )}
    >
      {children}
    </T>
  );
}
