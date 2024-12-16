import { ComponentProps } from "react";
import { twMerge } from "tailwind-merge";

export function Box(props: ComponentProps<"div">) {
  return (
    <div
      {...props}
      className={twMerge(
        "border border-zinc-200 rounded-sm p-4",
        props.className
      )}
    />
  );
}
