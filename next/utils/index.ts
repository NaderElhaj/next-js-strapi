export function classNames(...classes: (string | Falsy)[]) {
  return classes.filter(Boolean).join(" ");
}

type Falsy = boolean | undefined | null | 0;

export type Optional<T, K extends keyof T> = Pick<Partial<T>, K> & Omit<T, K>;
