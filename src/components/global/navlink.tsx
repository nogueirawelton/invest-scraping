"use client";

import Link from "next/link";
import { Button } from "../ui/button";
import { ComponentProps } from "react";
import { usePathname, useSearchParams } from "next/navigation";

export function NavLink(props: ComponentProps<typeof Link>) {
  const pathname = usePathname();

  const isLinkActive =
    props.href != "/"
      ? pathname.includes(props.href.toString())
      : props.href == pathname;

  return (
    <Button
      asChild
      variant={isLinkActive ? "default" : "ghost"}
      className="w-full justify-start gap-4"
    >
      <Link {...props} />
    </Button>
  );
}
