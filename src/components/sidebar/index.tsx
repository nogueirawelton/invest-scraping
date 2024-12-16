import { Menu } from "@/components/sidebar/menu";
import { User } from "./user";

export function Sidebar() {
  return (
    <aside className="border border-zinc-200 p-4 rounded-sm">
      <User />
      <Menu />
    </aside>
  );
}
