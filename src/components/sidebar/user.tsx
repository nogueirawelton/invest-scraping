"use client";

import { Avatar, AvatarImage } from "@/components/ui/avatar";
import { Skeleton } from "../ui/skeleton";
import { useStore } from "@/store";

export function User() {
  const user = useStore((store) => store.user);

  if (!user) {
    return (
      <header className="flex items-center gap-4">
        <Skeleton className="h-10 w-10 rounded-full" />
        <Skeleton className="h-5 flex-1" />
      </header>
    );
  }

  return (
    <header className="flex items-center gap-4">
      <Avatar>
        <AvatarImage src={user.avatar} />
      </Avatar>

      <strong className="text-lg text-slate-950">{user.name}</strong>
    </header>
  );
}
